import {
    Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from "react";

function NavigationBar (props) {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hello!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <br />
            <Nav.Link>
                {
                    props.username === '' ?
                    <Link to='/login'>Login</Link>
                    :
                    <Link to='/logout'>{props.username}, Logout</Link>
                }
                    
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
            
        
    );
}

export default NavigationBar;