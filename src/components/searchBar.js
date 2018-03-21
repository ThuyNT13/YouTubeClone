import React, { Component} from 'react';

// class-based component
class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input
                    // controlled component - where input receives its value from state
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                />
                {/* <p>Value of is.state.term}</p> */}
            </div>
        );
    }

}

export default SearchBar;
