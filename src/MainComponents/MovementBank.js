import React, { Component } from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import Movement from './Movement';

class MovementBank extends Component {
    state = { 
        movements: [], 
        search: ""
     }


     componentDidMount() {
        fetch('http://localhost:3000/movements')
        .then(resp => resp.json())
        .then(movements => this.setState({movements}))
     }

     handleSearchChange = (e, { value }) => {
        this.setState({ search: value })
     }

    render() {
        const movements = this.state.search !== "" ? this.state.movements.filter(movement => movement.name.toLowerCase().includes(this.state.search)) : this.state.movements
        return (
            <> <br/> <br/>
            <h1>Movement Bank</h1> <br/>
            <Search onSearchChange={this.handleSearchChange} showNoResults={false}/> <br/>
            <Grid columns={6} divided >
                <Grid.Row>
                    
                    {movements.map(movement => (
                        <Grid.Column>
                        <Movement {...movement}/>
                        </Grid.Column>
                    ))}

                </Grid.Row>
            </Grid>

            </>
        );
    }
}

export default MovementBank;