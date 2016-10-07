import React, {Component} from 'react';
import RowItem from '../components/row';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';

export default function Row (props) {
  return (
    <div>
      {props.rows.map((row, i) =>
        (
          <RowItem
            beacon={row}
            key={i}
            toggleBeacon={props.toggleBeacon}
          />
        )
      )}
    </div>
  );
}
