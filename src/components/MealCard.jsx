// src/components/MealCard.jsx
// import React from 'react';

const MealCard = ({ meal }) => {
    return (
      <div>
        <h3>{meal.title}</h3>
        <img src={meal.image} alt={meal.title} />
      </div>
    );
  };
  
  export default MealCard;
  