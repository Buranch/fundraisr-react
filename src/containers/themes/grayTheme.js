import cyan700 from '@material-ui/core/colors/cyan';
import grey600 from '@material-ui/core/colors/grey';
import green600 from '@material-ui/core/colors/green';
import green200 from '@material-ui/core/colors/green';
import green400 from '@material-ui/core/colors/green';
import common from '@material-ui/core/colors/common';
import { fade } from '@material-ui/core/styles/colorManipulator';
import spacing from '@material-ui/core/styles/spacing';

export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan700,
    primary2Color: cyan700,
    primary3Color: grey600,
    accent1Color: green600,
    accent2Color: green400,
    accent3Color: green200,
    textColor: 'rgba(255,255,255,.7)',
    secondaryTextColor: fade(common.white, 0.54),
    alternateTextColor: '#3c3c3c',
    canvasColor: '#3c3c3c',
    borderColor: fade(common.white, 0.15),
    disabledColor: fade(common.white, 0.3),
    pickerHeaderColor: fade(common.white, 0.12),
    clockCircleColor: fade(common.white, 0.12)
  }
};
