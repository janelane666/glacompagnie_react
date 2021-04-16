import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mountain from "../image/mountain.png";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    align: { display: "flex", justifyContent: "center", marginTop: "10%" },
    name: { fontFamily: "Viga", display: "flex", justifyContent: "center" },
    text: { fontFamily: "Karla", display: "flex", justifyContent: "center" },
    button: { display: "flex", marginRight: "auto", marginLeft: "auto", textAlign: "center", width: "16%", fontFamily: "Karla" }
}));

const Home = () => {
    const styles = useStyles();

    return (
        <div className={styles.align}>
            <div>
                <div>
                    <h1 className={styles.name}>Restez au frais avec nous.</h1>
                    <p className={styles.text}>Chez Glacompagnie nous valorisons les glaçons du monde entier. Connectons-nous.</p>
                    <Button className={styles.button} href='/Products'>
                        Achetez un Glaçon
                    </Button>
                </div>
                <img className={styles.image} src={mountain} alt='Montagne de neige qui ressemble à un requin.'></img>
            </div>
        </div>
    );
};

export default Home;
