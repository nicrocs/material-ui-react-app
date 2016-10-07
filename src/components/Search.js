import React from 'react';
import TextField from 'material-ui/TextField';
import SearchIcon from 'material-ui/svg-icons/action/search';

export default function Search(props) {
  const styles = {
    border: "1px solid #E6E5E0",
    color:"#E6E5E0",
    height: "45px",
    display: "flex",
    alignItems: "center",
  }
  return (
    <div style={styles}>
      <i className="material-icons">search</i>
      <TextField
        hintText="Search"
        underlineShow={false}
        style={{height: "45px"}}
      />
    </div>
  )
}
