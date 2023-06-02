import React from 'react';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}
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
