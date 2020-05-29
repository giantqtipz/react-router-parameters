import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route, HashRouter, Redirect } from 'react-router-dom';
import App from '../src/index';

class Companies extends Component {
  render() {
    const { companies } = this.props;
    //console.log(companies);
    return (
      <div>
        <ul>
          {companies.map((company) => {
            return (
              <li>
                <Link to={`/companies/${company.id}`}>
                  {company.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Companies;
