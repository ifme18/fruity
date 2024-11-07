
import React, { useState, useEffect } from 'react';

const FruitForm = ({ selectedFruit, onSave }) => {
  const [fruit, setFruit] = useState({ name: '', color: '', weight: '' });

  useEffect(() => {
    if (selectedFruit) {
      setFruit(selectedFruit);
    } else {
      setFruit({ name: '', color: '', weight: '' });
    }
  }, [selectedFruit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFruit) {
      // Update fruit
      fetch(`http://localhost:3000/fruits/${fruit.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fruit),
      })
        .then(() => onSave()) // Call onSave to refresh the fruit list
        .catch((error) => console.error('Error updating fruit:', error));
    } else {
      // Add new fruit
      fetch('http://localhost:3000/fruits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fruit, id: Date.now() }),
      })
        .then(() => onSave()) // Call onSave to refresh the fruit list
        .catch((error) => console.error('Error adding fruit:', error));
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruit.name}
        placeholder="Fruit Name"
        onChange={(e) => setFruit({ ...fruit, name: e.target.value })}
        required
      />
      <input
        type="text"
        value={fruit.color}
        placeholder="Fruit Color"
        onChange={(e) => setFruit({ ...fruit, color: e.target.value })}
        required
      />
      <input
        type="text"
        value={fruit.weight}
        placeholder="Fruit Weight"
        onChange={(e) => setFruit({ ...fruit, weight: e.target.value })}
        required
      />
      <button type="submit">{selectedFruit ? 'Update' : 'Add'} Fruit</button>
    </form>
  );
};

export default FruitForm;
