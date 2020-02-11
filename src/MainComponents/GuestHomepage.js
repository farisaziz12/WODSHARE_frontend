import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React, { Component } from 'react';
import './GuestHomepage.css'

class GuestHompage extends Component {
    state = {  }
    render() {
        return (
            <div className='guest-layout'> 
                    <div class="grid ">
                    <div class="item" tabindex="1">
                        <div class="box">
                        {/* <div class="diamond"><span>1</span></div> */}
                        <div class="tooltip">grid-area: hero</div>
                        </div>
                    </div>
                    <div class="item" tabindex="2">
                        <div class="box">
                        {/* <div class="diamond"><span>2</span></div> */}
                        <div class="tooltip">grid-area: big</div>
                        </div>
                    </div>
                    <div class="item" tabindex="3">
                        <div class="box">
                        {/* <div class="diamond"><span>3</span></div> */}
                        <div class="tooltip">grid-area: medium</div>
                        </div>
                    </div>
                    <div class="item" tabindex="4">
                        <div class="box">
                        {/* <div class="diamond"><span>4</span></div> */}
                        <div class="tooltip">grid-area: medium</div>
                        </div>
                    </div>
                    <div class="item" tabindex="5">
                        <div class="box">
                        {/* <div class="diamond"><span>5</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="6">
                        <div class="box">
                        {/* <div class="diamond"><span>6</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="7">
                        <div class="box">
                        {/* <div class="diamond"><span>7</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="8">
                        <div class="box">
                        {/* <div class="diamond"><span>8</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="9">
                        <div class="box">
                        {/* <div class="diamond"><span>9</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="10">
                        <div class="box">
                        {/* <div class="diamond"><span>10</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="11">
                        <div class="box">
                        {/* <div class="diamond"><span>11</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="12">
                        <div class="box">
                        {/* <div class="diamond"><span>12</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="13">
                        <div class="box">
                        {/* <div class="diamond"><span>13</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    <div class="item" tabindex="14">
                        <div class="box">
                        {/* <div class="diamond"><span>14</span></div> */}
                        <div class="tooltip">grid-area: small</div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default GuestHompage;