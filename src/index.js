import React from 'react';
import ReactDOM from 'react-dom';

// create new component Class which produces HTML
// <App /> wrapping up in tags makes it an instance of a class

const App = function() {
    return <div>Inside a Div El</div>;
}

// take instance of component's generated HTML
// put into DOM (add to page)

ReactDOM.render(<App />, document.querySelector('#root-node'));