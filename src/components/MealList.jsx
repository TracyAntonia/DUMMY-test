// src/components/MealList.jsx
import React from 'react';
import MealCard from './MealCard';

const MealList = ({ meals }) => {
  console.log(meals);
  return (
    <div>
      {/* {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))} */}

      <MealCard meal={meals} />
    </div>
  );
};

export default MealList;

// import React, { useState, useEffect } from "react";

// const MealList = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?i";

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setMeals(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching meal data:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>List of Meals</h2>
//       <ul>
//         {meals.map((meal) => (
//           <li key={meal.id}>{meal.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MealList;
