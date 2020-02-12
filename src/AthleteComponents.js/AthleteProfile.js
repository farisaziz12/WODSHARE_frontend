import React, { Component } from 'react';
import '../Profile.css'
import PopUpCoachConnect from './PopUpCoachConnect';
import API from '../API';
import { Redirect } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

class AthleteProfile extends Component {
    state = { 
        displayForm: false, 
        deleteSuccess: false,
        coach: this.props.coach_name? true : false, 
        removeMessage: false, 
        connectSuccess: false
     }


     handleShowForm = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
     }

     handleDelete = () => {
        API.deleteAthleteAccount(this.props.id)
        this.setState({deleteSuccess: true})
        setTimeout(this.props.onDelete, 0)
        API.clearToken()
     }

     deleteCoachConnection = () => {
        fetch(`https://wodshare.herokuapp.com/athletes/removecoach/${this.props.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(this.setState({coach: false, removeMessage: true})).then(setTimeout(() => {this.setState({removeMessage: false})}, 3000))
     }

     handleSuccess = () => { 
         this.setState({connectSuccess: true, displayForm: false, coach: true})
        setTimeout(() => {this.setState({connectSuccess: false})}, 3000)
     }

    render() {
        return (
            <> <br/><br/>
                <div className="wrapper">

  
                <div className="profile-card js-profile-card">
                <div className="profile-card__img">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bluedroplearningnetworks.com%2FProfile-Pic-Placeholder.png&f=1&nofb=1" alt="profile card"/>
                </div>

                <div className="profile-card__cnt js-profile-cnt">
                    <div className="profile-text profile-card__name">{this.props.first_name + " " + this.props.last_name}</div>
                    <div className=" profile-text profile-card__txt"><strong>Email: </strong>{this.props.email}</div>
                    <div className=" profile-text profile-card-loc">

                    <span className=" profile-text profile-card-loc__txt">
                         {this.props.coach_name && this.state.coach? "Coach: " + this.props.coach_name + " " + this.props.coach_last_name : undefined}
                        
                        {!this.state.coach&&
                        
                        <button onClick={this.handleShowForm} className="profile-card__button button--orange">Connect Coach</button>
                        
                        }
                    </span>
                    </div>
                    {this.state.coach&&
                    <button onClick={this.deleteCoachConnection} className="profile-card__button button--orange">Disconnect Coach</button>
                    }
                    {this.state.removeMessage&&
                    <Message
                        success
                        header='Coach Removed'
                        content="You can now connect a new one!"
                    />
                    }
                    {this.state.connectSuccess&&
                    <Message
                        success
                        header='Coach Connected'
                        content="Your coach can now see you and assign workouts!"
                    />
                    }
                    {/* <div className="profile-card-inf">
                    <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title profile-text">04.12.2000</div>
                        <div className="profile-card-inf__txt profile-text">Date of Birth</div>
                    </div>
                    </div> */}

                    
{/* 
                    <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title profile-text">65</div>
                        <div className="profile-card-inf__txt profile-text">Following</div>
                    </div>

                    <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title profile-text">123</div>
                        <div className="profile-card-inf__txt profile-text">Articles</div>
                    </div>

                    <div className="profile-card-inf__item">
                        <div className="profile-card-inf__title profile-text">85</div>
                        <div className="profile-card-inf__txt profile-text">Works</div>
                    </div>
                     } */}

                    <div className="profile-card-ctr">
                    <button onClick={this.handleDelete} className="profile-card__button button--blue js-message-btn">Delete Account</button>
                    </div>
                    {this.state.deleteSuccess&&
                    <Message
                        warning
                        header='Account deleted'
                        content="Goodbye!"
                    />
                }
                </div>

                </div>

                </div>
                {this.state.displayForm? <PopUpCoachConnect handleSuccess={this.handleSuccess} athleteID={this.props.id} handleClick={this.handleShowForm} /> : undefined} 
                
            </>
        );
    }
}

export default AthleteProfile;