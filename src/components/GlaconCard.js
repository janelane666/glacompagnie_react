import React from "react";
import { Card, Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import fullGlacons from "../image/fullGlacons.jpeg";
import { ButtonBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    name: { fontFamily: "Viga" },
    text: { fontFamily: "Karla" },
    quantity: { color: colors.grey },
    button: { width: "100%", fontFamily: "Karla" }
}));

const GlaconCards = ({ glacons }) => {
    const styles = useStyles();

    return (
        <div container className={styles.cardContainer}>
            {glacons.map((glacon) => (
                <ButtonBase href={`/Product/${glacon.slug}/${glacon.uuid}`}>
                    <Card key={glacon.id} style={{ width: "18rem", margin: 20 }}>
                        <Card.Img src={glacon.header ? `data:image/png;base64,${glacon.header}` : fullGlacons} alt='glacon' />
                        <Card.Body>
                            <Card.Title className={styles.name}>{glacon.name}</Card.Title>
                            <Card.Text className={styles.text}>{glacon.description}</Card.Text>
                            <Card.Text className={styles.text}>Quantité : {glacon.quantity}</Card.Text>
                            <Card.Text className={styles.text}>{glacon.price} €</Card.Text>
                            <Button className={styles.button} variant='primary'>
                                Ajouter au panier
                            </Button>
                        </Card.Body>
                    </Card>
                </ButtonBase>
            ))}
        </div>
    );
};

export default GlaconCards;
