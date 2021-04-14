import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
function Link() {
        return (
        <div className="App">
            <Router>
                <App/>
            </Router>
        </div>
        )
    }
export default  Link;