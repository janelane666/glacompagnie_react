import React, { Component } from "react";
// import GlaconCards from "./components/GlaconCard";
import HomePage from "./screens/HomePage";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
import Form from "./components/Form"
import CodePostal from "./components/CodePostal";
import Navigation from "./components/Header";
import Routes from "./Routes";

class App extends Component {
	state = {
		glacons: [],
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
			</Grid>
		);
	}
}

export default App;
