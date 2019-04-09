import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import D2UIApp from '@dhis2/d2-ui-app';
import HeaderBar from '@dhis2/d2-ui-header-bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      d2: props.d2,
    };
  }

  getChildContext() {
    return {d2: this.state.d2};
  }

  render() {
    const {d2, baseUrl} = this.props;
    return (
        <D2UIApp>
          <HeaderBar d2={d2} className="app-header" />
        </D2UIApp>
    );
  }
}

export default App;
