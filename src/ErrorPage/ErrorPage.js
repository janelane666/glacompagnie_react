import React from "react";
import Desert from "../image/where_banana.png";

const ErrorPage = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center", fontWeight: "bold", flexDirection: "column" }}>
            {/* <Typography style={{ fontWeight: "bold", position: "absolute", left: "45%", bottom: "80%" }}>Error page</Typography> */}
            <img src={Desert} style={{ height: "100%", width: "100%" }} alt='Page not found' />
        </div>
    );
};

export default ErrorPage;
