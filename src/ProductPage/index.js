import React, { useState } from "react";
import AddToCartButton from "../components/AddToCartButton";
import CartDropdown from "../components/CartDropdown";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import rp from "request-promise";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: { display: "flex", width: "70%", margin: "auto", marginTop: "10%", justifyContent: "center" },
    image: { width: 400, marginRight: 50, boxShadow: "2.5px 2.5px 2.5px grey", borderRadius: 20 },
    title: { textAlign: "left", fontWeight: "bold", fontFamily: "Viga", fontSize: 25 },
    button: { width: 150, textAlign: "center", marginRight: 20, fontFamily: "Karla" },
    text: { fontFamily: "Karla" },
    price: { fontFamily: "Karla", fontSize: 30, fontWeight: "bold" },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    modal: {
        paddingTop: "100px",
        marginTop: "100px"
    },
    quantityText: { marginTop: 20, fontFamily: "Karla", color: "red", fontWeight: "bold" },
    textsContainer: { width: 400, padding: 30 }
}));

const ProductPage = () => {
    const styles = useStyles();
    const [glacon, setGlacon] = useState([]);
    const { uuid, slug } = useParams();
    const [quantityCart, setQuantityCart] = useState(1);
    const [img, setImg] = useState("https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg");

    React.useEffect(() => {
        rp({
            method: "GET",
            uri: `https://glacompagnie-api.herokuapp.com/api/v1/glacons?single=true&uuid=${uuid}&slug=${slug}`,
            json: true
        }).then((res) => {
            setGlacon(res);
            if (!res) {
                return;
            }

            setImg(res && res.header ? `data:image/png;base64,${res.header}` : img);

            const cart = JSON.parse(localStorage.getItem("cart"));

            const filterCartRes = cart?.filter((cartItem) => cartItem.id === res.id);

            setQuantityCart(filterCartRes && filterCartRes.length ? filterCartRes[0].quantityCart : 1);
        });
    }, [img, slug, uuid]);

    return glacon ? (
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={img} alt='glacon' />
            </div>
            <div className={styles.textsContainer}>
                <p className={styles.title}>{glacon.name}</p>
                <p className={styles.text}>{glacon.description}</p>
                <div style={{ borderTop: "1px solid", width: 200, borderColor: "lightgrey", marginBottom: 10 }} />
                <p className={styles.price}> Prix : {glacon.price} €</p>
                <CartDropdown className={styles.dropdown} glacon={glacon} fromProductPage={true} quantityCart={quantityCart} setQuantityCart={setQuantityCart} />
                <AddToCartButton glacon={glacon} quantityCart={quantityCart} />
                <p className={styles.quantityText}> Il reste encore {glacon.quantity} glacons de disponible</p>
            </div>
        </div>
    ) : (
        <Redirect component={ErrorPage} />
    );
};

export default ProductPage;
