import React from "react";
import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import fullGlacons from "../image/fullGlacons.jpeg";
import { ButtonBase } from "@material-ui/core";
import AddToCartButton from "../components/AddToCartButton";

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
    },
    card: {
        width: "18rem",
        margin: 20
    },
    name: { fontFamily: "Viga", marginTop: 10, paddingLeft: 40 },
    text: { fontFamily: "Karla", paddingLeft: 40 },
    quantity: { color: colors.grey },
    button: { width: "100%", fontFamily: "Karla" },
    cardImg: {
        width: 320,
        height: 125
    }
}));

const GlaconCards = ({ glacons }) => {
    let img = fullGlacons;

    const styles = useStyles();

    return (
        <div container className={styles.cardContainer}>
            {glacons.map((glacon) => {
                if (glacon.thumbnail && glacon.thumbnail.includes("://")) {
                    img = glacon.thumbnail;
                } else {
                    img = glacon.thumbnail ? `data:image/png;base64,${glacon.thumbnail}` : fullGlacons;
                }

                glacon.description = glacon.description.length > 19 ? glacon.description.slice(0, 25) + "..." : glacon.description;
                glacon.description = glacon.description[0].toUpperCase() + glacon.description.substr(1).toLowerCase();

                return (
                    glacon.quantity > 0 && (
                        <Card key={glacon.id} className={styles.card}>
                            <ButtonBase href={`/Product/${glacon.slug}/${glacon.uuid}`}>
                                <Card.Body>
                                    <Card.Img className={styles.cardImg} style={{ "object-fit": "contain" }} src={img} alt='glacon' />
                                    <Card.Title className={styles.name}>{glacon.name.length > 19 ? glacon.name.slice(0, 19) + "..." : glacon.name}</Card.Title>
                                    <Card.Text className={styles.text}>{glacon.description}</Card.Text>
                                    <Card.Text className={styles.text}>Quantité : {glacon.quantity}</Card.Text>
                                    <Card.Text className={styles.text}>{glacon.price} €</Card.Text>
                                </Card.Body>
                            </ButtonBase>
                            <AddToCartButton glacon={glacon} quantityCart={1} />
                        </Card>
                    )
                );
            })}
        </div>
    );
};

export default GlaconCards;
