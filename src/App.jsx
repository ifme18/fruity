import React, { useState } from 'react';
import FruitList from './FruitList';
import FruitForm from './FruitForm';
import './index.css';


const App = () => {
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (fruit) => {
    setSelectedFruit(fruit);
  };

  const handleSave = () => {
    setSelectedFruit(null);
    setRefresh(!refresh);
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Fruit App</h1>
      <div className="section-container">
        <FruitForm selectedFruit={selectedFruit} onSave={handleSave} />
      </div>
      <div className="section-container">
        <FruitList onEdit={handleEdit} refresh={refresh} />
      </div>
    </div>
  );
};

export default App;
