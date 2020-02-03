import React, { Component } from 'react';
import './MovementBank.css'


class Movement extends Component {
    state = {
        cardClass: "movement-card"
    }

    handleClick = () => {
        this.setState({cardClass: this.state.cardClass === "movement-card"? "movement-card flipped" : "movement-card"})
    }

    render() {
        const  { name, skill_level, category } = this.props
        return (
            <>
            <div onClick={this.handleClick} class="movement-container">
                <div class={this.state.cardClass}>
                    <div class="front">{name}</div>
                    <div class="back">
                        Skill Level: {skill_level} <br/>
                        Category: {category}
                        </div>
                </div>
            </div>
            </>
        );
    }
}

export default Movement;