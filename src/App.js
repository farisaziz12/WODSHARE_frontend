import React from 'react';
import API from './API.js';
import './App.css';
import { useHistory, BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import LoginForm from './MainComponents/LoginForm';
import Hompage from './MainComponents/Hompage.js';


class App extends React.Component {

  state = {
    user: undefined,
    loginError: false
  }

  componentDidMount(){
    if (API.hasToken()) {
      API.validate().then(this.setUser)
        .then(() => this.setState({loginError: false}))
    } else {
      this.setState({loginError: true})
    }
  }

  setUser = (user) => {
    this.setState({user: user})
  }

   logout = () => {
    this.setState({user: undefined})
    API.clearToken();
  }


  render(){
    return (
      <>
      <Switch>
        <Route path = '/login'>
            <LoginForm onSuccess={this.setUser} setError = {this.state.loginError} handleLogin = {this.setUser} user = {this.state.user}/>
        </Route>
        <Route exact path = '/'> 
          <Hompage/>
        </Route>
      </Switch>
      </>
    );
  }
}

export default App;
