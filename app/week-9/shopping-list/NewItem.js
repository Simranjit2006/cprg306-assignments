"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: Date.now().toString(),
      name,
      quantity,
      category
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* NAME */}
      <div>
        <label htmlFor="name" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
          Item Name
        </label>

        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded-md border bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="flex gap-4">

        {/* QUANTITY */}
        <div className="flex-1">
          <label htmlFor="quantity" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Quantity
          </label>

          <input
            id="quantity"
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-3 rounded-md border bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* CATEGORY */}
        <div className="flex-1">
          <label htmlFor="category" className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Category
          </label>

          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-md border bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            {[
              "produce","dairy","bakery","meat","frozen foods",
              "canned goods","dry goods","beverages","snacks",
              "household","other"
            ].map(option => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>

      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-md font-bold bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow hover:scale-[1.02] transition"
      >
        + Add Item
      </button>

    </form>
  );
}