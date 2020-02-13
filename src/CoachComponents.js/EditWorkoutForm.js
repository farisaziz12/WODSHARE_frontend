import React, { Component } from 'react';
import {  Grid, Form, Message, Select, Button} from 'semantic-ui-react'
import './AssignWorkout.css'

class EditWorkoutForm extends Component {
    state = { 
        success: false, 
        name: this.props.name, 
        wod_type: this.props.wod_type, 
        category: this.props.category, 
        date: this.props.date, 
        workout: this.props.workout,
        athlete: this.props.athleteID,
        done: false
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
        const { name, wod_type, category, date, workout } = this.state
        fetch(`https://wodshare.herokuapp.com/${this.props.id}`, {
            method: "PATCH",
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
                    coach_id: this.props.coachID
                }
            })
        }).then(this.setState({success:true, done: true}))

    }
    render() {
            const { name, wod_type, category, date, workout } = this.state
            return (
                <>
                <div class="blackboard">
                        <div class="form">
                                <p>
                                        <label>Name: </label>
                                        <input className='input' placeholder="Fran" type = "text" name = "name" value = {name} onChange = {this.handleChange}></input>
                                </p>
                                <p>
                                        <label>Category: </label>
                                        <select className="select-txt" value={category} onChange={this.handleCategoryChange} id="category" name="category" form="category">
                                            <option value="Gymnastics">Gymnastics</option>
                                            <option value="Metabolic Conditioning">Metabolic Conditioning</option>
                                            <option value="Weightlifting">Weightlifting</option>
                                            <option value="Powerlifting">Powerlifting</option>
                                            <option value="Strength">Strength</option>
                                        </select>
                                </p>
                                <p>
                                        <label>Type: </label>
                                        <select className="select-txt" onChange={this.handleTypeChange} value={wod_type} id="type" name="type" form="type">
                                            <option value="Couplet">Couplet</option>
                                            <option value="Triplet">Triplet</option>
                                            <option value="Chipper">Chipper</option>
                                            <option value="Hypertrophy">Hypertrophy</option>
                                            <option value="Muscular Endurance">Muscular Endurance</option>
                                        </select>
                                </p>
                                <p>
                                        <label>Date: </label>
                                        <input className='input' onChange = {this.handleChange} value={date} name='date' type="date" />
                                </p>
                                <p>
                                        <label>Workout: </label>
                                        <textarea className='textarea' name='workout' value={workout} onChange = {this.handleChange}></textarea>
                                </p>
                                <p class="wipeout">
                                        <input className='input' onClick={this.handleSubmit} type="submit" value="Edit Workout ->" />
                                </p>
                        </div>
                </div>
                {this.state.success?
                            <Message
                                success
                                header='Workout Edited'
                                content="Athlete can now see the updated workout"
                            />
                            :
                            undefined
                }
                </>
            );
        }
}

export default EditWorkoutForm;