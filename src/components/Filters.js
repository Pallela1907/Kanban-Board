import React, { useState } from 'react';
import './styles.css';

const Filters = ({ setGroupBy, setSortBy }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="filters-container">
      <button className="display-options-btn" onClick={toggleOptions}>
        Display Options
      </button>
      {showOptions && (
        <div className="options-container">
          <div className="options-column">
            <button onClick={() => setGroupBy('status')}>Group By Status</button>
            <button onClick={() => setGroupBy('user')}>Group By User</button>
            <button onClick={() => setGroupBy('priority')}>Group By Priority</button>
          </div>
          <div className="options-column">
            <button onClick={() => setSortBy('priority')}>Sort By Priority</button>
            <button onClick={() => setSortBy('title')}>Sort By Title</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
