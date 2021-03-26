import React from "react";
import { addToCart } from "../components/CartDropdown";
import CartDropdown from "../components/CartDropdown";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    container: { display: "flex", width: "70%", margin: "auto" },
    image: { width: 300, marginRight: 50 },
    title: { textAlign: "left", fontWeight: "black" },
    button: { width: 150, textAlign: "center", backgroundColor: "#fafa" }
}));

const ProductPage = () => {
    const styles = useStyles();

    const glacon = JSON.parse(localStorage.getItem("glacon"));
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";

    const img = glacon.header ? `data:image/png;base64,${glacon.header}` : defaultImg;

    const cart = JSON.parse(localStorage.getItem("cart"));

    const filterCartRes = cart?.filter((cartItem) => cartItem.id === glacon.id);

    const [quantityCart, setQuantityCart] = React.useState(filterCartRes && filterCartRes.length ? filterCartRes[0].quantityCart : 1);

    return (
        <Grid className={styles.container}>
            <Grid>
                <img className={styles.image} src={img} alt='glacon' />
            </Grid>
            <Grid>
                <Typography className={styles.title}>{glacon.name}</Typography>
                <Typography className={styles.description}>{glacon.description}</Typography>
                <Typography className={styles.price}> Prix : {glacon.price}</Typography>
                <Button type='submit' onClick={() => addToCart(glacon.id, quantityCart)}>
                    acheter
                </Button>

                {/* quantityCart doesnt get updated fix later */}
                <CartDropdown glacon={glacon} fromProductPage={true} quantityCart={quantityCart} setQuantityCart={setQuantityCart} />
            </Grid>
        </Grid>
    );
};

export default ProductPage;
