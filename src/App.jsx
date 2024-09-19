import React, { useState } from 'react';
import Input from './components/Input';
import List from './components/List';
import './App.css'

function App() {
  const [data, setData] = useState([
    'React',
    'Java',
    'Dom',
    'Html',
    'Scss',
    'Python',
    'Json',
  ]);
  const [search, setSearch] = useState(''); 
  const filteredData = data.filter(item => 
    item.toLowerCase().includes(search.toLowerCase())
  );

  
  const handleDelete = (itemToDelete) => {
    setData(data.filter(item => item !== itemToDelete));
  };

  return (
      <div>
      <Input search={search} setSearch={setSearch} />
      <List items={filteredData} Delete={handleDelete} />
      </div>
  );
}

export default App;