import React from "react";
import "./ProductPage.css"

const ProductPage = () => {
	const glacon = JSON.parse(localStorage.getItem("glacon"))

    let imgURL = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";

	return (
        <div className="wrapper">
            <div><img src={imgURL} /></div>
            <div>
                <h1>{glacon.name}</h1>
                <p>{glacon.description}</p>
                <h2>Prix : {glacon.price}</h2>
                <button>acheter</button>
            </div>
        </div>
	);
};

export default ProductPage;
