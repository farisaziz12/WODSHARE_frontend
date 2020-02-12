import React, { Component } from 'react';
import { Message } from 'semantic-ui-react'
import './AssignWorkout.css'

class AssignWorkoutForm extends Component {
    state = { 
        success: false, 
        name: null, 
        wod_type: null, 
        category: null, 
        date: null, 
        workout: null,
        athlete: this.props.athleteID
    
     }


     handleChange = e => {
        this.setState({
           [e.target.name]: e.target.value
        })
     }

     handleTypeChange = (e) => {
           this.setState({wod_type: e.target.value})
        
    }

    handleCategoryChange = (e) => {
        this.setState({category: e.target.value})
    }

    handleSubmit = () => {
        const { name, wod_type, category, date, workout, athlete } = this.state
        fetch('https://wodshare.herokuapp.com/workouts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                workout: {
                    name: name, 
                    wod_type: wod_type, 
                    category: category,
                    date: date,
                    workout: workout, 
                    athlete_id: athlete, 
                    coach_id: this.props.coachID
                }
            })
        }).then(this.setState({success:true, name: "", wod_type: "", date: "", category: "", workout: ""}))
    }


    render() {
        const { name, wod_type, category, date, workout } = this.state
        return (
            <>
            <h1>Assign {this.props.athleteName} a Workout</h1>
                <div class="blackboard">
                        <div class="workout-form">
                                <p className='p'>
                                        <label className='label' >Name: </label>
                                        <input className='input' placeholder="Fran" type = "text" name = "name" value = {name} onChange = {this.handleChange}></input>
                                </p>
                                <p className='p'>
                                        <label className='label' >Category: </label>
                                        <select className="select-txt" onChange={this.handleCategoryChange} placeholder='Gymnastics' id="category" name="category" form="category">
                                            <option value="Gymnastics">Gymnastics</option>
                                            <option value="Metabolic Conditioning">Metabolic Conditioning</option>
                                            <option value="Weightlifting">Weightlifting</option>
                                            <option value="Powerlifting">Powerlifting</option>
                                            <option value="Strength">Strength</option>
                                        </select>
                                </p>
                                <p className='p'>
                                        <label className='label' >Type: </label>
                                        <select className="select-txt" onChange={this.handleTypeChange} placeholder='Couplet' id="type" name="type" form="type">
                                            <option value="Couplet">Couplet</option>
                                            <option value="Triplet">Triplet</option>
                                            <option value="Chipper">Chipper</option>
                                            <option value="Hypertrophy">Hypertrophy</option>
                                            <option value="Muscular Endurance">Muscular Endurance</option>
                                        </select>
                                </p>
                                <p className='p'>
                                        <label className='label' >Date: </label>
                                        <input className='input' onChange = {this.handleChange} name='date' type="date" />
                                </p>
                                <p className='p'>
                                        <label className='label' >Workout: </label>
                                        <textarea className='textarea' name='workout' onChange = {this.handleChange}></textarea>
                                </p>
                                <p class="wipeout">
                                        <input className='input' onClick={this.handleSubmit} type="submit" value="Create Workout ->" />
                                </p>
                        </div>
                </div>
                {this.state.success?
                            <Message
                                success
                                header='Workout created'
                                content="Your athlete is all set to tackle this workout!"
                            />
                            :
                            undefined
                        }
            </>
        );
    }
}

export default AssignWorkoutForm;
       