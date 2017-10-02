import React from 'react';
import ReactDom from 'react-dom'
import Env from './env';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = Env.API_KEY;

YTSearch({key: API_KEY, term: 'psarogiorgis'}, function (data) {
  console.log(data);
});

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
};

ReactDom.render(<App/>, document.querySelector('.container'));
