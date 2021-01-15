import React from "react";
// import paths from "./paths";
import homepage from "./screens/HomePage";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Router>
				<Switch>
					<Route component={homepage} exact={true} path="/" />
				</Switch>
			</Router>
		</BrowserRouter>
	);
};

export default Router;
