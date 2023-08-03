import React from "react";

const MealItem = ({ meal }) => {
  const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube } = meal;
  return (
    <li className="meal-item">
      <img className="meal-image" src={strMealThumb} alt={strMeal} />
      <div className="meal-details">
        <h2 className="meal-name">{strMeal}</h2>
        <p className="meal-category">Category: {strCategory}</p>
        <p className="meal-area">Area: {strArea}</p>
        <p className="meal-instructions">Instructions: {strInstructions}</p>
        <a className="meal-youtube" href={strYoutube} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </div>
    </li>
  );
};

export default MealItem;
