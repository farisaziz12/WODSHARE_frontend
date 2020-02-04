import React, { Component } from 'react';
import './PrevWOD.css'

class PrevWOD extends Component {
    render() {
        const { name, workout, category, score } = this.props.workout
        return (
            <>
                <div className="prevwod-card">
                    <h2 className="prevwod-title">"{name}"</h2>
                    <div className="prevwod-bar">
                    <h4 className="card-content">Score :{score}</h4>
                    <h3 className="card-content">Category: {category}</h3>
                    <h3 className="card-content">Workout: </h3>
                    {workout.split('\n').map(element => {
                        return <h4 className="card-content">{element}</h4>
                    })}
                    </div>
                </div>
            </>
        );
    }
}

export default PrevWOD;
