import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

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

    if (all) {
        localStorage.setItem("cart", "[]");
        return;
    }

    const newCart = cart?.filter((item) => {
        if (item.id !== id) {
            return item;
        }
        return null;
    });

    localStorage.setItem("cart", JSON.stringify(newCart, null, 2));
};

const CartDropdown = ({ glacon, fromProductPage, quantityCart, setQuantityCart }) => {
    const [qty, setQty] = React.useState(quantityCart);
    React.useEffect(() => {
        if (qty !== quantityCart) setQuantityCart(qty);
    }, [qty, quantityCart, setQuantityCart]);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick} style={{ border: "1px solid" }}>
                {qty}
                <KeyboardArrowDownIcon style={{ marginLeft: 20, height: 40 }} />
            </Button>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {[...Array(glacon.quantity > 0 ? (glacon.quantity < 50 ? glacon.quantity : 50) : 0).keys()].map((i) => (
                    <MenuItem
                        value={i + 1}
                        key={i}
                        onClick={(event) => {
                            setQty(event.target.value);
                            if (!fromProductPage) {
                                addToCart(glacon, event.target.value);
                            }
                        }}
                    >
                        {i + 1}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default CartDropdown;
