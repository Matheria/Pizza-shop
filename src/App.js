import React, { useEffect, useState } from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://647271ec6a9370d5a41b55f5.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                sizes={obj.sizes}
                key={obj.id}
                types={obj.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
