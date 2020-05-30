import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import { Layout } from './Components';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
