import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/categoriesSlice';
import { fetchArticles } from '../redux/slices/articlesSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const categories = ['general', 'business', 'technology', 'entertainment'];
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(fetchArticles({ category }));
  };

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
