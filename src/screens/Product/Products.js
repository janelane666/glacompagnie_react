import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	monCompte: {
		marginLeft: "auto",
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 8px rgba(50,100,220, 0.8)",
	},
	appbar: {
		minHeight: 100,
		display: "flex",
		justifyContent: "center",
	},
	headerLink: {
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 8px rgba(50,100,220, 0.8)",
	},
	logo: {
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 8px rgba(50,100,220, 0.8)",
	},
}));

const ProductPage = () => {
	const styles = useStyles();

	return (
		<Grid>
			<Typography>TITRE DU PRODUIT</Typography>
			<Typography>Description</Typography>
			<Typography>Prix</Typography>
			<Button>Add to cart</Button>
			<Typography>Nb glaçons restants</Typography>
		</Grid>
	);
};

export default ProductPage;
