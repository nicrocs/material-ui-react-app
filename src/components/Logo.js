import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';

export default function Logo() {
  const logoStyles = {
    padding: "50px 50px 30px 50px"
  }
  return (
    <div style={logoStyles}>
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
    </div>
  )
}
