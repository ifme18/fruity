
import React, { useEffect, useState } from 'react';

const FruitList = ({ onEdit }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fruits')
      .then((response) => response.json())
      .then((data) => setFruits(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/fruits/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setFruits(fruits.filter((fruit) => fruit.id !== id));
    });
  };

  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.color} - {fruit.weight}
            <button onClick={() => onEdit(fruit)}>Edit</button>
            <button onClick={() => handleDelete(fruit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;

