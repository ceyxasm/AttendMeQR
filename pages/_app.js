import '../styles/globals.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#9013fe',
      dark:'#9013fe',
    }
  },
  typography: {
    fontFamily: 'SFPRO',
  },

});
function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default MyApp
