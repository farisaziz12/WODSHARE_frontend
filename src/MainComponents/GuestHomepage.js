import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import './GuestHomepage.css'

class GuestHompage extends Component {
    state = { 
        movements: [],
        movementsLoading: true
     }

     componentDidMount() {
        fetch('https://wodshare.herokuapp.com/movements')
        .then(resp => resp.json())
        .then(movements => this.setState({movements, movementsLoading: false}))
     }

    render() {
        const movementOfTheDay = this.state.movements[0]? this.state.movements[Math.floor(Math.random() * this.state.movements.length)] : undefined
        return (
            <div className='guest-layout'> 
                    <div class="grid ">
                    <div class="item" tabindex="1">
                        <div class="box">
                            <div style={{textAlign: 'left'}}>
                                <h1>Workout of the Day:</h1> 
                                <h3>On a 15-minute running clock, for max reps:</h3>
                                <h3>5 rounds of:</h3>
                                <p>20 seconds of pull-ups, 10 seconds of rest</p>
                                <p>20 seconds of push-ups, 10 seconds of rest</p>
                                <p>Then, 5 rounds of squats and GHD sit-ups</p>
                                <p>Then, 5 rounds of of rowing and double-unders</p>
                            </div>
                        </div>
                    </div>
                    <div class="item" tabindex="2">
                        <div class="box">
                            
                        </div>
                    </div>
                    <div class="item" tabindex="3">
                        <div class="box">
                            <div>
                                {this.state.movementsLoading&&
                                <div name='loading'>
                                <div class='loader-movements loader4-movements'>
                                <div>
                                    <div>
                                        <div>
                                        <div>
                                            <div>
                                            <div>
                                                <div>
                                                <div>
                                                    <div>
                                                    <div></div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                }
                                {!this.state.movementsLoading&&
                                <div>
                                    <h1>Movement of the day:</h1>
                                    <h2>{movementOfTheDay.name}</h2>
                                </div>  
                                }
                            </div>
                        </div>
                    </div>
                    <div class="item" tabindex="4">
                        <div class="box">
                        {/* <div class="diamond"><span>4</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="5">
                        <div class="box">
                        {/* <div class="diamond"><span>5</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="6">
                        <div class="box">
                        {/* <div class="diamond"><span>6</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="7">
                        <div class="box">
                        {/* <div class="diamond"><span>7</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="8">
                        <div class="box">
                        {/* <div class="diamond"><span>8</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="9">
                        <div class="box">
                        {/* <div class="diamond"><span>9</span></div> */}
                        </div>
                    </div>
                    <div class="item" tabindex="10">
                        <div class="box">
                        {/* <div class="diamond"><span>10</span></div> */}
                        </div>
                    </div>
                    <div  class="item" tabindex="11">
                        <div class="box">
                        {/* 11 */}
                        </div>
                    </div>
                    <div class="item" tabindex="12">
                        <div class="box">
                            {/* 12 */}
                        </div>
                    </div>
                    <div class="item" tabindex="13">
                        <div class="box">
                        {/* 13 */}
                        </div>
                    </div>
                    <div class="item" tabindex="14">
                        <div class="box">
                        {/* 14 */}
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default GuestHompage;