import React, { useState, useEffect } from 'react';
import axios from 'axios';


const NewsFetcher = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const articlesPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '2538b93a52254ab581629cc260a36a5d',
            q: searchTerm, 
          },
        });

        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]); 
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = () => {
    setCurrentPage(1); 
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }


  return (
    <div>
      <h1>Latest News</h1>

      {/* Search Bar and Submit Button */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Submit
        </button>
      </div>

      {/* Displaying Articles */}
      <ul>
        {articles.length === 0 ? (
          <p>No articles found for the search term: {searchTerm}</p>
        ) : (
          currentArticles.map((article) => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))
        )}
      </ul>

      {/* Pagination */}
      <div>
        {Array.from({ length: Math.ceil(articles.length / articlesPerPage) }, (_, index) => (
          <button className="btn btn-primary" key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewsFetcher;



