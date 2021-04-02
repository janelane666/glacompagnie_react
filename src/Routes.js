import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Products from "./ProductsList/ProductsList";
// import Home from "./HomePage/index";
import Product from "./ProductPage/index";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Cart from "./Cart/index";
import ErrorPage from "./ErrorPage/ErrorPage";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Products} />
                    <Route path='/Home' component={Products} />
                    <Route path='/Products' component={Products} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/About' component={About} />
                    <Route path='/Product/:slug/:uuid' component={Product} />
                    <Route path='/Cart' component={Cart} />
                    <Route component={ErrorPage} />
                </Switch>
            </Router>
        );
    }
}
