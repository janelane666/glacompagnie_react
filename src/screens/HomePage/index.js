import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Home = () => {
    return (
        <Grid style={{ display: "flex", justifyContent: "center", padding: 30 }}>
            <Grid>
                <Typography>Home Page</Typography>
            </Grid>
        </Grid>
    );
};

export default Home;
