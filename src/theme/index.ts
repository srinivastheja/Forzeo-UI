import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
  components: {
    MuiAppBar: { styleOverrides: { root: { boxShadow: 'none' } } }
  }
});
