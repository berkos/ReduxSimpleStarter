import React from 'react';
import ReactDom from 'react-dom'
import Env from './env';

const API_KEY = Env.API_KEY;

const App = () => {
  return <div> {API_KEY}</div>;
};

ReactDom.render(<App/>, document.querySelector('.container'));
