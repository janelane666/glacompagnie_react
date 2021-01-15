import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
	black: "#333",
	grey: "#5A5959",
	backgroundHeader: "#BAF0F8",
};

export const dimensions = {
	drawer: {
		width: 240,
	},
};

const defaultTheme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 700,
			md: 1100,
			lg: 1400,
			xl: 1600,
		},
	},
	palette: {
		primary: {
			main: colors.black,
		},
	},
});

const theme = createMuiTheme({
	...defaultTheme,

	overrides: {
		MuiCardContent: {
			root: {
				padding: 0,
			},
		},
	},
});

export default theme;
