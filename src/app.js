import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './components/utilities/Routes';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <h1>Dungeons and Dragons</h1>
          <Routes/>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
