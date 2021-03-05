import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// import addToCart from "./Cart";

const CartDropdown = ({ item }) => {
    const [quantity, setQuantity] = React.useState(1);

    const addToCart = (id, quantity) => {
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        }

        const cart = JSON.parse(localStorage.getItem("cart"));

        let newCart = cart;
        let overWrite = false;

        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === id) {
                overWrite = true;
                newCart[i] = { id: id, quantity: quantity };
            }
        }

        if (!overWrite) {
            newCart.push({ id: id, quantity: quantity });
        }

        localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
    };

    return (
        <FormControl>
            <Select
                value={quantity}
                onChange={(event) => {
                    setQuantity(event.target.value);
                    addToCart(item.id, event.target.value);
                }}
            >
                {[...Array(10).keys()].map((i) => (
                    <MenuItem value={i + 1}>{i + 1}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CartDropdown;
