import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#e5ceff',
            main: '#9DB4FA',
            dark: '#826fa9',
            contrastText: '#000000',
        },
        secondary: {
            light: '#ffeeff',
            main: '#dc6b4b',
            dark: '#c48b9f',
            contrastText: '#000000',
        },
        // type: "dark"
    },
    typography : {
        fontFamily : [
            'Lato', 
            'Oswald',
            'Fira Code',
            'monospace',
            'sans-serif',
        ].join(','),
    }
});

export default theme;