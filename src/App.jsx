import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Purdue Trap and Skeet Club</h1>
                    </header>
                </div>
                <Main />
            </React.Fragment>
        );
    }
}

export default App;
