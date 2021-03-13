import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: { backgroundColor: "#00A1E4" },
    button: { color: "#EDE7E3" }
}));

const Navigation = () => {
    const styles = useStyles();

    return (
        <Navbar className={styles.container}>
            <Navbar.Brand className={styles.button} href='/Home'>
                🐧 Glaçompagnie™ 🧊
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto' style={{ justifyContent: "space-between", width: "100%" }}>
                    <div style={{ flexDirection: "row", display: "flex" }}>
                        <Nav.Link className={styles.button} href='/Home'>
                            Home
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/About'>
                            About
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Contact'>
                            Contact
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Products'>
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
