import React from 'react';
import ReactDom from 'react-dom'
import Env from './env';

import SearchBar from './components/search_bar';

const API_KEY = Env.API_KEY;

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDom.render(<App/>, document.querySelector('.container'));
