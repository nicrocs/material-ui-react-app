import React, { Component } from 'react';
import Menu from '../Menu.js';
import Header from '../Header.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen : true
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render() {
    return (
      <div className="App">
        <Menu menuOpen={this.state.menuOpen} toggleMenu={this.toggleMenu}/>
        <Header toggleMenu={this.toggleMenu}/>
        {this.props.children}
      </div>
    );
  }

}
