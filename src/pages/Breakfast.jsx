import { useEffect, useState } from 'react';
import MealList from '../components/MealList';
import MealCard from '../components/MealCard';
// import { getBreakfastMeals } from '../api';

const Breakfast = () => {
  const [breakfastMeals, setBreakfastMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i')
      .then(response => response.json())
      .then(data =>console.log(data))
      .catch(error => console.error(error));
    // getBreakfastMeals().then((meals) => setBreakfastMeals(meals));
  }, []);

  return (
    <div>
      <h2>Breakfast Meals</h2>
      {breakfastMeals.map((breakfastMeal) =>(
        <MealCard name={breakfastMeal.meals.name} pic={breakfastMeal.meals.image} />
      ))}
      {/* <MealList meals={breakfastMeals} /> */}
    </div>
  );
};

export default Breakfast;
