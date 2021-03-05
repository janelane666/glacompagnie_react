import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import CartDropdown from "./CartDropdown.js";

const useStyles = makeStyles((theme) => ({
    oneCard: {
        backgroundColor: "#ECE9E9",
        margin: "1vw",
        width: 300,
        height: 160
    },
    cardContainer: {
        padding: "2vh 8vw"
    },
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

export const addToCart = (id, quantity) => {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const cart = JSON.parse(localStorage.getItem("cart"));

    let newCart = cart;
    let overWrite = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            overWrite = true;
            newCart[i] = { id: id, quantity: quantity };
        }
    }

    if (!overWrite) {
        newCart.push({ id: id, quantity: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
    // console.log(JSON.parse(localStorage.getItem("cart")));
};

const Cart = () => {
    const styles = useStyles();
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    const glacons = JSON.parse(localStorage.getItem("glacons"));
    const cartItemsId = cartItems?.map((item) => item.id);

    const cartItemsData = glacons?.filter((item) => {
        if (cartItemsId?.includes(item.id)) {
            console.log("true");
            return item;
        }
    });

    console.log("data", cartItems);

    return (
        <Grid container className={styles.cardContainer}>
            {/* <ButtonBase
                href={`/Product/${glacon.slug}/${glacon.uuid}`}
                onClick={() => {
                    localStorage.setItem("glacon", JSON.stringify(glacon));
                }}
            > */}
            {cartItemsData?.map((item) => (
                <Card className={styles.oneCard} key={item.id}>
                    <div className='card-body'>
                        <>
                            <CardContent>
                                <Typography className={styles.title}>{item.name}</Typography>
                                <Typography className={styles.description}>{item.description}</Typography>
                            </CardContent>

                            <CardContent className={styles.priceAndQuantity}>
                                <Typography className={styles.quantity}>
                                    {"Quantity selected: "}
                                    {
                                        cartItems.filter((cartItem) => {
                                            if (cartItem.id === item.id) {
                                                return cartItem;
                                            }
                                        })[0].quantity
                                    }
                                </Typography>
                                {/* <Typography className={styles.price}>{item.price} €</Typography> */}
                                <CartDropdown item={item} />
                            </CardContent>
                        </>
                    </div>
                </Card>
            ))}
        </Grid>
    );
};

export default Cart;
