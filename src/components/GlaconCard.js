import React from "react";
import { Card, CardContent, Typography, Grid, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";

const useStyles = makeStyles((theme) => ({
    oneCard: {
        backgroundColor: colors.darkBlue,
        margin: "1vw",
        width: 300,
        height: 160
    },
    cardContainer: {
        // padding: "2vh 8vw"
    },
    container: { display: "flex", flexDirection: "row" },

    informationsContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.black,
        marginLeft: 20
    },
    description: {
        fontStyle: "italic",
        color: colors.grey,
        marginLeft: 20
    },
    priceAndQuantity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "0x"
    },
    price: {
        fontWeight: "bold",
        color: colors.black
    },
    quantity: { color: colors.grey }
}));

const GlaconCards = ({ glacons }) => {
    const styles = useStyles();
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    localStorage.setItem("glacons", JSON.stringify(glacons));

    return (
        <Grid container className={styles.cardContainer}>
            {glacons.map(
                (glacon) => (
                    console.log("glacon", glacon),
                    (
                        <Grid item key={glacon.id}>
                            <ButtonBase
                                href={`/Product/${glacon.slug}/${glacon.uuid}`}
                                onClick={() => {
                                    localStorage.setItem("glacon", JSON.stringify(glacon));
                                }}
                            >
                                <Card className={styles.oneCard}>
                                    <div className='card-body'>
                                        <CardContent className={styles.container}>
                                            <img width='50' height='50' src={glacon.header ? `data:image/png;base64,${glacon.header}` : defaultImg} alt='glacon' />
                                            <Grid className={styles.informationsContainer}>
                                                <Typography className={styles.title}>{glacon.name}</Typography>
                                                <Typography className={styles.description}>{glacon.description}</Typography>
                                            </Grid>
                                        </CardContent>

                                        <CardContent className={styles.priceAndQuantity}>
                                            <Typography className={styles.quantity}>Quantité : {glacon.quantity}</Typography>
                                            <Typography className={styles.price}>{glacon.price} €</Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </ButtonBase>
                        </Grid>
                    )
                )
            )}
        </Grid>
    );
};

export default GlaconCards;
