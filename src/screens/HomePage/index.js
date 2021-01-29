import React, { useState, useEffect } from "react";
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

const HomePage = () => {
	// const state = {
	// 	glacons: [],
	// };

	const [glacons, setGlacons] = useState([]);

	// useEffect(() => {
	// 	fetch("https://glacompagnie-api.herokuapp.com/api/v1/glacons")
	// 		.then((res) => {
	// 			console.log("res", res);
	// 			return res.json().then((glacons) => setGlacons(glacons));
	// 		})
	// 		// .then((data) => {
	// 		// 	console.log("data", data);
	// 		// 	setGlacons({ glacons: data });
	// 		// })
	// 		.catch(console.log("ALLO"));
	// }, [glacons]);

	const requete = async () => {
		const ret = await fetch(
			"https://glacompagnie-api.herokuapp.com/api/v1/glacons"
		)
			.then((res) => {
				console.log("res", res);
				return res.json().then((glacons) => setGlacons(glacons));
			})
			// .then((data) => {
			// 	console.log("data", data);
			// 	setGlacons({ glacons: data });
			// })
			.catch(console.log("ALLO"));

		const glacon = await ret.json();
		setGlacons(glacon);
	};

	// res.json().then(glacon => setState(glacon)))

	console.log("glacons", glacons);

	return (
		<div>
			<h1>Articles disponibles</h1>
			<GlaconCards glacons={glacons} />
		</div>
	);
};

export default HomePage;
