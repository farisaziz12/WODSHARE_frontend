import React from 'react';
import API from './API.js';
import './App.css';
import { useHistory, BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import LoginForm from './MainComponents/LoginForm';
import AthleteHompage from './MainComponents/AthleteHompage.js';
import GuestHompage from './MainComponents/GuestHomepage.js';
import CoachHompage from './MainComponents/CoachHomepage.js';
import Navbar from './MainComponents/Navbar.js';
import MovementBank from './MainComponents/MovementBank.js';
import AthleteProfile from './AthleteComponents.js/AthleteProfile.js';
import CoachProfile from './CoachComponents.js/CoachProfile.js';
import AthleteShowPage from './CoachComponents.js/AthleteShowPage.js';
import Error404 from './MainComponents/Error404.js';
import WODGenerator from './AthleteComponents.js/WODGenerator.js';


class App extends React.Component {

  state = {
    user: null,
    loginError: false,
    homepage: "guest",
    coach: {
      showAthlete: null
    }
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

  onDelete = () => {
    this.setState({homepage: "guest"})
  }

   logout = () => {
    this.setState({user: undefined})
    API.clearToken();
    this.setState({homepage: "guest"})
  }

  handleShowAthlete = athlete => {
    this.setState({
      coach: {
        showAthlete: athlete
      }
    })
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
           <CoachHompage handleShowAthlete={this.handleShowAthlete} user={this.state.user}/>
           :
           undefined
          }
        </Route>
        <Route exact path = '/login'>
            <LoginForm onSuccess={this.setUser} setError = {this.state.loginError} handleLogin = {this.setUser} user = {this.state.user}/>
        </Route>
        <Route exact path = '/movements'>
          <Navbar logout={this.logout} user={this.state.user}/>
           <MovementBank/>
        </Route>
        <Route exact path = '/profile'>
          <Navbar logout={this.logout} user={this.state.user}/>
          {!this.state.user&&
           <Redirect to='/login'/>
          }
          {this.state.user&&
          this.state.user.account_type === "coach"&&
            <CoachProfile onDelete={this.onDelete} {...this.state.user}/>
          }
          {this.state.user&&
          this.state.user.account_type === "athlete"&&
            <AthleteProfile onDelete={this.onDelete} {...this.state.user}/>
          }
        </Route>
        <Route exact path = "/show/athlete">
          <Navbar logout={this.logout} user={this.state.user}/>
          {this.state.user&&
            this.state.user.account_type === "coach"&&
              this.state.coach.showAthlete? <AthleteShowPage coach={this.state.user} {...this.state.coach.showAthlete}/> : <Error404/>
          }
        </Route>
        <Route exact path = "/wod/generator">
          <Navbar logout={this.logout} user={this.state.user}/>
          {this.state.user&&
            this.state.user.account_type === "athlete"&&
              <WODGenerator {...this.state.user}/>
          }
        </Route>
        <Route path = "/">
            <Error404/>
        </Route>
      </Switch>
      </>
    );
  }
}

export default App;
