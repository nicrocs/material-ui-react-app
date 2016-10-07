import React from 'react';
import AppBar from 'material-ui/AppBar';
import Face from '../assets/face.png';
import {linkStyle, muiTheme} from '../constants';
import accountIcon from '../assets/Account.png';

export default function Header(props) {
  const editProfileStyles = Object.assign({}, linkStyle, {
    float: "right",
    paddingTop: "20px",
    fontSize: "14px",
    color: muiTheme.palette.textColor,
    position: "relative",
    display:"flex",
    alignItems: "center",
  })
  return (
    <div>
      <AppBar style={{backgroundColor:"#E6E5E0"}}
        onLeftIconButtonTouchTap={
          props.toggleMenu
        }>
        <a href="#" style={editProfileStyles}>
          <span style={{marginRight: "10px"}}>Bright Eyed Baby Happy Face</span>
          <img src={Face} />
          <span style={{position:"absolute", right:0, bottom: 0,}}><img src={accountIcon} /></span>
        </a>
      </AppBar>
      <div style={{borderTop:"1px solid #fff", height:"54px", backgroundColor:"rgba(230, 229, 224, .5)"}}>
      </div>
    </div>
  )
}
