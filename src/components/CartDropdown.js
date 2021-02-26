import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const CardDropdown = () => {
    const [quantity, setQuantity] = React.useState(1);

    const x = (
        <FormControl>
            <Select value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                {[...Array(10).keys()].map((i) => (
                    <MenuItem value={i}>{i}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );

    return quantity;
};

export default CardDropdown;
