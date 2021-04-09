import React from "react";
import { ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";
import CartDropdown, { removeFromCart } from "../components/CartDropdown.js";
import { Button, Modal } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
    oneCard: {
        display: "flex",
        flexDirection: "row",
        margin: "1vw"
    },
    cardContainer: {
        padding: "2vh 8vw",
        flexDirection: "column"
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
        fontFamily: "Karla"
    },
    quantityCart: { fontFamily: "Karla" },
    quantity: { color: colors.grey, fontFamily: "Karla" },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    button: { margin: 20, fontFamily: "Karla" }
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
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    const [openPopUp, setOpenPopUp] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        setOpenPopUp(false);
    };

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

    const modalBody = (
        <div style={modalStyle} className={styles.paper}>
            <p style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>Votre panier a bien été validé</p>
        </div>
    );

    return (
        <div container className={styles.cardContainer}>
            <p style={{ paddingBottom: 20, fontWeight: "bold", fontSize: 40 }}>Panier</p>
            <div className={styles.card}>
                {cart?.map((item, i) => {
                    return (
                        <div className={styles.oneCard} key={item.id}>
                            <>
                                <img width='50' height='50' src={item.header ? `data:image/png;base64,${item.header}` : defaultImg} alt='glacon' />
                                <div flexDirection='column' style={{ marginLeft: 20, marginRight: 20, width: 400 }}>
                                    <ButtonBase href={`/Product/${item.slug}/${item.uuid}`}>
                                        <p className={styles.title}>{item.name}</p>
                                    </ButtonBase>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <p className={styles.title}>Prix unitaire : {Number(item.price).toFixed(2)}€</p>
                                        <Button style={{ marginBottom: 15, marginLeft: 10, fontFamily: "Karla" }} type='submit' onClick={() => removeProduct(item.id)}>
                                            Supprimer
                                        </Button>
                                    </div>
                                </div>
                                <div flexDirection='column' style={{ marginLeft: 20, marginRight: 20 }}>
                                    <p className={styles.quantityCart}>{"Quantité sélectionnée: "}</p>
                                    <CartDropdown glacon={item} fromProductPage={false} quantityCart={item.quantityCart} setQuantityCart={setQuantityCart} />
                                </div>
                                <p className={styles.price}>Prix total : {Number(item.price * item.quantityCart).toFixed(2)}€</p>
                            </>
                        </div>
                    );
                })}
                <p style={{ display: "flex", justifyContent: "flex-end", marginBottom: 15, fontFamily: "Karla" }}>Frais de livraison: 35 €</p>
                <p style={{ display: "flex", justifyContent: "flex-end", fontFamily: "Karla" }}>Prix du panier: {Number(totalPrice).toFixed(2)}€</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {cartDelete.length ? (
                    <Button className={styles.button} type='submit' onClick={() => removeProduct(null, true)}>
                        Tout Supprimer
                    </Button>
                ) : (
                    "c'est vide :c"
                )}
                <Button className={styles.button} type='submit' href='/Products'>
                    Continuer mes achats
                </Button>
                <Button className={styles.button} onClick={() => setOpenPopUp(true)}>
                    Valider mon panier
                </Button>
                <Modal open={openPopUp} onClose={handleClose}>
                    {modalBody}
                </Modal>
            </div>
        </div>
    );
};

export default Cart;
