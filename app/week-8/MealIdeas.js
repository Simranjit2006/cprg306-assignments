"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {

    if (!ingredient) {
      setMeals([]);
      return;
    }

    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.error(error);
      setMeals([]);
    }

  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (

    <div className="space-y-4">

      <h2 className="text-xl font-semibold text-slate-700 dark:text-slate-200">
        Meal Ideas
      </h2>

      {ingredient && (
        <p className="text-sm text-slate-500">
          Ingredient: {ingredient}
        </p>
      )}

      <ul className="space-y-3">

        {meals.length === 0 && ingredient && (
          <p className="italic text-slate-500">
            No meal ideas found for this ingredient.
          </p>
        )}

        {meals.map(meal => (

          <li
            key={meal.idMeal}
            className="bg-slate-400 p-3 rounded-md border"
          >
            {meal.strMeal}
          </li>

        ))}

      </ul>

    </div>

  );
}