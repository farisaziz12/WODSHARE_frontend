import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './WOD.css'
import PopUpScoreSubmit from './PopUpScoreSubmit';

class WOD extends Component {
    state = { 
        displayForm: false
     }

     handleClick = () => {
         this.setState({
             displayForm: !this.state.displayForm
         })
     }
    render() {
        const { id, name, workout, category, score } = this.props.workout
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
                        <h4 className="wodtxt">Score: {score}</h4>
                    </div>
                    </div>
                </div>
                <Button onClick={this.handleClick}>Submit Score</Button>
                    {this.state.displayForm? <PopUpScoreSubmit WODID={id} handleClick={this.handleClick}/> : undefined} 
            </>
        );
    }
}

export default WOD;