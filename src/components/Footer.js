import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 50,
        paddingLeft: 100,
        paddingBottom: 50
    },
    title: {
        fontFamily: "Viga",
        fontWeight: "bold",
        [theme.breakpoints.down("sm")]: {
            paddingTop: 20
        }
    },
    text: { fontFamily: "Karla", fontWeight: "medium", color: "black" },
    italic: { fontFamily: "Karla", fontWeight: "medium", color: "grey" },
    oneColumnContainer: { display: "flex", flexDirection: "column" }
}));

const Footer = () => {
    const styles = useStyles();
    return (
        <Grid container className={styles.container}>
            <Grid item xs={12} sm={6} md={3} className={styles.oneColumnContainer}>
                <p className={styles.italic}>All rights reserved</p>
                <p className={styles.italic}>© Glacompagnie 2021</p>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={styles.oneColumnContainer}>
                <p className={styles.title}>RGPD</p>
                <Link href='' className={styles.text}>
                    Vie privée
                </Link>
                <Link href='' className={styles.text}>
                    Cookie
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={styles.oneColumnContainer}>
                <p className={styles.title}>CONTACT</p>
                <Link href='' className={styles.text}>
                    FAQ
                </Link>
                <Link href='' className={styles.text}>
                    Réclamations
                </Link>
                <Link href='' className={styles.text}>
                    Presse
                </Link>
                <Link href='' className={styles.text}>
                    Autre
                </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={styles.oneColumnContainer}>
                <p className={styles.title}>A PROPOS</p>
                <p className={styles.text}>Nos valeurs</p>
                <Link href='' className={styles.text} style={{ marginTop: -15 }}>
                    Nous trouvez
                </Link>
                <Link href='' className={styles.text}>
                    Notre équipe
                </Link>
            </Grid>
        </Grid>
    );
};

export default Footer;
