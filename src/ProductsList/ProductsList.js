import React, { useState } from "react";
import GlaconCards from "../components/GlaconCard";
import "../App.css";
const rp = require("request-promise");

const Products = () => {
    const [glacons, setGlacons] = useState([]);

    React.useEffect(() => {
        rp({
            method: "GET",
            uri: "https://glacompagnie-api.herokuapp.com/api/v1/glacons",
            json: true
        }).then((res) => {
            setGlacons(res);
        });
    }, []);

    localStorage.setItem("glacons", JSON.stringify(glacons));

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 30, flexDirection: "column" }}>
            <h1 style={{ alignSelf: "center", paddingBottom: 20, fontFamily: "Viga", fontWeight: "bold" }}>Articles disponibles</h1>
            <GlaconCards glacons={glacons} />
        </div>
    );
};

export default Products;
