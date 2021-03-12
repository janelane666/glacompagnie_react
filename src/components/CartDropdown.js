import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const addToCart = (id, quantity) => {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const cart = JSON.parse(localStorage.getItem("cart"));

    let newCart = cart;
    let overWrite = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            overWrite = true;
            newCart[i] = { id: id, quantityCart: quantity };
        }
    }

    if (!overWrite) {
        newCart.push({ id: id, quantityCart: quantity });
    }

    localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
};

const CartDropdown = ({ item, fromProductPage }) => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    const filterCartRes = cart.filter((cartItem) => {
        if (cartItem.id === item.id) {
            return cartItem;
        }
    });

    const quantity = filterCartRes.length ? filterCartRes[0].quantityCart : 1;

    const [quantityCart, setQuantityCart] = React.useState(quantity);

    return (
        <FormControl>
            <Select
                value={quantityCart}
                onChange={(event) => {
                    setQuantityCart(event.target.value);
                    if (!fromProductPage) {
                        addToCart(item.id, event.target.value);
                    }
                }}
            >
                {[...Array(item.quantity > 0 ? (item.quantity > 50 ? item.quantity : 50) : 0).keys()].map((i) => (
                    <MenuItem value={i + 1} key={i}>
                        {i + 1}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CartDropdown;
