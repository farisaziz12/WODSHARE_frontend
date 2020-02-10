import React, { Component } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'



class Navbar extends Component {
    render() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const formatedDate = date.split("-")
        const reformatedDate = formatedDate[0].split("") 
        const cfFormatDate = reformatedDate[2] + reformatedDate[3] + 0 + formatedDate[1] + formatedDate[2]

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
                    <h1 className="nav-bar-date">{cfFormatDate}</h1>
                    <NavLink className="nav-link " exact to="/"><span className="nav-link-span"><span className="u-nav">Home</span></span></NavLink>
                    {/* {this.props.user&& this.props.user.account_type === "athlete"&& <NavLink className="nav-link" exact to='/wod/generator'><span className="nav-link-span"><span className="u-nav">WOD Generator</span></span></NavLink>} */}
                    <NavLink className="nav-link" exact to='/movements'><span className="nav-link-span"><span className="u-nav">Movement Bank</span></span></NavLink>
                    <NavLink exact to="/profile" className="nav-link"><span className="nav-link-span"><span className="u-nav">Profile</span></span></NavLink>
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