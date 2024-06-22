
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const ArticleCard = ({ article }) => {
  return (
    <div className="card mb-4 shadow-sm">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} className="card-img-top" />
      )}
      <div className="card-body d-flex flex-column">
        <h2 className="card-title h5 ">{article.title}</h2>
        <p className="card-text flex-grow-1 ">{article.description}</p>
        <Link to={`/article/${encodeURIComponent(article.title)}`} className="btn btn-primary mt-3 align-self-start">Read more</Link>
      </div>
    </div>
  );
};

export default ArticleCard;
