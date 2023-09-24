import React from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';

const TodoHeader = ({
  setIsModalOpen,
  searchQuery,
  setSearchQuery,
  toggleSearchBtn,
}) => {
  return (
    <div className='header'>
      <h2>Note App</h2>
      <div className='search-box'>
        <input
          className='search-input'
          type='text'
          title='search-todo'
          placeholder='live search todo...'
          value={searchQuery}
          onChange={(evt) => setSearchQuery(evt.target.value)}
        />
        <button
          className='search-btn'
          title='search-btn'
          onClick={toggleSearchBtn}
        >
          <FaSearch />
        </button>
      </div>
      <button className='add-btn' onClick={() => setIsModalOpen(true)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default TodoHeader;
