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
                    <div class="nav left">
                        <span class="gradient skew">
                            <h1 class="logo un-skew">WODSHARE</h1>
                        </span>
                    </div>
                </NavLink>
                <div class="nav right">
                    <NavLink className="nav-link " exact to="/"><span class="nav-link-span"><span class="u-nav">Home</span></span></NavLink>
                    { this.props.user? 
                        <a onClick={this.props.logout} class="nav-link"><span class="nav-link-span"><span class="u-nav">Logout</span></span></a>
                        :
                        <NavLink className="nav-link " exact to="/login"><span class="nav-link-span"><span class="u-nav">Login/Sign Up</span></span></NavLink>
                    }
                    <a href="#work" class="nav-link"><span class="nav-link-span"><span class="u-nav">Work</span></span></a>
                    <a href="#contact" class="nav-link"><span class="nav-link-span"><span class="u-nav">Contact</span></span></a>
                </div>
                </nav>
            </header>
            </>
        );
    }
}

export default Navbar;