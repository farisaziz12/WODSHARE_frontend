import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './AthleteCard.css'


class AthleteCard extends Component {

    // DOB = (user) => {
    //     let dob = '19800810';
    //     let year = Number(dob.substr(0, 4));
    //     let month = Number(dob.substr(4, 2)) - 1;
    //     let day = Number(dob.substr(6, 2));
    //     let today = new Date();
    //     let age = today.getFullYear() - year;
    //     if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    //     age--;
    //     }
    // }
    render() {
        const { first_name, last_name, id, email } = this.props
        return (
            <>
             <div  className="athlete-container">
                <div  className="athlete-card">
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bluedroplearningnetworks.com%2FProfile-Pic-Placeholder.png&f=1&nofb=1" alt="Chyno Deluxe"/>
                    <h1 className='athlete-h1'>{first_name + " " + last_name}</h1>
                    <h2>Age: </h2>
                    <button onClick={() => this.props.handleAthlete(id)} className="athlete-button" >+ Assign Workout</button>
                    <Link exact to='/show/athlete'><button className="athlete-button-2" onClick={() => this.props.handleAthleteShow(id)}>+ More</button></Link>
                </div>
            </div>
            </>
        );
    }
}

export default AthleteCard;
            // <Card>
            //     <Card.Content>
            //         <Card.Header>{first_name + " " + last_name}</Card.Header>
            //         <Card.Meta>Age: </Card.Meta>
            //         <Card.Description>
            //         Date of last workout assigned: 
            //         </Card.Description>
            //     </Card.Content>
            //     <Card.Content extra>
            //         <div className='ui two buttons'>
            //         <Button onClick={() => this.props.handleAthlete(id)} basic color='green'>
            //             Assign Workout
            //         </Button>
            //         <Button basic color='red' >
            //             <a href={`mailto:${email}`}>Contact</a>
            //         </Button>
            //         </div> <br/><br/>
            //         <Link exact to='/show/athlete'><Button onClick={() => this.props.handleAthleteShow(id)}>More</Button></Link>
            //     </Card.Content>
            // </Card>