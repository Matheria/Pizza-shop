import React from 'react';

import { Home } from './pages/Home';
import { NotFoundBlock } from './components/NotFoundBlock/index.jsx';

import Header from './components/Header';

import './scss/app.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFoundBlock />
        </div>
      </div>
    </div>
  );
};

export default App;
