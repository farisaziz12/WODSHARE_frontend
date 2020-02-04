import React from 'react'
import API from '../API'

export default class PopUpCoachConnect extends React.Component {

    state = {
        email: null, 
        error: null
    }

     handleSubmit = (e) => {
         e.preventDefault()
        API.SubmitCoachFind(this.props.athleteID, this.state.email)
        .then(this.setState({email: null}))
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
                    <h1>Find Coach</h1>
                    {this.state.error&& <h4 className='h3' >{this.state.error}</h4>}
                    <label for="coach"><b>Coach Email</b></label>
                        <input onChange={this.handleEmailChange} type="text" placeholder="coach@gmail.com" name="email" required/>

                    <button type="submit" class="btn">Submit</button>
                    <button type="button" class="btn cancel" onClick={this.props.handleClick}>Close</button>
                </form>
            </div>
            </>

        )
    }
}
