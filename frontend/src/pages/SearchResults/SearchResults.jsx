import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css'; // Ensure to add the required styles
import Fooditem from '../../components/Fooditem/Fooditem';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      {results.length > 0 ? (
        <div className="search-results-list">
          {results.map((item) => (
            <Fooditem
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
