import React from "react";
import { Grid, Typography } from "@material-ui/core";

const About = () => {
    return (
        <Grid style={{ display: "flex", justifyContent: "center", padding: 30, fontWeight: "bold" }}>
            <Grid>
                <Typography>About Page</Typography>
            </Grid>
        </Grid>
    );
};

export default About;
