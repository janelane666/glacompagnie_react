import React, { useState } from "react";
import GlaconCards from "../../components/GlaconCard";
// import { makeStyles } from "@material-ui/core/styles";
// import { colors } from "../../theme";

// const useStyles = makeStyles((theme) => ({
// 	title: {
// 		fontWeight: "bold",
// 		margin: "4vh 9vw",
// 		color: colors.black,
// 	},
// }));

const HomePage = async () => {
	// state = {
	// 	glacons: [],
	// 	truc: "coucou",
	// };

	const [glacons, setGlacons] = useState([]);

	await setGlacons(
		await fetch("https://glacompagnie-api.herokuapp.com/api/v1/glacons")
			.then((res) => console.log("allo", res.json()))
			.then((data) => {
				this.setState({ glacons: data });
			})
			.catch(console.log("ALLO"))
	);

	return (
		<div>
			<h1>Articles disponibles</h1>
			<GlaconCards glacons={glacons} />
		</div>
	);
};

export default HomePage;
