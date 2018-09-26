import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

//Auth
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

// hoc
import Layout from '../hoc/Layout';

// Component
import Home from '../components/Home';

export default class extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    );
  }
}
