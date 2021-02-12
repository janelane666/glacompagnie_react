// import React, { useState, useEffect } from "react";
// import GlaconCards from "../../components/GlaconCard";
// const rp = require("request-promise");
// // import { makeStyles } from "@material-ui/core/styles";
// // import { colors } from "../../theme";

// // const useStyles = makeStyles((theme) => ({
// // 	title: {
// // 		fontWeight: "bold",
// // 		margin: "4vh 9vw",
// // 		color: colors.black,
// // 	},
// // }));

// const HomePage = () => {
// 	const [glacons, setGlacons] = useState([]);

// 	useEffect(() => {
// 		rp({
// 			method: "GET",
// 			uri: "https://glacompagnie-api.herokuapp.com/api/v1/glacons",
// 			json: true,
// 		}).then((res) => {
// 			console.log("in request", res);
// 			setGlacons(res);
// 		});
// 	}, [glacons]);

// 	console.log("glacons", glacons);

// 	return (
// 		<div>
// 			<h1>Articles disponibles</h1>
// 			<GlaconCards glacons={glacons} />
// 		</div>
// 	);
// };

// export default HomePage;
