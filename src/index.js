import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyAbtaZAXenD9i9JQnbIuUEtCEKKho2yy_k';

// create new functional component, no state, which produces HTML
// <App /> wrapping up in tags makes it an instance of a class

// downwards data flow - most top-level app, parent, is responsible for fetching data

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'zimmer'}, (videos) => {
            //   this.setState({ videos: videos }); // when key prop are same
            this.setState({ videos });
            // console.log(videos);
        });
    };

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
// take instance of component's generated HTML
// put into DOM (add to page)

ReactDOM.render(<App />, document.querySelector('#root-node'));
