

import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.articles.articles.find((a) => a.title === title)
  );

  if (!article) {
    return <p className="text-center mt-5">Article not found</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h1 className="mb-4">{article.title}</h1>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="img-fluid mb-4" />
          )}
          <p className="lead">{article.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
