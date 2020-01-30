import React from 'react';
import API from './API.js';
import './App.css';
import { useHistory, BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import LoginForm from './MainComponents/LoginForm';
import AthleteHompage from './MainComponents/AthleteHompage.js';
import GuestHompage from './MainComponents/GuestHomepage.js';
import CoachHompage from './MainComponents/CoachHomepage.js';
import Navbar from './MainComponents/Navbar.js';


class App extends React.Component {

  state = {
    user: null,
    loginError: false,
    homepage: "guest"
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
    this.setState({user: user, homepage: user.account_type})
  }

   logout = () => {
    this.setState({user: undefined})
    API.clearToken();
    this.setState({homepage: "guest"})
  }


  render(){
    return (
      <>
      <Switch>
        <Route exact path = '/'> 
          <Navbar logout={this.logout} user={this.state.user}/>
          {this.state.homepage === "guest"?
           <GuestHompage/>
           :
           undefined
          }
          {this.state.homepage === "athlete"?
           <AthleteHompage user={this.state.user}/>
           :
           undefined
          }
          {this.state.homepage === "coach"?
           <CoachHompage/>
           :
           undefined
          }
        </Route>
        <Route exact path = '/login'>
            <LoginForm onSuccess={this.setUser} setError = {this.state.loginError} handleLogin = {this.setUser} user = {this.state.user}/>
        </Route>
      </Switch>
      </>
    );
  }
}

export default App;
