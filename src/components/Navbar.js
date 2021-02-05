import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
	console.log(props);
	return (
		<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="#home">🐧 Glaçompagnie™ 🧊</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/About">About</Nav.Link>
					<Nav.Link href="/Contact">Contact</Nav.Link>
					<Nav.Link href="/Products">Products</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Navigation);

// // import React from "react";
// // import "./Navbar.css";
// // import { Navbar, Nav, Form, Button } from "react-bootstrap";
// // import { withRouter } from "react-router-dom";

// import React from "react";
// import { Button, AppBar, Toolbar } from "@material-ui/core";

// import { Navbar, Nav } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// const Navigation = (props) => {
// 	const styles = useStyles();

// 	console.log(props);
// 	return (
// 		<AppBar position="static" className={styles.appbar}>
// 			<Toolbar>
// 				{/* <Image /> */}
// 				<Button className={styles.logo} variant="h6" href="/">
// 					🐧 Glaçompagnie™ 🧊
// 				</Button>
// 				<Button className={styles.contact} href="/Product">
// 					CONTACT
// 				</Button>
// 				<Button className={styles.about} href="/About">
// 					ABOUT
// 				</Button>
// 				{/* <Image /> */}
// 			</Toolbar>
// 		</AppBar>
// 	);
// };

// export default withRouter(Navigation);
