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
                            ACCUEIL
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/About' style={{whiteSpace: "nowrap"}}>
                            A PROPOS
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Contact'>
                            CONTACT
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Products'>
                            PRODUITS
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href='/Cart' id='cart' style={{display: "flex", flexDirection: "column"}}>
                            <img src={Cart} alt={"Cart"} style={{ height: 30, width: 30 }} />
                            Panier
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
