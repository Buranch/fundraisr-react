import cyan500 from '@material-ui/core/colors/cyan';
import cyan700 from '@material-ui/core/colors/cyan';
import green400 from '@material-ui/core/colors/green';
import grey100 from '@material-ui/core/colors/grey';
import grey300 from '@material-ui/core/colors/grey';
import grey400 from '@material-ui/core/colors/grey';
import grey500 from '@material-ui/core/colors/grey';
import common from '@material-ui/core/colors/common';
import { fade } from '@material-ui/core/styles/colorManipulator';
import spacing from '@material-ui/core/styles/spacing';

/**
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every components. Variables not defined
 *  in a custom theme will default to these values.
 */
export default {
  spacing,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: green400,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: common.black,
    secondaryTextColor: fade(common.black, 0.54),
    alternateTextColor: common.white,
    canvasColor: common.white,
    borderColor: grey300,
    disabledColor: fade(common.black, 0.3),
    pickerHeaderColor: cyan500,
    clockCircleColor: fade(common.black, 0.07),
    shadowColor: common.black
  }
};
