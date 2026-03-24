"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    async function load() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await res.json();
        setMeals(data.meals || []);
      } catch {
        setMeals([]);
      }
    }

    load();
  }, [ingredient]);

  return (
    <div className="space-y-4">

      <h2 className="text-xl font-bold text-purple-600">
        Meal Ideas
      </h2>

      {ingredient && (
        <p className="text-sm text-slate-500">
          Ingredient: {ingredient}
        </p>
      )}

      <ul className="space-y-2">

        {meals.length === 0 && ingredient && (
          <p className="italic text-slate-500">
            No meal ideas found.
          </p>
        )}

        {meals.map(meal => (
          <li
            key={meal.idMeal}
            className="p-3 rounded-md bg-purple-100 dark:bg-slate-700"
          >
            {meal.strMeal}
          </li>
        ))}

      </ul>

    </div>
  );
}