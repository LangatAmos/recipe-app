import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "./App.css"


function Navbar() {

    let activeStyle = {
        textDecoration: "underline",
        };
    
        let activeClassName = "underline";


    return (
        <div className="navbar navbar-inverse navbar-fixed-top">
            <h1 className="navbar-title">Recipe Search App</h1>
            <button type="button" className="btn btn-signup">
                    <NavLink to='/recipe-list'
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined }>
                        Home
                    </NavLink></button>
            <div className='navbar-button'>
            {/* <Link to={"/recipe-details"}>Recipe List</Link> */}
                <button type="button" className="btn btn-signup">
                    <NavLink to="/recipedetails"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined }>
                        Recipe Details
                    </NavLink></button>
                <button type="button" className="btn btn-signup">
                    <NavLink to="/signin-form"
                        className={({ isActive }) =>
                        isActive ? activeClassName : undefined}>Log in/Sign Up
                    </NavLink>
                </button>
                {/* <button type="button" className="btn btn-login">
                    <NavLink to="signup"
                        className={({ isActive }) =>
                        isActive ? activeClassName : undefined}>
                    </NavLink>
                </button> */}
            </div>
            
        </div>
    )
}

export default Navbar;