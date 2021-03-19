import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";
import CartDropdown from "../../components/CartDropdown.js";

const useStyles = makeStyles((theme) => ({
    oneCard: {
        backgroundColor: "#ECE9E9",
        margin: "1vw",
        width: 300,
        height: 160
    },
    cardContainer: {
        padding: "2vh 8vw",
        flexDirection: "column"
    },
    card: { flexDirection: "row" },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.black
    },
    description: {
        fontStyle: "italic",
        color: colors.grey
    },
    priceAndQuantity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "0px"
    },
    price: {
        fontWeight: "bold",
        color: colors.black
    },
    quantity: { color: colors.grey }
}));

const Cart = () => {
    const styles = useStyles();
    const cart = JSON.parse(localStorage.getItem("cart"));
    const [quantityCart, setQuantityCart] = React.useState();
    const [totalPrice, setTotalPrice] = React.useState();

    React.useEffect(() => {
        const priceArray = cart.map((item) => item.price * item.cartQuantity);
        let addedPrice = 0;

        for (const price of priceArray){
            addedPrice += price;
        }
        setTotalPrice(addedPrice);
        console.log(priceArray);

    }, [quantityCart]);

    return (
        <Grid container className={styles.cardContainer}>
            <Typography style={{ alignSelf: "center", paddingBottom: 20 }}>Panier</Typography>
            <Grid className={styles.card}>
                {cart?.map((item, i) => {
                    return (
                        <Card className={styles.oneCard} key={item.id}>
                            <Grid className='card-body'>
                                <>
                                    <CardContent>
                                        <Typography className={styles.title}>{item.name}</Typography>
                                    </CardContent>

                                    <CardContent className={styles.priceAndQuantity}>
                                        <Typography className={styles.cartQuantity}>{"Quantity selected: "}</Typography>
                                        <Typography className={styles.price}>{item.price * item.cartQuantity}€</Typography>
                                        <CartDropdown glacon={item} fromProductPage={false} quantityCart={item.cartQuantity} setQuantityCart={setQuantityCart} />
                                    </CardContent>
                                </>
                            </Grid>
                        </Card>
                    );
                })}
                <Typography>
                    {totalPrice}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Cart;
