import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        // if you have a callback (the onChange in the render section) that
        // makes a reference to 'this' then chance are you need to bind it.
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value})
    }
    onFormSubit(event) {
        event.preventDefault();
        // fetch weather data
    }

    render() {
        return (
            <form onSubmit={this.onFormSubit} className="input-group">
                <input 
                    placeholder="Get a five-day forecase in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} />
                <span className="input-group-btn"> 
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}