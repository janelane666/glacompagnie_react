import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Header.css";

const Navigation = (props) => {
    return (
        <Navbar className='color-nav'>
            <Navbar.Brand className='navLinks' href='/Home'>
                🐧 Glaçompagnie™ 🧊
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto' style={{justifyContent: "space-between", width: "100%"}}>
					<div style={{flexDirection: "row", display: "flex"}}>
						<Nav.Link className='navLinks' href='/Home'>
							Home
						</Nav.Link>
						<Nav.Link className='navLinks' href='/About'>
							About
						</Nav.Link>
						<Nav.Link className='navLinks' href='/Contact'>
							Contact
						</Nav.Link>
						<Nav.Link className='navLinks' href='/Products'>
							Products
						</Nav.Link>
					</div>
					<div>
						<Nav.Link href='/Cart' id='cart'>
							Cart
						</Nav.Link>
					</div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
