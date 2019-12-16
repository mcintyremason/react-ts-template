import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './styles/scss/app.scss';

import HomePage from './components/HomePage/index';

export default class App extends React.Component {
  render() {
    return(
      <HomePage/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));