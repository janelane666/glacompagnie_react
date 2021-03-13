import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import Products from "./screens/ProductsList/ProductsList";
import Home from "./screens/HomePage/index";
import Product from "./screens/ProductPage/index";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Cart from "./screens/Cart/index";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path='/Home' component={Home} />
                    <Route path='/Products' component={Products} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/About' component={About} />
                    <Route path='/Product' component={Product} />
                    <Route path='/Cart' component={Cart} />
                </Switch>
            </Router>
        );
    }
}
