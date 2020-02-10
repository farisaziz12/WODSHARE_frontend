import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './WOD.css'
import PopUpScoreSubmit from './PopUpScoreSubmit';

class WOD extends Component {
    state = { 
        displayForm: false, 
        score: this.props.workout.score
     }

     handleClick = () => {
         this.setState({
             displayForm: !this.state.displayForm
         })
     }

     handleScoreChange = score => {
         this.setState({score, displayForm: false})
     }
    render() {
        const { id, name, workout, category } = this.props.workout
        return (
            <>
                <div className="shade">
                    <div className="blackboard">
                        <div className="wod">
                        <h2 className="wodtxt">"{name}"</h2>
                        <h3 className="wodtxt">Category: {category}</h3>
                        {workout.split('\n').map(element => {
                            return <h4 className="wodtxt">{element}</h4>
                        })}
                        <h4 className="wodtxt">Score: {this.state.score}</h4>
                    </div>
                    </div>
                </div>
                <Button onClick={this.handleClick}>Submit Score</Button>
                    {this.state.displayForm? <PopUpScoreSubmit handleScoreChange={this.handleScoreChange} WODID={id} handleClick={this.handleClick}/> : undefined} 
            </>
        );
    }
}

export default WOD;