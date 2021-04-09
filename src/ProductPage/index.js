import React, { useState } from "react";
import { addToCart } from "../components/CartDropdown";
import CartDropdown from "../components/CartDropdown";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import rp from "request-promise";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: { display: "flex", width: "70%", margin: "auto", marginTop: "10%" },
    image: { width: 350, marginRight: 50 },
    title: { textAlign: "left", fontWeight: "bold", fontFamily: "Viga" },
    button: { width: 150, textAlign: "center", marginRight: 20, fontFamily: "Karla" },
    text: { fontFamily: "Karla" },
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

const ProductPage = () => {
    const styles = useStyles();
    const [glacon, setGlacon] = useState([]);
    const { uuid, slug } = useParams();
    const [quantityCart, setQuantityCart] = useState(1);
    const [img, setImg] = useState("https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg");
    const [openPopUp, setOpenPopUp] = React.useState(false);
    const [modalStyle] = React.useState(getModalStyle);

    const handleClose = () => {
        setOpenPopUp(false);
    };

    const modalBody = (
        <div style={modalStyle} className={styles.paper}>
            <p style={{ fontWeight: "bold", display: "flex", justifyContent: "center", paddingTop: "20px"}}>{glacon.name} a été bien ajouté à votre panier.</p>
        </div>
    );

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
            <div>
                <p className={styles.title}>{glacon.name}</p>
                <p className={styles.text}>{glacon.description}</p>
                <p className={styles.text}> Prix : {glacon.price}</p>
                <CartDropdown className={styles.dropdown} glacon={glacon} fromProductPage={true} quantityCart={quantityCart} setQuantityCart={setQuantityCart} />
                <Button
                    type='submit'
                    onClick={() => {
                        addToCart(glacon, quantityCart);
                        setOpenPopUp(true);
                    }}
                >
                    Acheter
                </Button>
                <Modal show={openPopUp} onHide={handleClose} className={styles.modal}>
                    {modalBody}
                </Modal>
            </div>
        </div>
    ) : (
        <Redirect component={ErrorPage} />
    );
};

export default ProductPage;
