import axios from 'axios';

const API_KEY = '5e13dbd1d5ce44a3b573dd831f914df8';
const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=10`;

export const getMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&query=Arrabiata`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching meals:', error);
    return [];
  }
};

export const getBreakfastMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&type=breakfast`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching breakfast meals:', error);
    return [];
  }
};

export const getLunchMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&type=lunch`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching lunch meals:', error);
    return [];
  }
};

export const getDinnerMeals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&type=dinner`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching dinner meals:', error);
    return [];
  }
};

// import axios from 'axios';

// const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch=${process.env.REACT_URL}&number=10';

// export const getMeals = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching meals:', error);
//     return [];
//   }
// };

// export const getBreakfastMeals = async () => {*
//   try {
//     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching breakfast meals:', error);
//     return [];
//   }
// };

// export const getLunchMeals = async () => {
//   // You can modify the API endpoint to fetch lunch meals from www.themealdb.com
//   try {
//     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching lunch meals:', error);
//     return [];
//   }
// };

// export const getDinnerMeals = async () => {
//   // You can modify the API endpoint to fetch dinner meals from www.themealdb.com
//   try {
//     const response = await axios.get(`${BASE_URL}/search.php?s=Arrabiata`);
//     return response.data.meals;
//   } catch (error) {
//     console.error('Error fetching dinner meals:', error);
//     return [];
//   }
// };
