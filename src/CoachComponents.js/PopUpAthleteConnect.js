import React from 'react'
import API from '../API'

export default class PopUpAthleteConnect extends React.Component {

    state = {
        email: null, 
        error: null, 
        athlete: null
    }

     handleSubmit = (e) => {
         e.preventDefault()
        API.SubmitAthleteFind(this.props.coachID, this.state.email)
        .then(athlete => this.setState({athlete: athlete, email: ""}))
        .then(this.props.handleSuccess)
        .catch(errorPromise => errorPromise.then(error => this.setState({error: error.message})))
    }



     handleEmailChange = e => {
        this.setState({email: e.target.value})
    }

    render() {
        return (
            <>
            <div class="form-popup" id="myForm">
                <form onSubmit={this.handleSubmit} class="form-container">
                    <h1>Find Athlete</h1>
                    {this.state.error&& <h4 className='h3' >{this.state.error}</h4>}
                    <label for="coach"><b>Athlete Email</b></label>
                        <input onChange={this.handleEmailChange} type="text" placeholder="athlete@gmail.com" name="email" required value={this.state.email}/>

                    <button type="submit" class="btn">Submit</button>
                    <button type="button" class="btn cancel" onClick={this.props.handleClick}>Close</button>
                </form>
            </div>
            </>

        )
    }
}
