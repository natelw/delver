import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';
import Routes from './components/utilities/Routes';
import NavBar from './components/navigation/NavBar';
import './scss/style.scss';


class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <main>
          <NavBar/>
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
