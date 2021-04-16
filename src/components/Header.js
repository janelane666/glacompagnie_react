import React from "react";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: { background: "linear-gradient(135deg, #e66465, #9198e5)", width: "100%" },
    buttonHomePage: { color: "#EDE7E3", fontFamily: "Karla", fontWeight: "bold" },
    leftLink: {
        flexDirection: "row",
        display: "flex",
        justifyContent: "flex-start",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            display: "flex",
            justifyContent: "flex-start"
        }
    },
    button: { color: "#EDE7E3", marginLeft: "10%", fontWeight: "bold", alignSelf: "center" },
    cartContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        color: "#EDE7E3",
        fontWeight: "bold",
        fontFamily: "Karla",
        fontSize: 17,
        [theme.breakpoints.down("sm")]: {
            display: "flex",
            justifyContent: "center",
            marginLeft: 30
        }
    }
}));

const Navigation = () => {
    const styles = useStyles();
    const cart = JSON.parse(localStorage.getItem("cart"));

    return (
        <Navbar collapseOnSelect expand='md' variant='light' className={styles.container}>
            <Navbar.Brand className={styles.buttonHomePage} href='/Home'>
                🐧 Glaçompagnie™ 🧊
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto' style={{ justifyContent: "space-between", width: "100%" }}>
                    <div id='linkList' className={styles.leftLink}>
                        <Nav.Link id='link' className={styles.button} href='/Home'>
                            ACCUEIL
                        </Nav.Link>
                        <Nav.Link id='link' className={styles.button} href='/Products'>
                            PRODUITS
                        </Nav.Link>
                    </div>
                    <div>
                        <Nav.Link href='/Cart' id='link' className={styles.cartContainer}>
                            PANIER
                            {cart && cart.length !== 0 && (
                                <Badge style={{ marginLeft: 5, alignSelf: "center" }} variant='warning'>
                                    {cart.length}
                                </Badge>
                            )}
                        </Nav.Link>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default withRouter(Navigation);
