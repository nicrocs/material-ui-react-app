import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';

export default function Sort(props) {
  const styles = {
    display:"flex",
    justifyContent: "flex-start",
    alignItems: "center",
  }
  return (
    <div style={styles}>
      <Checkbox style={{display:"inline-block", width:"auto"}} />
      <span>Sort</span>
      <ArrowDropDown />
    </div>
  )
}
