import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Cart from "../image/shopping-cart.png";

const useStyles = makeStyles(() => ({
    container: { backgroundColor: "#00A1E4" },
    buttonHomePage: { color: "#EDE7E3" },
    button: { color: "#EDE7E3", marginLeft: "10%", fontWeight: "bold", alignSelf: "center" }
}));

const Navigation = () => {
    const styles = useStyles();

    return (
        <Navbar className={styles.container}>
            <Navbar.Brand className={styles.buttonHomePage} href='/Home'>
                🐧 Glaçompagnie™ 🧊
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto' style={{ justifyContent: "space-between", width: "100%" }}>
                    <div style={{ flexDirection: "row", display: "flex", marginLeft: "40%" }}>
                        <Nav.Link className={styles.button} href='/Home'>
                            HOME
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/About'>
                            ABOUT
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Contact'>
                            CONTACT
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Products'>
                            PRODUCTS
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href='/Cart' id='cart'>
                            <img src={Cart} style={{ height: 30, width: 30 }} />
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
