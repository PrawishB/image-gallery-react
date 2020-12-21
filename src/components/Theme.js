import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: "#f06a6a",
            main: "#e53e3e",
            dark: "#c53030",
        },
        secondary: {
            light: "#43ba82",
            main: "#276749",
            dark: "#173c2b"
        },
    }
});

export default Theme;