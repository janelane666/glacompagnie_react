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

const CartDropdown = ({ glacon, fromProductPage, quantityCart, setQuantityCart }) => {
    const [qty, setQty] = React.useState(quantityCart);
    React.useEffect(() => {
        if (qty !== quantityCart) setQuantityCart(qty);
    }, [qty, quantityCart, setQuantityCart]);

    return (
        <FormControl>
            <Select
                value={qty}
                onChange={(event) => {
                    setQty(event.target.value);
                    if (!fromProductPage) {
                        addToCart(glacon.id, event.target.value);
                    }
                }}
            >
                {[...Array(glacon.quantity > 0 ? (glacon.quantity < 50 ? glacon.quantity : 50) : 0).keys()].map((i) => (
                    <MenuItem value={i + 1} key={i}>
                        {i + 1}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CartDropdown;
