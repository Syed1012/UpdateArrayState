import React, { useState } from "react";

const MyComponent = () => {
  const [fruits, setFruit] = useState([
    "Apple",
    "Orange",
    "WtrMelon",
    "PineApple",
  ]);

  const handleAddFruit = () => {
    const newFruit = document.getElementById("fruitInput").value;
    document.getElementById("fruitInput").value = "";
    setFruit((f) => [...f, newFruit]);
  };

  const handleRemoveFruit = (index) => {
      setFruit(fruits.filter((_, i) => i !== index ))
  };

  return (
    <div>
      <h2>List of Fruits Present.</h2>
      <ul>
        {fruits.map((fruits, index) => (
          <li key={index} onClick={ () => handleRemoveFruit(index)}> 
          {fruits} 
          </li>
        ))}
      </ul>

      <input type="text" id="fruitInput" placeholder="Enter Fruit Name" />
      <button onClick={handleAddFruit}>Add</button>
    </div>
  );
};

export default MyComponent;
