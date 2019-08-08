import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class Layout extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="Layout">
        <header className="layout-header">
          <h1>Flashcards</h1>
          <p>Inspired by Anki</p>
        </header>
        <main className="layout-main">{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
