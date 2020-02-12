import React, { Component } from 'react';
import { Search, Grid, Container } from 'semantic-ui-react'
import Movement from './Movement';
import './MovementBank.css'

class MovementBank extends Component {
    state = { 
        movements: [], 
        search: "", 
        loading: true
     }


     componentDidMount() {
        fetch('https://wodshare.herokuapp.com/movements')
        .then(resp => resp.json())
        .then(movements => this.setState({movements, loading: false}))
     }

     handleSearchChange = (e, { value }) => {
        this.setState({ search: value })
     }

     
     render() {
         String.prototype.capitalize = function() {
            return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        }
        const movements = this.state.search !== "" ? this.state.movements.filter(movement => movement.name.includes(this.state.search.capitalize())) : this.state.movements
        return (
            <div className='body'> <br/>
            
            {this.state.loading&&
                <div class='loader loader4'>
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
            }
            <div className='search-bar'> 
                {!this.state.loading?<h1 className='title'>Movement Bank</h1> : undefined}
                {!this.state.loading? <Search onSearchChange={this.handleSearchChange} showNoResults={false}/>  : undefined}
            </div>
            <div className="movements-container">
            {!this.state.load4ing &&
                <> 
                    {movements.map(movement => (
                        <Movement {...movement}/>

                    ))}
                </>

            }
            </div>
            </div>
        );
    }
}

export default MovementBank;