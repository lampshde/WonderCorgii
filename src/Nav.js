import React from 'react';
import './Nav.css';

class Nav extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            selectedIndex: -1
        }

        this.selectNavItem = this.selectNavItem.bind(this);
    }
    render(){
        return (
            <nav className={"animated fadeInRight " + (this.state.selectedIndex >= 0 ? 'minimized' : '')}>
                <div className="nav-links-wrapper" style={this.state.selectedIndex >= 0 ? {transform: `translateY(${-40*this.state.selectedIndex}px)`} : {}}>
                    {this.props.navItems.map((value,index) => {
                        return <div className={"nav-item " + (this.state.selectedIndex === index ? 'selected' : '')} onClick={()=>(this.selectNavItem(index))}>
                            <div className="nav-item-text">{value}</div>
                            <div className="nav-item-index">0{index}</div>
                        </div>
                    })}
                </div>
            </nav>
        );
    }

    selectNavItem(index){
        if(index === this.state.selectedIndex){
            this.setState({selectedIndex: -1})
        }
        else{
            this.setState({selectedIndex: index});
        }
    }
}

export default Nav;
