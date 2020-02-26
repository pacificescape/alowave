import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {main: '#315772', contrastText: '#eee'},
    light: '#eee',
    secondary: { main: '#9794b9', contrastText: '#eee' },
    text: {
      primary: '#ccc',
      secondary: '#ccc',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    }
  },
  Typography: {
    color: '#eee',
  },
});
