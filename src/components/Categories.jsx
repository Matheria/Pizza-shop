import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              onClick={() => setActiveIndex(i)}
              className={activeIndex === i ? 'active' : ''}
              key={`category_${i}`}>
              {category}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
