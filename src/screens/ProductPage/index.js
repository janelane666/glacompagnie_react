import React from "react";
import { useState } from "react";
import "./ProductPage.css";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { addToCart } from "../../components/Cart";

const ProductPage = () => {
    const glacon = JSON.parse(localStorage.getItem("glacon"));
    const [quantity, setQuantity] = useState(1);
    let defaultImg = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    const img = glacon.header ? `data:image/png;base64,${glacon.header}` : defaultImg;

    return (
        <div className='wrapper'>
            <div>
                <img src={img} alt='glacon' />
            </div>
            <div>
                <h1>{glacon.name}</h1>
                <p>{glacon.description}</p>
                <h2>Prix : {glacon.price}</h2>
                <button onClick={() => addToCart(glacon.id, quantity)}>acheter</button>
                <FormControl>
                    <Select value={quantity} onChange={(event) => setQuantity(event.target.value)}>
                        {[...Array(10).keys()].map((i) => (
                            <MenuItem value={i + 1}>{i + 1}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
};

export default ProductPage;
