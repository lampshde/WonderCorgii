import {
    Object3D
} from 'three';

import {
    Mesh,
    Vector3,
    SplineCurve, 
    Geometry,
    Color,
} from 'three';
import {
    MeshLine,
    MeshLineMaterial
} from 'three.meshline';

const getRandomFloat = (min, max) => (Math.random() * (max - min)) + min;


class AnimatedMeshLine extends Mesh {
    constructor({
        width = 0.1,
        speed = 0.01,
        visibleLength = 0.5,
        color = new Color('#000000'),
        opacity = 1,
        position = new Vector3(0, 0, 0),

        // Array of points already done
        points = false,
        // Params to create the array of points
        length = 2,
        nbrOfPoints = 3,
        orientation = new Vector3(1, 0, 0),
        turbulence = new Vector3(0, 0, 0),
        transformLineMethod = false,
    } = {}) {
        // * ******************************
        // * Create the main line
        let linePoints = [];
        if (!points) {
            const currentPoint = new Vector3();
            // The size of each segment oriented in the good directon
            const segment = orientation.normalize().multiplyScalar(length / nbrOfPoints);
            linePoints.push(currentPoint.clone());
            for (let i = 0; i < nbrOfPoints - 1; i++) {
                // Increment the point depending to the orientation
                currentPoint.add(segment);
                // Add turbulence to the current point
                linePoints.push(currentPoint.clone().set(
                    currentPoint.x + getRandomFloat(-turbulence.x, turbulence.x),
                    currentPoint.y + getRandomFloat(-turbulence.y, turbulence.y),
                    currentPoint.z + getRandomFloat(-turbulence.z, turbulence.z),
                ));
            }
            linePoints.push(currentPoint.add(segment).clone());
            const curve = new SplineCurve(linePoints);
            linePoints = new Geometry().setFromPoints(curve.getPoints(50));
        } else {
            linePoints = points;
        }



        // * ******************************
        // * Create the MeshLineGeometry
        const line = new MeshLine();
        line.setGeometry(linePoints, transformLineMethod);
        const geometry = line.geometry;

        // * ******************************
        // * Create the Line Material
        // dashArray - the length and space between dashes. (0 - no dash)
        // dashRatio - defines the ratio between that is visible or not (0 - more visible, 1 - more invisible).
        // dashOffset - defines the location where the dash will begin. Ideal to animate the line.
        // DashArray: The length of a dash = dashArray * length.
        // Here 2 mean a cash is 2 time longer that the original length
        const dashArray = 2;
        // Start to 0 and will be decremented to show the dashed line
        const dashOffset = 0;
        // The ratio between that is visible and other
        const dashRatio = 1 - (visibleLength * 0.5); // Have to be between 0.5 and 1.

        const material = new MeshLineMaterial({
            lineWidth: width,
            dashArray,
            dashOffset,
            dashRatio, // The ratio between that is visible or not for each dash
            opacity,
            transparent: true,
            depthWrite: false,
            color,
        });

        // * ******************************
        // * Init
        super(geometry, material);
        this.position.copy(position);

        this.speed = speed;
        this.voidLength = dashArray * dashRatio; // When the visible part is out
        this.dashLength = dashArray - this.voidLength;

        this.dyingAt = 1;
        this.diedAt = this.dyingAt + this.dashLength;

        // Bind
        this.update = this.update.bind(this);
    }


    /**
     * * *******************
     * * UPDATE
     * * *******************
     */
    update() {
        // Increment the dash
        this.material.uniforms.dashOffset.value -= this.speed;

        // TODO make that into a decorator
        // Reduce the opacity then the dash start to desapear
        if (this.isDying()) {
            this.material.uniforms.opacity.value = 0.9 + ((this.material.uniforms.dashOffset.value + 1) / this.dashLength);
        }
    }


    /**
     * * *******************
     * * CONDITIONS
     * * *******************
     */
    isDied() {
        return this.material.uniforms.dashOffset.value < -this.diedAt;
    }

    isDying() {
        return this.material.uniforms.dashOffset.value < -this.dyingAt;
    }
}

export default class LineGenerator extends Object3D {
    constructor({
        frequency = 0.1
    } = {}, lineProps) {
        super();

        this.frequency = frequency;
        this.lineStaticProps = lineProps;

        this.isStarted = false;

        this.i = 0;
        this.lines = [];
        this.nbrOfLines = -1;


        this.update = this.update.bind(this);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }


    /**
     * * *******************
     * * ANIMATION
     * * *******************
     */
    start() {
        this.isStarted = true;
    }

    stop(callback) {
        this.isStarted = false;
        // TODO callback when all lines are hidden
    }

    /**
     * * *******************
     * * LINES
     * * *******************
     */
    addLine(props) {
        const line = new AnimatedMeshLine(Object.assign({}, this.lineStaticProps, props));
        this.lines.push(line);
        this.add(line);
        this.nbrOfLines++;
        return line;
    }

    removeLine(line) {
        this.remove(line);
        this.nbrOfLines--;
    }


    /**
     * * *******************
     * * UPDATE
     * * *******************
     */
    update() {
        // Add lines randomly
        if (this.isStarted && Math.random() < this.frequency) this.addLine();

        // Update current Lines
        for (this.i = this.nbrOfLines; this.i >= 0; this.i--) {
            this.lines[this.i].update();
        }

        // Filter and remove died lines
        const filteredLines = [];
        for (this.i = this.nbrOfLines; this.i >= 0; this.i--) {
            if (this.lines[this.i].isDied()) {
                this.removeLine(this.lines[this.i]);
            } else {
                filteredLines.push(this.lines[this.i]);
            }
        }
        this.lines = filteredLines;
    }
}
