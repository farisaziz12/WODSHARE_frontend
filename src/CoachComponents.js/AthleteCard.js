import React, { Component } from 'react';
import { Button, Card } from 'semantic-ui-react'

class AthleteCard extends Component {

    render() {
        const { first_name, last_name, id } = this.props
        return (
            <Card>
                <Card.Content>
                    <Card.Header>{first_name + " " + last_name}</Card.Header>
                    <Card.Meta>Age: </Card.Meta>
                    <Card.Description>
                    Date of last workout assigned: 
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button onClick={() => this.props.handleAthlete(id)} basic color='green'>
                        Assign Workout
                    </Button>
                    <Button basic color='red'>
                        Contact
                    </Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }
}

export default AthleteCard;