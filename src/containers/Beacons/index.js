// src/components/About/index.js
import React, { Component } from 'react';
import classnames from 'classnames';
import Row from '../Row.js';
import ContentContainer from "../Content";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentEdit from 'material-ui/svg-icons/content/create';
import Divider from 'material-ui/Divider';

export default class Beacons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.toggleBeacon = this.toggleBeacon.bind(this);
  }

  componentDidMount() {
    fetch("/api/beacons")
      .then(res => res.json())
      .then(json => {
        this.setState({data: json});
      })
      .catch(res => {
        console.log(res);
      })
  }

  toggleBeacon(beaconId, status) {
    fetch(`/api/beacons/${beaconId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "disabled": status
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({data: json})
      })
      .catch(res => {
        console.log(res);
      })
  }

  render() {
    const actionStyles = {
      position:"absolute",
      right: "-28px",
      top: "-47px"
    }
    return (
      <ContentContainer title="My phyIds">
        <div style={{position:"relative", marginTop: "28px"}}>
          <FloatingActionButton style={actionStyles} backgroundColor="#6c9e41">
            <ContentEdit />
          </FloatingActionButton>
          <Divider />
          {this.state.data.length > 0 &&
            <Row rows={this.state.data} toggleBeacon={this.toggleBeacon}/>
          }
        </div>
      </ContentContainer>
    );
  }
}
