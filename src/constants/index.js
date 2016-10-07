import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const modifiedTheme = Object.assign({}, baseTheme, {
  palette: {
    primary1Color: "#6C9E41",
    accent1Color: "#0B9AD7",
  },
  checkbox: {
    boxColor: baseTheme.palette.accent3Color,
  },
  toggle: {
    thumbOnColor: baseTheme.palette.canvasColor,
    thumbOffColor: baseTheme.palette.canvasColor,
    trackOnColor: baseTheme.palette.accent2Color,
    trackOffColor: baseTheme.palette.accent2Color,
  }

})

export const muiTheme = getMuiTheme(modifiedTheme);

export const linkStyle = {
  color: modifiedTheme.palette.accent1Color,
  textDecoration: "none",
}
