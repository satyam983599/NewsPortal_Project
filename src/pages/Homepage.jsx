import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/slices/articlesSlice';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);
  const currentPage = useSelector((state) => state.articles.currentPage);

  useEffect(() => {
    dispatch(fetchArticles({ category: selectedCategory, page: currentPage }));
  }, [dispatch, selectedCategory, currentPage]);

  return (
    <div className="homepage">
      <div className="article-list">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          articles.map((article) => <ArticleCard key={article.title} article={article} />)
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;
