import React, { useState } from "react";
import GlaconCards from "../../components/GlaconCard";
import { Grid, Typography } from "@material-ui/core";
const rp = require("request-promise");

const Products = () => {
    const [glacons, setGlacons] = useState([]);

    rp({
        method: "GET",
        uri: "https://glacompagnie-api.herokuapp.com/api/v1/glacons",
        json: true
    }).then((res) => {
        setGlacons(res);
    });

    return (
        <Grid style={{ display: "flex", justifyContent: "center", padding: 30, flexDirection: "column" }}>
            <Typography style={{ alignSelf: "center", paddingBottom: 20 }}>Articles disponibles</Typography>
            <GlaconCards glacons={glacons} />
        </Grid>
    );
};

export default Products;
