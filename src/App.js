import React, {Component} from 'react';
import './App.css';
import HeaderBar from '@dhis2/ui/widgets/HeaderBar';

class App extends Component {

    render() {
        return (
            <HeaderBar appName={'DHIS2 Smart Display'}/>
        );
    }
}

export default App;
