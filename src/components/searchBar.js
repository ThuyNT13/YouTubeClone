import React, { Component} from 'react';

// class-based component
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  render() {
    return (
      <div className="search-bar">
        <input
          // controlled component - where input receives its value from state
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/* <p>Value of is.state.term}</p> */}
      </div>
    );
  }

  onInputChange(term) {
    // const term = props.term;
    // TODO research how this shortcut for assign props to term
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
