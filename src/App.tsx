import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'

import { Layout } from './Components';
import './App.css';
import Routes from './Routes';
import { store } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
