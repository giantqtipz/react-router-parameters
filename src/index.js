import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Link, Route, HashRouter, Redirect } from 'react-router-dom';
import Home from '../components/home';
import Nav from '../components/nav';
import Companies from '../components/companies';
import Profits from '../components/profits'

const APP_STARTUP_TIME = 'app_startup_time';

console.time(APP_STARTUP_TIME);

class App extends Component {
  state = { companies: [] };

  componentDidMount() {
    fetch('https://acme-users-api-rev.herokuapp.com/api/companies')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ companies: data });
      });
  }

  render(props) {
    return (
      <HashRouter>
        <Nav />
        <Switch>
          {/* <Route path={'/products'} render={() => <Products products={products}/>} /> */}
          <Route path="/home" exact render={() => <Home />} />
          <Route
            path="/companies/:id"
            render={(props) =>
              <div>
                <Companies companies = {this.state.companies} {...props}/>
                <Profits {...props}/>
              </div>
            }
          />
          <Route
            path="/companies"
            render={() => <Companies companies={this.state.companies} />}
          />
          {/* <Redirect to="/" /> */}
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'), () => {
  console.timeEnd(APP_STARTUP_TIME);
});

export default App;
