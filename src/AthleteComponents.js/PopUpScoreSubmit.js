import React from 'react'

export default class PopUpScoreSubmit extends React.Component {

    state = {
        score: null
    }

     handleSubmit = (e) => {
         e.preventDefault()
        fetch(`https://wodshare.herokuapp.com/workouts/${this.props.WODID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                workout: {
                    score: this.state.score
                }
            })
        })
        .then(this.props.handleScoreChange(this.state.score))
        .then(this.setState({score: ""}))
    }



     handleScoreChange = e => {
        this.setState({score: e.target.value})
    }

    render() {
        return (
            <>
            <div class="form-popup" id="myForm">
                <form onSubmit={this.handleSubmit} class="form-container">
                    <h1>Submit Score</h1>

                    <label for="score"><b>Score</b></label>
                        <input value={this.state.score} onChange={this.handleScoreChange} type="text" placeholder="6:57 / 5 Rounds 3 Reps" name="score" required/>

                    <button type="submit" class="btn">Submit</button>
                    <button type="button" class="btn cancel" onClick={this.props.handleClick}>Close</button>
                </form>
            </div>
            </>

        )
    }
}
