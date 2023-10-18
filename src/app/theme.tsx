import { PaletteColorOptions, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    son_red: {
      main: '#7E0707', // Customize the primary color
      contrastText: '#fff',
    },
  },
});

declare module '@mui/material/styles' {
interface CustomPalette {
    son_red: PaletteColorOptions;
}
interface Palette extends CustomPalette {}
interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
interface ButtonPropsColorOverrides {
    son_red: true;
}
}

export default theme;