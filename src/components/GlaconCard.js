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
    name: { fontFamily: "Viga", marginTop: 10 },
    text: { fontFamily: "Karla" },
    quantity: { color: colors.grey },
    button: { width: "100%", fontFamily: "Karla" }
}));

const GlaconCards = ({ glacons }) => {
    const styles = useStyles();

    return (
        <div container className={styles.cardContainer}>
            {glacons.map((glacon) => {
                return (
                    glacon.quantity > 0 && (
                        <Card key={glacon.id} style={{ width: "18rem", margin: 20 }}>
                            <ButtonBase href={`/Product/${glacon.slug}/${glacon.uuid}`}>
                                <Card.Body>
                                    <Card.Img src={glacon.header ? `data:image/png;base64,${glacon.header}` : fullGlacons} alt='glacon' />
                                    <Card.Title className={styles.name}>{glacon.name.length > 19 ? glacon.name.slice(0, 19) + "..." : glacon.name}</Card.Title>
                                    <Card.Text className={styles.text}>{glacon.description.length > 19 ? glacon.description.slice(0, 25) + "..." : glacon.description}</Card.Text>
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
