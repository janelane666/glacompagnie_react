import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
    return (
        <Navbar bg='primary' variant='dark'>
            <Navbar.Brand href='/Home'>🐧 Glaçompagnie™ 🧊</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <Nav.Link href='/About'>About</Nav.Link>
                    <Nav.Link href='/Contact'>Contact</Nav.Link>
                    <Nav.Link href='/Products'>Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
