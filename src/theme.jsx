import { createMuiTheme } from "@material-ui/core/styles";

export const colors = {
    black: "#333",
    grey: "EDE7E3",
    darkBlue: "16697A",
    lightBlue: "489FB5",
    orange: "FFA62B",
    backgroundHeader: "#BAF0F8"
};

export const dimensions = {
    drawer: {
        width: 240
    }
};

const defaultTheme = createMuiTheme({
    palette: {
        primary: {
            main: colors.black
        }
    }
});

const theme = createMuiTheme({
    ...defaultTheme,
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 1100,
            lg: 1400,
            xl: 1600
        }
    },
    overrides: {
        MuiCardContent: {
            root: {
                padding: 0
            }
        }
    }
});

export default theme;
