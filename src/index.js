import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetails from './components/videoDetails';

const API_KEY = 'AIzaSyAbtaZAXenD9i9JQnbIuUEtCEKKho2yy_k';

// create new functional component, no state, which produces HTML
// <App /> wrapping up in tags makes it an instance of a class

// downwards data flow - most top-level app, parent, is responsible for fetching data

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('snowmonkey');
  };

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      //   this.setState({ videos }); // when key prop are same
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // console.log(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetails
          video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
// take instance of component's generated HTML
// put into DOM (add to page)

ReactDOM.render(<App />, document.querySelector('#root-node'));
