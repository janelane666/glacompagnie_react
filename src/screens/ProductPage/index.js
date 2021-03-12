import React from "react";
import "./ProductPage.css";
import { addToCart } from "../../components/CartDropdown";
import CartDropdown from "../../components/CartDropdown";

const ProductPage = () => {
    const glacon = JSON.parse(localStorage.getItem("glacon"));
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    const img = glacon.header ? `data:image/png;base64,${glacon.header}` : defaultImg;

    const cart = JSON.parse(localStorage.getItem("cart"));

    const filterCartRes = cart.filter((cartItem) => {
        if (cartItem.id === glacon.id) {
            return cartItem;
        }
        return [];
    });

    const [quantityCart, setQuantityCart] = React.useState();

    React.useEffect(() => {
        setQuantityCart(filterCartRes.length ? filterCartRes[0].quantityCart : 1);
    }, [filterCartRes]);
    React.useEffect(() => {
        console.log("filterCartRes", filterCartRes);
    }, [filterCartRes]);
    return (
        <div className='wrapper'>
            <div>
                <img src={img} alt='glacon' />
            </div>
            <div>
                <h1>{glacon.name}</h1>
                <p>{glacon.description}</p>
                <h2>Prix : {glacon.price}</h2>
                <button type='submit' onClick={() => addToCart(glacon.id, quantityCart)}>
                    acheter
                </button>

                {/* quantityCart doesnt get updated fix later */}
                <CartDropdown glacon={glacon} fromProductPage={true} quantityCart={quantityCart} setQuantityCart={setQuantityCart} />
            </div>
        </div>
    );
};

export default ProductPage;
