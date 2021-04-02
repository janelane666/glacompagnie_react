import React, { useState } from "react";
import { addToCart } from "../components/CartDropdown";
import CartDropdown from "../components/CartDropdown";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Modal } from "@material-ui/core";
import { useParams } from "react-router-dom";
import rp from "request-promise";
import ErrorPage from "../ErrorPage/ErrorPage";
import { BrowserRouter as Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: { display: "flex", width: "70%", margin: "auto" },
    image: { width: 300, marginRight: 50 },
    title: { textAlign: "left", fontWeight: "black" },
    button: { width: 150, textAlign: "center", backgroundColor: "#fafa" },
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
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
        <Grid style={modalStyle} className={styles.paper}>
            <Typography style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>Votre panier a été mis à jour.</Typography>
            <Button href='/Products'>Continuer mes achats</Button>
            <Button href='/Cart'>Voir mon panier</Button>
        </Grid>
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
        <Grid className={styles.container}>
            <Grid>
                <img className={styles.image} src={img} alt='glacon' />
            </Grid>
            <Grid>
                <Typography className={styles.title}>{glacon.name}</Typography>
                <Typography className={styles.description}>{glacon.description}</Typography>
                <Typography className={styles.price}> Prix : {glacon.price}</Typography>
                <Button type='submit' onClick={() => {addToCart(glacon, quantityCart); setOpenPopUp(true)}}>
                    acheter
                </Button>
                <Modal open={openPopUp} onClose={handleClose}>
                {modalBody}
                </Modal>

                <CartDropdown glacon={glacon} fromProductPage={true} quantityCart={quantityCart} setQuantityCart={setQuantityCart} />
            </Grid>
        </Grid>
    ) : (
        <Redirect component={ErrorPage} />
    );
};

export default ProductPage;
