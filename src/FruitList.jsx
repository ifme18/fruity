import React, { useEffect, useState } from 'react';
import './index.css';

const FruitList = ({ onEdit, refresh }) => {
  const [fruits, setFruits] = useState([]);

  
  useEffect(() => {
    fetch('http://localhost:3000/fruits')
      .then((response) => response.json())
      .then((data) => setFruits(data));
  }, [refresh]); 
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/fruits/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setFruits(fruits.filter((fruit) => fruit.id !== id));
    });
  };

  return (
    <div className="fruit-list-container">
      <h2 className="fruit-list-title">Fruit List</h2>
      <ul className="fruit-list">
        {fruits.map((fruit) => (
          <li key={fruit.id} className="fruit-item">
            <span className="fruit-details">
              {fruit.name} - {fruit.color} - {fruit.weight}
            </span>
            <button className="edit-button" onClick={() => onEdit(fruit)}>Edit</button>
            <button className="delete-button" onClick={() => handleDelete(fruit.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;

