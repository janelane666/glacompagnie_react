import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from "./history";
import Products from "./screens/Product/Products";
// import Home from "./screens/HomePage/index";
import Product from "./screens/ProductPage/index";
import About from "./screens/About/About";
import Contact from "./screens/Contact/Contact";
import Cart from "./components/Cart";

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    {/* <Route path="/" exact component={Home} /> */}
                    <Route path='/Products' component={Products} />
                    <Route path='/Contact' component={Contact} />
                    <Route path='/About' component={About} />
                    <Route path='/Product' component={Product} />
                </Switch>
                <Route path='/Cart' component={Cart} />
            </Router>
        );
    }
}
