import React from "react";
import { ButtonBase, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import CartDropdown, { removeFromCart } from "../components/CartDropdown.js";
import { Button, Modal } from "react-bootstrap";
import theme from "../theme";

const useStyles = makeStyles(() => ({
    oneCard: {
        display: "flex",
        flexDirection: "row",
        margin: "1vw",
        marginBottom: 40,
        paddingBottom: 20,
        borderBottom: "1px solid lightgrey",
        [theme.breakpoints.only("xs")]: {
            height: 370,
            marginBottom: 50,
            paddingBottom: 40
        }
    },
    cardContainer: {
        padding: "2vh 8vw",
        flexDirection: "column",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 10
        }
    },
    card: { flexDirection: "row" },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        color: colors.black,
        fontFamily: "Karla"
    },
    description: {
        fontStyle: "italic",
        color: colors.grey,
        fontFamily: "Karla"
    },
    priceAndQuantity: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "0px"
    },
    price: {
        color: colors.black,
        fontFamily: "Karla",
        paddingTop: 7,
        marginRight: 30
    },
    quantityCart: { fontFamily: "Karla", marginRight: 30, paddingTop: 7 },
    quantity: { color: colors.grey, fontFamily: "Karla" },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    button: { margin: 20, fontFamily: "Karla" },
    modal: {
        paddingTop: "100px",
        marginTop: "100px"
    },
    productSummary: { marginLeft: 20, marginRight: 20, width: 400 },
    shippingCost: { display: "flex", justifyContent: "flex-end", marginBottom: 15, fontFamily: "Karla" },
    text: { fontFamily: "Karla" },
    totalPriceContainer: { display: "flex", flexDirection: "row", justifyContent: "flex-end" },
    quantityContainer: {
        marginRight: 20,
        display: "flex",
        flexDirection: "row",
        height: 40,
        [theme.breakpoints.only("xs")]: {
            marginLeft: 25
        }
    },
    deleteButton: { height: "40px", width: "100px", fontFamily: "Karla", fontSize: 15, display: "flex", justifyContent: "center", alignItems: "center" },
    summaryCartContainer: {
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
            display: "flex",
            flexDirection: "column"
        }
    },
    priceAndSuppr: {
        display: "flex",
        flexDirection: "row",
        height: 40,
        [theme.breakpoints.only("xs")]: {
            marginTop: 20,
            marginLeft: 25,
            flexDirection: "column"
        }
    }
}));

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const Cart = () => {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const styles = useStyles();
    const [cartDelete, setCart] = React.useState(JSON.parse(localStorage.getItem("cart")));
    const cart = JSON.parse(localStorage.getItem("cart"));
    const [quantityCart, setQuantityCart] = React.useState();
    const [totalPrice, setTotalPrice] = React.useState();
    const defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    const [openPopUp, setOpenPopUp] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);
    let img = defaultImg;

    const handleClose = () => {
        setOpenPopUp(false);
    };

    React.useEffect(() => {
        const priceArray = cart ? cart.map((item) => item.price * item.quantityCart) : [];
        let addedPrice = 0;

        for (const price of priceArray) {
            addedPrice += price;
        }
        setTotalPrice(addedPrice);
    }, [quantityCart, cartDelete, cart]);

    const removeProduct = (item, all = false) => {
        removeFromCart(item, all);
        setCart(JSON.parse(localStorage.getItem("cart")));
    };

    const modalBody = (
        <div style={modalStyle} className={styles.paper}>
            <p style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>Votre panier a bien été validé</p>
        </div>
    );

    return (
        <div container className={styles.cardContainer}>
            <p style={{ paddingBottom: 20, fontWeight: "bold", fontSize: 40 }}>Panier</p>
            <div className={styles.card}>
                {cartDelete.length === 0 && <p>Votre panier est vide</p>}
                {cart?.map((item, i) => {
                    if (item.thumbnail && item.thumbnail.includes("://")) {
                        img = item.thumbnail;
                    } else {
                        img = item.thumbnail ? `data:image/png;base64,${item.thumbnail}` : defaultImg;
                    }

                    return (
                        <Grid container className={styles.oneCard} key={item.id}>
                            <>
                                <img
                                    width='50'
                                    height='50'
                                    style={{
                                        "object-fit": "contain"
                                    }}
                                    src={img}
                                    alt='glacon'
                                />
                                <Grid item xs={12} md={4} flexDirection='column' className={styles.productSummary}>
                                    <ButtonBase href={`/Product/${item.slug}/${item.uuid}`}>
                                        <p className={styles.title}>{item.name}</p>
                                    </ButtonBase>
                                    <p className={styles.title}>Prix unitaire : {Number(item.price).toFixed(2)}€</p>
                                </Grid>
                                <Grid item xs={12} md={4} className={styles.quantityContainer}>
                                    <p className={styles.quantityCart}>Quantité sélectionnée:</p>
                                    <CartDropdown glacon={item} fromProductPage={false} quantityCart={item.quantityCart} setQuantityCart={setQuantityCart} />
                                </Grid>
                                <Grid item xs={12} md={3} className={styles.priceAndSuppr}>
                                    <p className={styles.price}>Prix total : {Number(item.price * item.quantityCart).toFixed(2)}€</p>
                                    <Button className={styles.deleteButton} type='submit' onClick={() => removeProduct(item.id)}>
                                        Supprimer
                                    </Button>
                                </Grid>
                            </>
                        </Grid>
                    );
                })}
                <p className={styles.shippingCost}>Frais de livraison: 35 €</p>
                <div className={styles.totalPriceContainer}>
                    <p className={styles.text}>Prix du panier: {totalPrice === 0 ? totalPrice : Number(totalPrice + 35).toFixed(2)}€</p>
                </div>
            </div>
            <div className={styles.summaryCartContainer}>
                {cartDelete.length ? (
                    <Button className={styles.button} type='submit' onClick={() => removeProduct(null, true)}>
                        Tout Supprimer
                    </Button>
                ) : null}
                <Button className={styles.button} type='submit' href='/Products'>
                    Continuer mes achats
                </Button>
                <Button className={styles.button} onClick={() => setOpenPopUp(true)}>
                    Valider mon panier
                </Button>
                <Modal className={styles.modal} show={openPopUp} onHide={handleClose}>
                    {modalBody}
                </Modal>
            </div>
        </div>
    );
};

export default Cart;
