import React from 'react';
import '../components/Products.css'

function List({ items, Delete }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button className='btn' onClick={() => Delete(item)}>Sil</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
