import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'

import { Layout } from './Components';
import Routes from './Routes';
import { store } from './Store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
              <Routes/>
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
