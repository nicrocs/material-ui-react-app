import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import { muiTheme, linkStyle } from '../constants';
import batteryFull from '../assets/battery_full.png';
import batteryHalf from '../assets/battery_half.png';
import batteryEmpty from '../assets/battery_empty.png';
import batteryCharging from '../assets/battery_charging.png';

export default class Row extends Component {
  constructor(props) {
    super(props)

    this.battery = this.battery.bind(this)
    this.toolbarGroupStyles = this.toolbarGroupStyles.bind(this);
    this.toggleOffStyles = this.toggleOffStyles.bind(this);
    this.toggleOnStyles = this.toggleOnStyles.bind(this);
  }

  battery(batteryLevel) {
    switch (true) {
      case batteryLevel === 1:
        return batteryCharing;
      case batteryLevel > .75:
        return batteryFull;
      case batteryLevel > .33:
        return batteryHalf;
      default:
        return batteryEmpty;
    }
  }

  toolbarGroupStyles(grow) {
    return {
      display: "block",
      flexGrow: grow || 1,
      flexBasis: 0,
    }
  }

  toggleOffStyles() {
    return {
      display:"inline-block",
      verticalAlign:"middle",
      color: !this.props.beacon.disabled ? muiTheme.palette.accent3Color : muiTheme.palette.accent1Color
    }
  }

  toggleOnStyles() {
    return {
      color: this.props.beacon.disabled ? muiTheme.palette.accent3Color : muiTheme.palette.accent1Color
    }
  }

  render() {

    const { beacon, toggleBeacon } = this.props

    const ToolbarStyles = {
      backgroundColor: "#fff",
      height: "86px",
      padding: "20px 24px",
      justifyContent: "flex-start",
    }
    return (
      <div>
        <Toolbar style={ToolbarStyles}>
          <ToolbarGroup firstChild={true}>
            <Checkbox />
          </ToolbarGroup>
          <ToolbarGroup style={this.toolbarGroupStyles()}>
            <div style={this.toggleOffStyles()}>OFF</div>
            <Toggle
              label="ON"
              labelPosition="right"
              style={{
                display:"inline-block",
                verticalAlign:"middle",
                marginLeft:"10px",
                width: "auto",
              }}
              onToggle={() => toggleBeacon(beacon._id, beacon.disabled)}
              toggled={!beacon.disabled}
              labelStyle={this.toggleOnStyles()}
            />
          </ToolbarGroup>
          <ToolbarGroup style={this.toolbarGroupStyles()}>
            <a href="#" style={linkStyle}>{beacon._id}</a>
          </ToolbarGroup>
          <ToolbarGroup style={this.toolbarGroupStyles(5)}>
            <div>{beacon.name}</div>
            <div style={{color: muiTheme.palette.accent3Color}}>{beacon.redirectUrl}</div>
          </ToolbarGroup>
          <ToolbarGroup style={{display:"block"}}>
            <img src={this.battery(beacon.batteryLevel)} />
          </ToolbarGroup>
        </Toolbar>
        <Divider />
      </div>
    )
  }
}
