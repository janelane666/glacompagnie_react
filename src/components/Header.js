import React from "react";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { colors } from "../theme";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	monCompte: {
		marginLeft: "auto",
		color: "white",
		fontWeight: "bold",
		textShadow: "2px 2px 8px rgba(50,100,220, 0.8)",
	},
	appbar: {
		backgroundColor: colors.backgroundHeader,
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

const Header = () => {
	const styles = useStyles();

	return (
		<AppBar position="static" className={styles.appbar}>
			<Toolbar>
				{/* <Image /> */}
				<Typography className={styles.logo} variant="h6">
					🐧 Glaçompagnie™ 🧊
				</Typography>
				<Link to="/" className={styles.monCompte}>MON COMPTE</Link>
				<Button className={styles.headerLink}>CONTACT</Button>
				<Button className={styles.headerLink}>À PROPOS</Button>
				{/* <Image /> */}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
