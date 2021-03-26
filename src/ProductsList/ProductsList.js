import React, { useState } from "react";
import GlaconCards from "../components/GlaconCard";
import { Grid, Typography } from "@material-ui/core";
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
        <Grid style={{ display: "flex", justifyContent: "center", padding: 30, flexDirection: "column" }}>
            <Typography style={{ alignSelf: "center", paddingBottom: 20 }}>Articles disponibles</Typography>
            <GlaconCards glacons={glacons} />
        </Grid>
    );
};

export default Products;
