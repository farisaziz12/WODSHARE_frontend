import React, { Component } from 'react';
import '../Profile.css'
import PopUpCoachConnect from './PopUpCoachConnect';
import API from '../API';
import { Redirect } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

class AthleteProfile extends Component {
    state = { 
        displayForm: false, 
        deleteSuccess: false
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

    render() {
        return (
            <> <br/><br/>
                <div class="wrapper">

  
                <div class="profile-card js-profile-card">
                <div class="profile-card__img">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bluedroplearningnetworks.com%2FProfile-Pic-Placeholder.png&f=1&nofb=1" alt="profile card"/>
                </div>

                <div class="profile-card__cnt js-profile-cnt">
                    <div class="profile-text profile-card__name">{this.props.first_name + " " + this.props.last_name}</div>
                    <div class=" profile-text profile-card__txt"><strong>Email: </strong>{this.props.email}</div>
                    <div class=" profile-text profile-card-loc">

                    <span class=" profile-text profile-card-loc__txt">
                         {this.props.coach_name? "Coach: " + this.props.coach_name + " " + this.props.coach_last_name
                        
                        : 
                        
                        <button onClick={this.handleShowForm} class="profile-card__button button--orange">Connect Coach</button>
                        
                        } 
                    </span>
                    </div>

                    <div class="profile-card-inf">
                    <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title profile-text">1598</div>
                        <div class="profile-card-inf__txt profile-text">Followers</div>
                    </div>

                    <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title profile-text">65</div>
                        <div class="profile-card-inf__txt profile-text">Following</div>
                    </div>

                    <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title profile-text">123</div>
                        <div class="profile-card-inf__txt profile-text">Articles</div>
                    </div>

                    <div class="profile-card-inf__item">
                        <div class="profile-card-inf__title profile-text">85</div>
                        <div class="profile-card-inf__txt profile-text">Works</div>
                    </div>
                    </div>

                    <div class="profile-card-ctr">
                    <button onClick={this.handleDelete} class="profile-card__button button--blue js-message-btn">Delete Account</button>
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
                {this.state.displayForm? <PopUpCoachConnect athleteID={this.props.id} handleClick={this.handleShowForm} /> : undefined} 
                
            </>
        );
    }
}

export default AthleteProfile;