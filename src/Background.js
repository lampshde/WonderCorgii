import React from 'react';
import './Background.css';
import * as THREE from 'three';
import Stars from './objects/stars';
import LineGenerator from './objects/LineGenerator';

const getRandomFloat = (min, max) => (Math.random() * (max - min)) + min;
const getRandomItem = arr => arr[getRandomInt(0, arr.length - 1)];
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

class Background extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 800,
            height: 400
        }

    }
    updateSize = () => {
        this.setState({width: this.mount.clientWidth, height: this.mount.clientHeight})
        this.camera.aspect = this.mount.clientWidth / this.mount.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( this.mount.clientWidth, this.mount.clientHeight );
    }
    componentDidMount() {
        
        window.addEventListener("resize", this.updateSize.bind(this));
        this.scene = new THREE.Scene()

        this.camera = new THREE.PerspectiveCamera(
            50,
            this.state.width / this.state.height,
            0.1,
            1000
        )

        this.camera.position.z = 2
        //ADD RENDERER
        this.devicePixelRatio = window.devicePixelRatio ? Math.min(1.6, window.devicePixelRatio) : 1;
        console.log(this.devicePixelRatio)
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        this.renderer.setPixelRatio(this.devicePixelRatio);
        this.renderer.setSize(this.state.width, this.state.height)
        this.updateSize()
        this.mount.appendChild(this.renderer.domElement)

        //stars
        this.stars = new Stars();
        this.scene.add(this.stars)
        this.start()

        //lines

        const radius = 4;
        const origin = new THREE.Vector3();
        const direction = new THREE.Vector3();
        const raycaster = new THREE.Raycaster();
        const geometry = new THREE.SphereBufferGeometry(radius, 32, 32, 0, 3.2, 4, 2.1);
        const material = new THREE.MeshBasicMaterial({
            wireframe: true,
            visible: false
        });
        const sphere = new THREE.Mesh(geometry, material);
        this.scene.add(sphere);
        sphere.position.z = 2;

        const COLORS = ['#FFFAFF', '#0A2463', '#3E92CC', '#723bb7', '#efd28e', '#3f9d8c'].map((col) => new THREE.Color(col));
        const STATIC_PROPS = {
            transformLineMethod: p => p,
        };

        class CustomLineGenerator extends LineGenerator {
            addLine() {
                let incrementation = 0.1;
                let y = getRandomFloat(-radius * 0.6, radius * 1.8);
                let a = Math.PI * (-25) / 180;
                let aMax = Math.PI * (200) / 180;

                const points = [];
                while (a < aMax) {
                    a += 0.2;
                    y -= incrementation;
                    origin.set(radius * Math.cos(a), y, radius * Math.sin(a));
                    direction.set(-origin.x, 0, -origin.z);
                    direction.normalize();
                    raycaster.set(origin, direction);

                    // save the points
                    const intersect = raycaster.intersectObject(sphere, true);
                    if (intersect.length) {
                        points.push(intersect[0].point.x, intersect[0].point.y, intersect[0].point.z);
                    }
                }

                if (points.length === 0) return;

                if (Math.random() > 0.5) {
                    // Low lines
                    super.addLine({
                        visibleLength: getRandomFloat(0.01, 0.2),
                        points,
                        speed: getRandomFloat(0.003, 0.008),
                        color: getRandomItem(COLORS),
                        width: getRandomFloat(0.01, 0.1),
                    });
                } else {
                    // Fast lines
                    super.addLine({
                        visibleLength: getRandomFloat(0.05, 0.2),
                        points,
                        speed: getRandomFloat(0.010, 0.020),
                        color: COLORS[0],
                        width: getRandomFloat(0.01, 0.01),
                    });
                }
            }
        }
        this.lineGenerator = new CustomLineGenerator({
            frequency: 0.2,
        }, STATIC_PROPS);

        this.scene.add(this.lineGenerator)

        this.lineGenerator.start()
        console.log(this.lineGenerator)
    }

    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }
    stop = () => {
        cancelAnimationFrame(this.frameId)
    }
    animate = () => {
        this.stars.rotation.y -= 0.0004;
        this.stars.rotation.x -= 0.0002;
        for(let i = 0; i < this.stars.children.length; i++){
            this.stars.children[i].update();
        }
        this.lineGenerator.update()
        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return ( <
            div className ="Background" style = {
                {
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100vh',
                    zIndex: '-1'
                }
            }
            ref = {
                (mount) => {
                    this.mount = mount
                }
            }
            />
        )
    }
}

export default Background;