import React from "react";
import "./styles/FicheProduit.css"

const FicheProduit = () => {
    // let apiURL="https://glacompagnie-api.herokuapp.com/api/v1/glacons"
    // let data;
    // fetch(apiURL)
    //   .then((response) => response.json())
    //   .then((data) => data = this.data);


    let imgURL = "https://www.lca-aroma.com/img/cms/photos%20recettes%20cuisine/douche%20effet%20gla%C3%A7on.jpg";
    let titre = "produit1";
    let description = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.";
    let prix = "999,99 €";

	return (
        <div className="wrapper">
            <div><img src={imgURL} /></div>
            <div>
                <h1>{titre}</h1>
                <p>{description}</p>
                <h2>Prix : {prix}</h2>
                <button>acheter</button>
            </div>
        </div>
	);
};

export default FicheProduit;
