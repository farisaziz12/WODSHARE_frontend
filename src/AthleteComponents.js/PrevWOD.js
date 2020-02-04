import React, { Component } from 'react';
import './PrevWOD.css'

class PrevWOD extends Component {
    render() {
        const { name, workout, category, score, date } = this.props.workout
        const formatedDate = date.split("-")
        const reformatedDate = formatedDate[0].split("") 
        const cfFormatDate = reformatedDate[2] + reformatedDate[3] + formatedDate[1] + formatedDate[2]
        return (
            <>
                <div className="prevwod-card">
                    <h2 className="prevwod-title">"{name}"</h2>
                    <h3 className="prevwod-date"><i>{cfFormatDate}</i></h3>
                    <div className="prevwod-bar">
                    <h4 className="card-content">Score: {score}</h4>
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
