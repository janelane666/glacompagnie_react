import React, { useState, useEffect } from "react";
import GlaconCards from "../../components/GlaconCard";
const rp = require("request-promise");

const Products = () => {
    const [glacons, setGlacons] = useState([]);

    useEffect(() => {
        rp({
            method: "GET",
            uri: "https://glacompagnie-api.herokuapp.com/api/v1/glacons",
            json: true
        }).then((res) => {
            // console.log("in request", res);
            setGlacons(res);
        });
    }, [glacons]);

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
            <h2>Articles disponibles</h2>
            <GlaconCards glacons={glacons} />
        </div>
    );
};

export default Products;
