import React, { Component } from 'react';
import './Benchmarks.css'
import { Button, Form } from 'semantic-ui-react'



class Benchmarks extends Component {
    
    state = {
        updateModeOn: false, 
        deadlift: this.props.deadlift, 
        strict_press: this.props.strict_press, 
        clean_and_jerk: this.props.clean_and_jerk, 
        backsquat: this.props.backsquat, 
        snatch: this.props.snatch
    }
    
    toggleUpdateMode = () => {
        this.setState({
            updateModeOn: !this.state.updateModeOn
        })
    }
    
    handleInputChange = e => {
        this.setState({ [e.target.name]: parseInt(e.target.value)})
    }

    handleNewBenchmarksSubmit = () => {
        const { deadlift, strict_press, clean_and_jerk, backsquat, snatch } = this.state
        fetch(`https://wodshare.herokuapp.com/athletes/${this.props.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                athlete: {
                    deadlift: deadlift, 
                    strict_press: strict_press, 
                    clean_and_jerk: clean_and_jerk,
                    backsquat: backsquat, 
                    snatch: snatch
                }
            })
        }).then(this.setState({updateModeOn: false}))
    }

    render() {
        const { updateModeOn, deadlift, strict_press, clean_and_jerk, backsquat, snatch } = this.state
        return (
            <>
            <figure className="benchmarks-card benchmarks-card--water">
                <div className="benchmarks-card__image-container">
                    <img src="https://pngimg.com/uploads/powerlifting/powerlifting_PNG47.png" alt="Vaporeon" className="benchmarks-card__image"/>   
                </div>
                
                <figcaption className="benchmarks-card__caption">
                    <h1 className="benchmarks-card__name">Benchmarks</h1>

                    <h3 className="benchmarks-card__type">
                        1 Rep Max
                    </h3>

                    <table className="benchmarks-card__stats">
                    <tbody><tr>
                        <th>Deadlift</th>
                        <td>{updateModeOn? <input onChange={this.handleInputChange} className='benchmarks-input' name='deadlift' type='number' value={deadlift} /> : deadlift} KG</td>
                    </tr>
                    <tr>
                        <th>Strict Press</th>
                        <td>{updateModeOn? <input onChange={this.handleInputChange} className='benchmarks-input' name='strict_press' type='number' value={strict_press}/> : strict_press} KG</td>
                    </tr>
                    
                    <tr>
                        <th>Clean & Jerk</th>
                        <td>{updateModeOn? <input onChange={this.handleInputChange} className='benchmarks-input'name='clean_and_jerk'  type='number' value={clean_and_jerk}/> : clean_and_jerk} KG</td>
                    </tr>

                    <tr>
                        <th>Backsquat</th>
                        <td>{updateModeOn? <input onChange={this.handleInputChange} className='benchmarks-input' name='backsquat' type='number' value={backsquat}/> : backsquat} KG</td>
                    </tr>
                    <tr>
                        <th>Snatch</th>
                        <td>{updateModeOn? <input onChange={this.handleInputChange} className='benchmarks-input' name='snatch' type='number' value={snatch}/> : snatch} KG</td>
                    </tr>
                    </tbody></table>
                    
                    <div className="benchmarks-card__abilities">
                    <h4 className="benchmarks-card__ability">
                        <span className="benchmarks-card__label"></span>
                        {!updateModeOn? <Button onClick={this.toggleUpdateMode} >Update Benchmarks</Button> : <Button onClick={this.handleNewBenchmarksSubmit} >Confirm</Button>}
                    </h4>
                    </div>
                </figcaption>
            </figure>

            </>
        );
    }
}

export default Benchmarks;

