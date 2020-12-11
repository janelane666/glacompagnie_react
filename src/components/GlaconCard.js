import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "../theme";

const useStyles = makeStyles((theme) => ({
	oneCard: {
		backgroundColor: "#ECE9E9",
		margin: "1vw",
		width: 300,
		height: 160,
	},
	cardContainer: {
		padding: "2vh 8vw",
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
		color: colors.black,
	},
	description: {
		fontStyle: "italic",
		color: colors.grey,
	},
	priceAndQuantity: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingTop: "0px",
	},
	price: {
		fontWeight: "bold",
		color: colors.black,
	},
	quantity: { color: colors.grey },
}));

const GlaconCards = ({ glacons }) => {
	const styles = useStyles();

	return (
		<Grid container className={styles.cardContainer}>
			{glacons.map((glacon) => (
				<Grid item>
					<Card className={styles.oneCard}>
						<div class="card-body">
							<CardContent>
								<Typography className={styles.title}>{glacon.name}</Typography>
								<Typography className={styles.description}>
									{glacon.description}
								</Typography>
							</CardContent>

							<CardContent className={styles.priceAndQuantity}>
								<Typography className={styles.quantity}>
									Quantité : {glacon.quantity}
								</Typography>
								<Typography className={styles.price}>
									{glacon.price} €
								</Typography>
							</CardContent>
						</div>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default GlaconCards;
