import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: parseInt(this.props.age) // Convert age to a number
        };
    }
    
    IncrementAge = () => {
        this.setState({ age: this.state.age + 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.props.firstName}, {this.props.lastName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.color}</p>
                <button onClick={this.IncrementAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}

export default PersonCard;
