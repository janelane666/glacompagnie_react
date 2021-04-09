import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Header";
import Routes from "./Routes";

class App extends Component {
    state = {
        glacons: []
    };

    componentDidMount() {
        fetch("https://glacompagnie-api.herokuapp.com/api/v1/glacons")
            .then((res) => res.json())
            .then((data) => {
                this.setState({ glacons: data });
            })
            .catch(console.log);
    }

    render() {
        return (
            <Grid>
                <Navigation />
                <Routes />
                <Footer />
            </Grid>
        );
    }
}

export default App;
