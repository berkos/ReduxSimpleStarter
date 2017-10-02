import React from 'react';
import ReactDom from 'react-dom'
import Env from './env';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = Env.API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'psarogiorgis'}, (videos) => {
      this.setState({videos: videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
};

ReactDom.render(<App/>, document.querySelector('.container'));
