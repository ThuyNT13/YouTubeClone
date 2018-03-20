import React, { Component} from 'react';

// class-based component
class SearchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {presentState: ''};
    }

    render() {
        return ( 
            <div>
                <input 
                    // controlled component - where input receives its value from state
                    value={this.state.presentState}
                    onChange={event => this.setState({ presentState: event.target.value })} 
                />
                {/* <p>Value of state: {this.state.presentState}</p> */}
            </div>
        );
    }

}

export default SearchBar;