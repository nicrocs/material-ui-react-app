import React from 'react';

export default function H1(props) {
  const styles = {
    fontWeight: "normal"
  }
  return (<h1 style={styles}>{props.text}</h1>)
}
