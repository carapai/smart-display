import React, { Component } from 'react';
import './App.css';
import HeaderBar from '@dhis2/ui/widgets/HeaderBar';

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
          <HeaderBar  appName={'DHIS2 Smart Display'} />
    );
  }
}

export default App;
