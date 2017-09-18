import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm: 'Search for videos here!',
        };
    }

    render () {
        return (
            <div>
                <input
                    value = {this.state.searchTerm}
                    onChange={event => {this.setState({ searchTerm: event.target.value })}}
                />
            </div>
        );
    }
}


export default SearchBar;