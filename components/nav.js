import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route, HashRouter, Redirect } from 'react-router-dom';
import App from '../src/index';

class Nav extends Component {
    render(){
        return (
            <nav>
                <a href='/#/home'>Home</a>
                <a href='/#/companies'>Companies</a>
            </nav>
        )

    }
}

export default Nav;