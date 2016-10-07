// modules/NavLink.js
import React from 'react'
import { Link } from 'react-router'

export default function NavLink(props) {
  const activeStyles = {
    borderLeft: "7px solid #fff",
    backgroundColor: "#393939",
    marginLeft: "11px",
  };
  return <Link {...props} activeStyle={activeStyles}/>;
}
