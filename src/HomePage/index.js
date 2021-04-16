import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mountain from "../image/mountain.png";
import { Button } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    align: { display: "flex", justifyContent: "center", marginTop: "5%" },
    name: {
        fontFamily: "Viga",
        display: "flex",
        justifyContent: "center",
        width: "50%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        [theme.breakpoints.down("sm")]: {
            width: "80%"
        }
    },
    text: {
        fontFamily: "Karla",
        display: "flex",
        width: "50%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        [theme.breakpoints.down("sm")]: {
            width: "70%"
        }
    },
    smallText: {
        fontFamily: "Karla",
        display: "flex",
        fontSize: 8,
        width: "50%",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 30,
        [theme.breakpoints.down("sm")]: {
            width: "80%"
        }
    },
    button: {
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center",
        width: "10%",
        fontFamily: "Karla",
        [theme.breakpoints.only("sm")]: {
            width: "22%",
            paddingLeft: 15
        },
        [theme.breakpoints.only("xs")]: {
            width: "45%",
            paddingLeft: 15
        }
    },
    image: {
        display: "flex",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 30,
        height: 400,
        [theme.breakpoints.down("sm")]: {
            height: 200
        }
    }
}));

const Home = () => {
    const styles = useStyles();

    return (
        <div className={styles.align}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <h1 className={styles.name}>Restez au frais avec nous.</h1>
                    <p className={styles.text}>
                        Glaçompagnie vous propose une expérience premium d’achat de glaçons collector, en provenance de la banquise du Pôle Nord. Les produits sont sourcés localement, bio, sans
                        pesticide et issus du commerce équitable, dans le respect des travailleurs inuits. Ils sont proposés en édition limitée dans le temps (tout le stock sera fondu d’ici 2050).
                    </p>
                    <p className={styles.smallText}>
                        L’intégralité de 1% des bénéfices sera reversé à des associations de défense de la banquise. Le reste sera versé en intégralité à nos actionnaires et pas réinvesti ou distribué
                        aux travailleurs de toute façon on a que des stagiaires.
                    </p>
                    <Button className={styles.button} href='/Products'>
                        Achetez un Glaçon
                    </Button>
                </div>
                <div>
                    <img className={styles.image} src={mountain} alt='Montagne de neige qui ressemble à un requin.' />
                </div>
            </div>
        </div>
    );
};

export default Home;
