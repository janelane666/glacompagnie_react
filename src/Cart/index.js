import React from "react";
import { Typography, Grid, Button, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import CartDropdown, { addToCart, removeFromCart } from "../components/CartDropdown.js";
// import history from "../history";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    oneCard: {
        display: "flex",
        flexDirection: "row",
        // backgroundColor: "#ECE9E9",
        margin: "1vw"
        // width: 300,
        // height: 160
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
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const styles = useStyles();
    const [cartDelete, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")));
    const cart = JSON.parse(localStorage.getItem("cart"));
    const [quantityCart, setQuantityCart] = React.useState();
    const [totalPrice, setTotalPrice] = React.useState();
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    const history = useHistory();

    React.useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart"));
        const priceArray = cart ? cart.map((item) => item.price * item.quantityCart) : [];
        let addedPrice = 0;

        for (const price of priceArray) {
            addedPrice += price;
        }
        setTotalPrice(addedPrice);
    }, [quantityCart, cartDelete]);

    const removeProduct = (item, all = false) => {
        removeFromCart(item, all);
        setCart(JSON.parse(localStorage.getItem("cart")));
    };

    return (
        <Grid container className={styles.cardContainer}>
            <Typography style={{ paddingBottom: 20, fontWeight: "bold", fontSize: 40 }}>Panier</Typography>
            <Grid className={styles.card}>
                {cart?.map((item, i) => {
                    return (
                        <Grid className={styles.oneCard} key={item.id}>
                            <>
                                <img width='50' height='50' src={item.header ? `data:image/png;base64,${item.header}` : defaultImg} alt='glacon' />
                                <Grid flexDirection='column' style={{ marginLeft: 20, marginRight: 20, width: 400 }}>
                                    <ButtonBase href={`/Product/${item.slug}/${item.uuid}`}>
                                        <Typography className={styles.title}>{item.name}</Typography>
                                    </ButtonBase>
                                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography className={styles.title}>Prix unitaire : {Number(item.price).toFixed(2)}€</Typography>
                                        <Button type='submit' onClick={() => removeProduct(item.id)}>
                                            Supprimer
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid flexDirection='column' style={{ marginLeft: 20, marginRight: 20 }}>
                                    <Typography className={styles.quantityCart}>{"Quantity selected: "}</Typography>
                                    <CartDropdown glacon={item} fromProductPage={false} quantityCart={item.quantityCart} setQuantityCart={setQuantityCart} />
                                </Grid>
                                <Typography className={styles.price}>Prix total : {Number(item.price * item.quantityCart).toFixed(2)}€</Typography>
                            </>
                        </Grid>
                    );
                })}
                <Typography style={{ display: "flex", justifyContent: "flex-end" }}>Prix du panier: {Number(totalPrice).toFixed(2)}€</Typography>
            </Grid>
            {cartDelete.length ? (
                <Button type='submit' onClick={() => removeProduct(null, true)}>
                    Tout Supprimer
                </Button>
            ) : (
                "c'est vide :c"
            )}
            <Button type='submit' href='/Products'>
                Continuer mes achats
            </Button>
        </Grid>
    );
};

export default Cart;
