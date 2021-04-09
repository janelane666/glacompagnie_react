import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export const addToCart = (glacon, quantityCart) => {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", "[]");
    }

    const cart = JSON.parse(localStorage.getItem("cart"));

    let newCart = cart;
    let overWrite = false;

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === glacon.id) {
            overWrite = true;
            newCart[i] = { ...glacon, quantityCart };
            break;
        }
    }

    if (!overWrite) {
        if (glacon.quantity > 0) {
            newCart.push({ ...glacon, quantityCart });
        }
    }

    localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
};

export const removeFromCart = (id, all = false) => {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
        return;
    }

    console.log(all);
    if (all) {
        localStorage.setItem("cart", "[]");
        return;
    }

    const newCart = cart?.filter((item) => {
        if (item.id !== id) {
            return item;
        }
    });

    localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
};

const CartDropdown = ({ glacon, fromProductPage, quantityCart, setQuantityCart }) => {
    const [qty, setQty] = React.useState(quantityCart);
    React.useEffect(() => {
        if (qty !== quantityCart) setQuantityCart(qty);
    }, [qty, quantityCart, setQuantityCart]);

    return (
        <FormControl variant='filled' style={{ marginRight: 20 }}>
            <Select
                value={qty}
                onChange={(event) => {
                    setQty(event.target.value);
                    if (!fromProductPage) {
                        addToCart(glacon, event.target.value);
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
