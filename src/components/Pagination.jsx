

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, setPage } from '../redux/slices/articlesSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.articles.currentPage);
  const totalResults = useSelector((state) => state.articles.totalResults);
  const selectedCategory = useSelector((state) => state.categories.selectedCategory);

  const articlesPerPage = 20;
  const totalPages = Math.ceil(totalResults / articlesPerPage);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    dispatch(fetchArticles({ category: selectedCategory, page }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <button
        className="btn btn-secondary me-1"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          className={`btn ${currentPage === page + 1 ? ' active' : ''} m-1 `}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </button>
      ))}
      <button
        className="btn btn-secondary ms-1"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
