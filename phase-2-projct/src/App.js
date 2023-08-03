import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import MealList from "./components/MealList";
import MealItem from "./components/MealItems";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(API_URL);
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals:", error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title"><i>YUMMY RECIPE!!!</i></h1>
      {loading ? (
        <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
      ) : (
        <ul className="meal-list">
          {meals.map((meal) => (
            <li className="meal-item" key={meal.idMeal}>
              <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
              <div className="meal-details">
                <h2 className="meal-name">{meal.strMeal}</h2>
                <p className="meal-category">Category: {meal.strCategory}</p>
                <p className="meal-area">Area: {meal.strArea}</p>
                <p className="meal-instructions">Instructions: {meal.strInstructions}</p>
                <a className="meal-youtube" href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube
                  </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const Appfood = () => {
  return (
    <Router>
      <div>
        <Navbar />
      
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </div>
    
    </Router>
  );
};

export default App;

