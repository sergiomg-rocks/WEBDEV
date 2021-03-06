import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Mapa from './components/Mapa';


class App extends Component {
    
    constructor() {
        super();

        this.state = {
            title: 'React Leaflet',
        };
     }


    render() {
        console.log(this.state.rutes);
        return (
            <div>
                <Header title={this.state.title} />
                <div>
                    <Mapa lat="39.571359" lng="2.970117" zoom="10" />
                </div>
            </div>
        );
    }
}

export default App;
