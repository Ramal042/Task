import React from 'react';
import '../components/Input.css'

 export default function Input({ search, setSearch }) {
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='div'>
        <h1>Search n' Delete task</h1>
      <input 
        type="text" 
        value={search} 
        onChange={handleInputChange} 
        placeholder="Axtar..."
      />
    </div>
  );
}