import React, { Component } from 'react';
import { Image, Reveal } from 'semantic-ui-react'
import './WOD.css'

class WOD extends Component {
    state = {  }
    render() {
        const { name, workout, category, score } = this.props.workout
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
            </>
        );
    }
}

export default WOD;