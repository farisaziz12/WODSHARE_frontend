import React, { Component } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



class Navbar extends Component {
    render() {
        return (
            <>
             <header id="nav-wrapper">
                <nav id="nav">
                <NavLink to='/'>   
                    <div className="nav left">
                        <span className="gradient skew">
                            <h1 className="logo un-skew">WODSHARE</h1>
                        </span>
                    </div>
                </NavLink>
                <div className="nav right">
                    <NavLink className="nav-link " exact to="/"><span className="nav-link-span"><span className="u-nav">Home</span></span></NavLink>
                    <NavLink className="nav-link" exact to='/movements'><span className="nav-link-span"><span className="u-nav">Movement Bank</span></span></NavLink>
                    <a href="#profile" className="nav-link"><span className="nav-link-span"><span className="u-nav">Profile</span></span></a>
                    { this.props.user? 
                        <a onClick={this.props.logout} className="nav-link"><span className="nav-link-span"><span className="u-nav">Logout</span></span></a>
                        :
                        <NavLink className="nav-link " exact to="/login"><span className="nav-link-span"><span className="u-nav">Login/Sign Up</span></span></NavLink>
                    }
                </div>
                </nav>
            </header>
            </>
        );
    }
}

export default Navbar;