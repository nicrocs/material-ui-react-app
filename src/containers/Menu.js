import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import beaconsIcon from '../assets/Beacons.png';
import destinationsIcon from '../assets/Destinations.png';
import phyIdIcon from '../assets/phyId.png';
import campaignIcon from '../assets/Campaign.png';
import securityIcon from '../assets/Security.png';
import installNotesIcon from '../assets/InstallNotes.png';
import eventsIcon from '../assets/Events.png';
import metricsIcon from '../assets/Metrics.png';
import addIcon from '../assets/add.png';
import Avatar from 'material-ui/Avatar';
import NavLink from '../components/NavLink';
import Logo from '../components/Logo';
import navOpenClose from '../assets/navOpenClose.png';


export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const listItemStyles = {
      paddingLeft:"46px",
    }
    const linkStyles = {
      display:"block",
    }
    const avatarStyles = {
      borderRadius: "0",
      top: "18px",
    }
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Drawer
          open={this.props.menuOpen}
          containerStyle={{overflow: "visible"}}
        >
          <div
            style={{
              display: this.props.menuOpen ? "block" : "none",
              position:"absolute",
              right:"-24px",
              top:"48px",
              backgroundImage: `url(${navOpenClose})`,
              width:"48px",
              height:"48px",
              cursor: "pointer",
            }}
            onClick={this.props.toggleMenu}/>
          <Logo />
          <List>
            <ListItem primaryText="Beacons"
              innerDivStyle={listItemStyles}
              leftAvatar={
                <Avatar
                  src={beaconsIcon}
                  size={16}
                  backgroundColor="transparent"
                  style={avatarStyles}
                />
              }
              initiallyOpen={true}
              autoGenerateNestedIndicator={false}
              nestedItems={[
                <NavLink to="/beacons" style={linkStyles}>
                  <ListItem primaryText="Destinations"
                    innerDivStyle={listItemStyles}
                    leftAvatar={
                      <Avatar
                        src={destinationsIcon}
                        size={16}
                        backgroundColor="transparent"
                        style={avatarStyles}
                      />
                    }
                  />
                </NavLink>,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="phyId"
                  leftAvatar={
                    <Avatar
                      src={phyIdIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Campaign"
                  leftAvatar={
                    <Avatar
                      src={campaignIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Security"
                  leftAvatar={
                    <Avatar
                      src={securityIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Install Notes"
                  leftAvatar={
                    <Avatar
                      src={installNotesIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Events"
                  leftAvatar={
                    <Avatar
                      src={eventsIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Metrics"
                  leftAvatar={
                    <Avatar
                      src={metricsIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />,
                <ListItem
                  innerDivStyle={listItemStyles}
                  primaryText="Add Beacons"
                  leftAvatar={
                    <Avatar
                      src={addIcon}
                      size={16}
                      backgroundColor="transparent"
                      style={avatarStyles}
                    />
                  }
                />
              ]}
            />
          </List>
        </Drawer>
      </MuiThemeProvider>
    )
  }
}
