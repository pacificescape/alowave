import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {main: deepPurple[800], contrastText: '#eee'},
    light: '#eee',
    secondary: { main: 'rgb(66, 114, 219)', contrastText: '#eee' },
    text: { primary: '#fff'}
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  },
  typography: {
    color: '#eee',
  },
});
