import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1';

export const searchMeals = async (query: string) => {
  const { data } = await axios.get(`${API_URL}/search.php?s=${query}`);
  return data.meals;
};

export const getMealById = async (id: string) => {
  const { data } = await axios.get(`${API_URL}/lookup.php?i=${id}`);
  return data.meals[0];
};
