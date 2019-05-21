import React from 'react';
import './Nav.css';
import {Link} from 'react-scroll'

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
                <div className="nav-links-wrapper" style={this.state.selectedIndex >= 0 ? {transform: `translateY(${-39*this.state.selectedIndex}px)`} : {}}>
                    {this.props.navItems.map((value,index) => {
                        return <Link 
                            to={ index !== this.state.selectedIndex ? `section${index}` : ''}
                            duration= {500}
                            smooth={true}
                            offset= {-200}
                            key={index}
                            >
                            <div className={"nav-item " + (this.state.selectedIndex === index ? 'selected' : '')} onClick={()=>(this.selectNavItem(index,false))}>
                                <div className="nav-item-text">{value}</div>
                                <div className="nav-item-index">0{index+1}</div>
                            </div>
                        </Link>
                    })}
                </div>
            </nav>
        );
    }

    selectNavItem(index, ignoreSame){
        if(index === this.state.selectedIndex && ignoreSame === true){
            return
        }
        else if(index === this.state.selectedIndex){
            this.setState({selectedIndex: -1})
        }
        else{
            this.setState({selectedIndex: index});
        }
    }
}

export default Nav;
