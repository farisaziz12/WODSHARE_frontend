import React, { Component } from 'react';
import {  Grid, Form, Message, Select, Button} from 'semantic-ui-react'

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

     handleTypeChange = (e, {value}) => {
           this.setState({wod_type: value})
        
    }

    handleCategoryChange = (e, {value}) => {
        this.setState({category: value})
    }

    handleSubmit = () => {
        const { name, wod_type, category, date, workout, athlete } = this.state
        fetch('http://localhost:3000/workouts', {
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
        const categoryOptions = [
        { key: 'g', text: 'Gymnastics', value: 'Gymnastics' },
        { key: 'm', text: 'Metabolic Conditioning', value: 'Metabolic Conditioning' },
        { key: 'w', text: 'Weightlifting', value: 'Weightlifting' },
        {key: 'p', text: 'Powerlifting', value: 'Powerlifting' },
        {key: 's', text: 'Strength', value: 'Strength' }]

        const typeOptions = [
            { key: 'c', text: 'Couplet', value: 'Couplet' },
            { key: 'ch', text: 'Chipper', value: 'Chipper' },
            { key: 't', text: 'Triplet', value: 'Triplet' },
            {key: 'h', text: 'Hypertrophy', value: 'Hypertrophy' },
            {key: 'm', text: 'Muscular Endurance', value: 'Muscular Endurance' }]
        const { name, wod_type, category, date, workout } = this.state
        return (
            <Grid>
                <Grid.Row centered>
                    <Grid.Column width={6}>
                        <Form size={"small"} onSubmit={this.handleSubmit} success>
                            <h1>Assign {this.props.athleteName} a Workout</h1>
                            <Form.Field >
                                <label>Name</label>
                                <input placeholder="Fran" type = "text" name = "name" value = {name} onChange = {this.handleChange}></input>
                            </Form.Field>
                            <Form.Select onChange={this.handleCategoryChange} required  name='category' fluid label='Category' placeholder='Gymnastics' options={categoryOptions} value={category} />
                            
                            <Form.Select onChange={this.handleTypeChange} required name='type' fluid label='Type' placeholder='Couplet' options={typeOptions} value={wod_type} />
                            
                            <Form.Field required>
                                <label>Date</label>
                                <input type = "date" name = "date" value = {date} onChange = {this.handleChange}></input>
                            </Form.Field>
                            <Form.TextArea required label='Workout' name = "workout" value = {workout} onChange = {this.handleChange}/>
                        {this.state.success?
                            <Message
                                success
                                header='Workout created'
                                content="Your athlete is all set to tackle this workout!"
                            />
                            :
                            undefined
                        }
                            <Button onSubmit={this.handleSubmit} type='submit'>Create Workout</Button>
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        );
    }
}

export default AssignWorkoutForm;