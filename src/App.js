import React, { Component } from "react";
// import GlaconCards from "./components/GlaconCard";
import HomePage from "./screens/HomePage";
import Header from "./components/Header";
import { Grid } from "@material-ui/core";
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
				{/* <Header /> */}
				{/* <HomePage glacons={this.state.glacons} /> */}
			</Grid>
		);
	}
}

export default App;
