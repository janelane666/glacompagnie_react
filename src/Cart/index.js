import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import CartDropdown, {addToCart, removeFromCart} from "../components/CartDropdown.js";

const useStyles = makeStyles((theme) => ({
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
    const styles = useStyles();
    const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")));
    const [quantityCart, setQuantityCart] = React.useState();
    const [totalPrice, setTotalPrice] = React.useState();
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";

    React.useEffect(() => {
        const priceArray = cart ? cart.map((item) => item.price * item.cartQuantity) : [];
        let addedPrice = 0;

        for (const price of priceArray) {
            addedPrice += price;
        }
        setTotalPrice(addedPrice);
        console.log(priceArray);
    }, [quantityCart, cart]);

    const removeProduct = (item) => {
        removeFromCart(item.id); 
        setCart((oldCart) => oldCart.filter((product)=>product.id !== item.id)); 
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
                                    <Typography className={styles.title}>{item.name}</Typography>
                                    <Grid style={{ display: "flex", flexDirection: "row" }}>
                                        <Typography className={styles.title}>Prix unitaire : {Number(item.price).toFixed(2)}€</Typography>
                                        <Button type='submit' onClick={() => removeProduct(item)}>Supprimer</Button>
                                    </Grid>
                                </Grid>
                                <Grid flexDirection='column' style={{ marginLeft: 20, marginRight: 20 }}>
                                    <Typography className={styles.cartQuantity}>{"Quantity selected: "}</Typography>
                                    <CartDropdown glacon={item} fromProductPage={false} quantityCart={item.cartQuantity} setQuantityCart={setQuantityCart} />
                                </Grid>

                                <Typography className={styles.price}>Prix total :{Number(item.price * item.cartQuantity).toFixed(2)}€</Typography>
                            </>
                        </Grid>
                    );
                })}
                <Typography style={{ display: "flex", justifyContent: "flex-end" }}>Prix du panier: {Number(totalPrice).toFixed(2)}€</Typography>
            </Grid>
        </Grid>
    );
};

export default Cart;
