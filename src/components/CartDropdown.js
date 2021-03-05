import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const CartDropdown = ({quantity, setQuantity}) => {
    
    return (
        <FormControl>
            <Select value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                {[...Array(10).keys()].map((i) => (
                    <MenuItem value={i + 1} key={i}>{i + 1}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CartDropdown;
