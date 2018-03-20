import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyAbtaZAXenD9i9JQnbIuUEtCEKKho2yy_k';

// create new functional component, no state, which produces HTML
// <App /> wrapping up in tags makes it an instance of a class

const App = function() {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// take instance of component's generated HTML
// put into DOM (add to page)

ReactDOM.render(<App />, document.querySelector('#root-node'));