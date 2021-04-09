import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    container: { backgroundColor: "#037bfe" },
    buttonHomePage: { color: "#EDE7E3", fontFamily: "Karla", fontWeight: "bold" },
    button: { color: "#EDE7E3", marginLeft: "10%", fontWeight: "bold", alignSelf: "center" }
}));

const Navigation = () => {
    const styles = useStyles();
    const cart = JSON.parse(localStorage.getItem("cart"));


    return (
        <Navbar variant='primary' className={styles.container}>
            <Navbar.Brand className={styles.buttonHomePage} href='/Home'>
                🐧 Glaçompagnie™ 🧊
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto' style={{ justifyContent: "space-between", width: "100%" }}>
                    <div style={{ flexDirection: "row", display: "flex", justifyContent: "flex-start" }}>
                        <Nav.Link className={styles.button} href='/Home'>
                            ACCUEIL
                        </Nav.Link>
                        <Nav.Link className={styles.button} href='/Products'>
                            PRODUITS
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href='/Cart' id='cart' style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", color: "#EDE7E3", fontWeight: "bold", fontFamily: "Karla" }}>
                            PANIER
                            <Badge variant="danger">{cart.length}</Badge>
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
