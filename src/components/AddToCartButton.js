import React from "react";
import { Button, Modal } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { addToCart } from "./CartDropdown";

const useStyles = makeStyles((theme) => ({
    button: { width: "100%", fontFamily: "Karla" },
    paper: { marginTop: 15 }
}));

const AddToCartButton = ({ buttonText, glacon, quantityCart }) => {
    const styles = useStyles();
    const [openPopUp, setOpenPopUp] = React.useState(false);

    const handleClose = () => {
        setOpenPopUp(false);
    };

    const modalBody = (
        <div className={styles.paper}>
            <p style={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>{glacon.name} a été bien ajouté à votre panier.</p>
        </div>
    );

    return (
        <>
            <Button
                className={styles.button}
                type='submit'
                variant='primary'
                onClick={() => {
                    addToCart(glacon, quantityCart);
                    setOpenPopUp(true);
                }}
            >
                {buttonText ? buttonText : "Ajouter au panier"}
            </Button>
            <Modal show={openPopUp} onHide={handleClose}>
                {modalBody}
            </Modal>
        </>
    );
};

export default AddToCartButton;
