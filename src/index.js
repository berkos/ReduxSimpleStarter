import _ from 'lodash';
import React from 'react';
import ReactDom from 'react-dom'
import Env from './env';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';


const API_KEY = Env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('psarogiorgis');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelected={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}
        />
      </div>
    );
  }
};

ReactDom.render(<App/>, document.querySelector('.container'));
