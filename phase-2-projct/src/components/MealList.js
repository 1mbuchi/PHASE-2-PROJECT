import React from "react";
import MealItem from "./MealItems";

const MealList = ({ meals }) => {
  return (
    <ul className="meal-list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} meal={meal} />
      ))}
    </ul>
  );
};

export default MealList;