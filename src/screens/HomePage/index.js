import React from "react";
import GlaconCards from "../../components/GlaconCard";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../../theme";

const useStyles = makeStyles((theme) => ({
	title: {
		fontWeight: "bold",
		margin: "4vh 9vw",
		color: colors.black,
	},
}));

const HomePage = ({ glacons }) => {
	const styles = useStyles();

	return (
		<div>
			{/* <Header /> */}

			<h1 className={styles.title}>Articles disponibles</h1>
			<GlaconCards glacons={glacons} />
		</div>
	);
};

export default HomePage;
