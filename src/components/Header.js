import React from "react";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./Header.css";

const Navigation = (props) => {
	console.log(props);
	return (
		<Navbar className="color-nav">
			<Navbar.Brand className="navLinks" href="#home">🐧 Glaçompagnie™ 🧊</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link className="navLinks" href="">Home</Nav.Link>
					<Nav.Link className="navLinks" href="/About">About</Nav.Link>
					<Nav.Link className="navLinks" href="/Contact">Contact</Nav.Link>
					<Nav.Link className="navLinks" href="/Products">Products</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Navigation);
