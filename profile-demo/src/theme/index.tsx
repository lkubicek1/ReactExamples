import {createTheme} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#FA8072', // Salmon color
        },
        secondary: {
            main: '#008080', // Teal color
        },
    },
    typography: {
        fontFamily: '"Arial", sans-serif', // Adjust this as needed
    },
});

export default theme;
