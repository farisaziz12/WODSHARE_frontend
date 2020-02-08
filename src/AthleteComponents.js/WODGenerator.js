import React, { Component } from 'react';
import { Grid, Dropdown, Button } from 'semantic-ui-react'
import './WODGenerator.css'

class WODGenerator extends Component {
    state = { 
        type: null, 
        category: null,
        powerlifting: null, 
        done: false, 
        generated: false
     }


    handleTypeChange = (e, {value}) => {
        this.setState({type: value, done: false})
    }
    handleCategoryChange = (e, {value}) => {
        this.setState({category: value, done: false})
    }
    handlePowerliftingChange = (e, {value}) => {
        this.setState({powerlifting: value, done: true})
    }
    toggleWODgGeneration = () => {
        this.setState({generated: true})
    }

    StrengthSetSelector = () => {
        const setTypes = [
           {
               set: [{reps: 1, percentage: 0.65}, {reps: 1, percentage: 0.75}, {reps: 1, percentage: 0.85}, {reps: 1, percentage: 0.90}, {reps: 1, percentage: 0.95}, {reps: 1, percentage: 0.98}, {reps: 1, percentage: 1.01} ],
               rest: '90"' 
           }, 
           {
            set: [{reps: 5, percentage: 0.60}, {reps: 5, percentage: 0.70}, {reps: 3, percentage: 0.80}, {reps: 3, percentage: 0.85}, {reps: 1, percentage: 0.90}, {reps: 1, percentage: 0.95}, {reps: 1, percentage: 1.01}], 
            rest: '90"'
           }, 
           {
            set: [{reps: 5, percentage: 0.60}, {reps: 5, percentage: 0.70}, {reps: 5, percentage: 0.80}, {reps: 5, percentage: 0.80}, {reps: 5, percentage: 0.80}], 
            rest: '90"'
           }, 
           {
            set: [{reps: 10, percentage: 0.54}, {reps: 3, percentage: 0.63}, {reps: 3, percentage: 0.72},, {reps: 3, percentage: 0.81}, {reps: 10, percentage: 0.54}], 
            rest: '90"'
           }
        ]

        return setTypes[Math.floor(Math.random() * setTypes.length)]
    }

    powerliftingSwitch = lift => {
        let benchmarkPercentage = null
        switch (lift) {
            case "deadlift":
                benchmarkPercentage = this.props.deadlift * 1;
            break;
            case "back-squat":
                benchmarkPercentage = this.props.backsquat * 1;
            break;
            case "front-squat":
                benchmarkPercentage = this.props.backsquat * 0.8;
            break;
            case "bench-press":
                benchmarkPercentage = this.props.strict_press * 1.60;
            break;
            case "bench-press":
                benchmarkPercentage = this.props.strict_press * 1.60;
            break;
            case "bench-press":
                benchmarkPercentage = this.props.strict_press * 1.60;
            break;
            case "bench-press":
                benchmarkPercentage = this.props.strict_press * 1.60;
                
        }
        return benchmarkPercentage
    }
    

    render() {

        const workOptions = [
            {
              key: 'Strength',
              text: 'Strength',
              value: 'strength'
            },
            {
              key: 'Hypertrophy',
              text: 'Hypertrophy',
              value: 'hypertrophy',
            },
            {
              key: 'Metabolic Conditioning',
              text: 'Metabolic Conditioning',
              value: 'metabolic-conditioning'
            },
            {
              key: 'Full Body',
              text: 'Full Body',
              value: 'full-body'
            },
        ]

        const categoryOptions = [
            {
              key: 'olympic Lifting',
              text: 'Olympic-lifting',
              value: 'olympic Lifting'
            },
            {
              key: 'powerlifting',
              text: 'Powerlifting',
              value: 'powerlifting',
            },
            {
              key: 'gymnastics',
              text: 'Gymnastics',
              value: 'gymnastics'
            }
        ]
        const powerliftingOptions = [
            {
              key: 'deadlift',
              text: 'Deadlift',
              value: 'deadlift'
            },
            {
              key: 'back-squat',
              text: 'Back Squat',
              value: 'back-squat',
            },
            {
              key: 'front-squat',
              text: 'Front Squat',
              value: 'front-squat'
            },
            {
              key: 'bench-press',
              text: 'Bench Press',
              value: 'bench-press'
            }
        ]
        const HypertrophyOptions = [
            {
              key: 'strict-press',
              text: 'Strict Press',
              value: 'strict-press'
            },
            {
              key: 'bicep-curl',
              text: 'Bicep Curl',
              value: 'bicep-curl',
            },
            {
              key: 'deadlift',
              text: 'Deadlift',
              value: 'deadlift'
            },
            {
              key: 'hammer-curl',
              text: 'Hammer Curl',
              value: 'hammer-curl'
            },
            {
              key: 'goblet-squats',
              text: 'Goblet Squats',
              value: 'goblet-squats'
            }
        ]

        String.prototype.capitalize = function() {
            return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
        }
        const powerliftingMovement =  this.state.powerlifting? this.state.powerlifting.capitalize() : undefined
        const PowerliftingWeight = this.state.powerlifting? this.powerliftingSwitch(this.state.powerlifting) : undefined
        const SelectedSetProgram = this.state.powerlifting? this.StrengthSetSelector() : undefined
        return (
            <> <br/><br/><br/>
            <h1 className='h2'>WOD Generator</h1><br/><br/>
            <Grid columns={2} divided>
                <Grid.Row>
                <Grid.Column>
                    <span className='animated zoomIn dropdown-txt'>
                        I want to work on {' '}
                        <Dropdown
                        inline
                        options={workOptions}
                        defaultValue={""}
                        onChange={this.handleTypeChange}
                        />
                    </span> <br/><br/><br/>
                    {this.state.type === "strength"&&
                    <span className='animated zoomIn dropdown-txt'>
                        Category: {' '}
                        <Dropdown
                        inline
                        options={categoryOptions}
                        defaultValue={""}
                        onChange={this.handleCategoryChange}
                        />
                    </span> 
                    }<br/><br/><br/>
                    {this.state.type === "hypertrophy"&&
                    <span className='animated zoomIn dropdown-txt'>
                        Category: {' '}
                        <Dropdown
                        inline
                        options={HypertrophyOptions}
                        defaultValue={""}
                        onChange={this.handleCategoryChange}
                        />
                    </span> 
                    }<br/><br/><br/>
                    {this.state.category === "powerlifting"&&
                    <span className='animated zoomIn dropdown-txt'>
                        Lift: {' '}
                        <Dropdown
                        inline
                        options={powerliftingOptions}
                        defaultValue={""}
                        onChange={this.handlePowerliftingChange}
                        />
                    </span>
                    } <br/><br/><br/>
                    {this.state.done&&
                    <Button onClick={this.toggleWODgGeneration}>
                        Generate WOD
                    </Button>
                    }
                </Grid.Column>
                <Grid.Column>
                    {this.state.generated&&
                        <>
                        <h1> Generated WOD</h1>
                        <h2>{powerliftingMovement} {this.state.type.capitalize()} WOD</h2>
                        {SelectedSetProgram.set.map(set => (
                        <h2>{set.reps} @{Math.round(set.percentage * PowerliftingWeight)}KG</h2>
                        ))}

                        </>
                    }
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </>
        );
    }
}

export default WODGenerator;