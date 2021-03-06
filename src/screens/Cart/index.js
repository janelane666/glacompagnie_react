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
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const glacons = JSON.parse(localStorage.getItem("glacons"));
    const cartItemsId = cartItems?.map((item) => item.id);
    const cartItemsQuantity = cartItems?.map((item) => item.quantityCart);

    const cartItemsData = glacons?.filter((item) => {
        if (cartItemsId?.includes(item.id)) {
            return item;
        }
    });

    const [quantityCart, setQuantityCart] = React.useState();

    return (
        <Grid container className={styles.cardContainer}>
            <Typography style={{ alignSelf: "center", paddingBottom: 20 }}>Panier</Typography>
            <Grid className={styles.card}>
                {cartItemsData?.map((item, idx) => {
                    return (
                        <Card className={styles.oneCard} key={item.id}>
                            <Grid className='card-body'>
                                <>
                                    <CardContent>
                                        <Typography className={styles.title}>{item.name}</Typography>
                                    </CardContent>

                                    <CardContent className={styles.priceAndQuantity}>
                                        <Typography className={styles.quantity}>{"Quantity selected: "}</Typography>
                                        <Typography className={styles.price}>{item.price * cartItemsQuantity[idx]}€</Typography>
                                        <CartDropdown glacon={item} fromProductPage={false} quantityCart={cartItemsQuantity[idx]} setQuantityCart={setQuantityCart} />
                                    </CardContent>
                                </>
                            </Grid>
                        </Card>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default Cart;
