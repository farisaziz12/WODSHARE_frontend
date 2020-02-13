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
                    <h3 className="prevwod-card-content">Score: {score}</h3>
                    <h2 className="prevwod-card-content">Category: {category}</h2>
                    <h2 className="prevwod-card-content">Workout: </h2>
                    {workout.split('\n').map(element => {
                        return <h4 className="prevwod-card-content">{element}</h4>
                    })}
                    </div>
                </div>
            </>
        );
    }
}

export default PrevWOD;
