import React from 'react';
import H1 from '../components/H1';
import Search from '../components/Search.js';
import Sort from '../components/Sort.js';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const containerStyles = {
  paddingTop: "64px",
  minHeight: "400px",
  paddingLeft: "256px",
}
const contentStyles = {
  margin: "48px 72px"
}

export default function ContentContainer (props) {
  return (
    <div style={containerStyles}>
      <div style={contentStyles}>
        <H1 text={props.title} />
        <Toolbar style={{backgroundColor:"white"}}>
          <ToolbarGroup firstChild={true}>
            <Sort />
          </ToolbarGroup>
          <ToolbarGroup>
            <Search />
          </ToolbarGroup>
        </Toolbar>
        {props.children}
      </div>
    </div>
  )
}
