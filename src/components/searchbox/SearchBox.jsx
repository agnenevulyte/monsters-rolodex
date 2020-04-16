import React from 'react';
import './searchBox.css';

export default function SearchBox({placeholder, handleChange}) {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        className="search"
      />
    </div>
  );
}
