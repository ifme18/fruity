
import React, { useState } from 'react';
import FruitList from './fruitlist';
import FruitForm from './fruitform';

const App = () => {
  const [selectedFruit, setSelectedFruit] = useState(['']);

  const handleEdit = (fruit) => {
    setSelectedFruit(fruit);
  };

  const handleSave = () => {
    setSelectedFruit(['']);
  };

  return (
    <div>
      <h1>Fruit App</h1>
      <FruitForm selectedFruit={selectedFruit} onSave={handleSave} />
      <FruitList onEdit={handleEdit} />
    </div>
  );
};

export default App;
