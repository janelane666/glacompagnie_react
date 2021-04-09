import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    container: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-around", marginTop: 100 },
    title: { fontFamily: "Viga", fontWeight: "bold" },
    text: { fontFamily: "Karla", fontWeight: "medium", color: "grey" },
    italic: { fontFamily: "Karla", fontWeight: "medium", color: "grey" },
    oneColumnContainer: { display: "flex", flexDirection: "column" }
}));

const Footer = () => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            <div className={styles.oneColumnContainer}>
                <p className={styles.italic}>All rights reserved</p>
                <p className={styles.italic}>© Glacompagnie 2021</p>
            </div>
            <div className={styles.oneColumnContainer}>
                <p className={styles.title}>RGPD</p>
                <p className={styles.text}>Vie privée</p>
                <p className={styles.text}>Cookie</p>
            </div>
            <div className={styles.oneColumnContainer}>
                <p className={styles.title}>CONTACT</p>
                <p className={styles.text}>FAQ</p>
                <p className={styles.text}>Réclamations</p>
                <p className={styles.text}>Presse</p>
                <p className={styles.text}>Autre</p>
            </div>
            <div className={styles.oneColumnContainer}>
                <p className={styles.title}>A PROPOS</p>
                <p className={styles.text}>Nos valeurs</p>
                <p className={styles.text}>Nous trouvez</p>
                <p className={styles.text}>Notre équipe</p>
            </div>
        </div>
    );
};

export default Footer;
