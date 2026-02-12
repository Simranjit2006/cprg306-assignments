"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };

    console.log(item);

    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
          Item Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded-md
          bg-white dark:bg-slate-700
          text-slate-800 dark:text-slate-100
          border-slate-300 dark:border-slate-600"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded-md
            bg-white dark:bg-slate-700
            text-slate-800 dark:text-slate-100
            border-slate-300 dark:border-slate-600"
          />
        </div>

        <div className="flex-1">
          <label className="block mb-1 font-medium text-slate-700 dark:text-slate-200">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md
            bg-white dark:bg-slate-700
            text-slate-800 dark:text-slate-100
            border-slate-300 dark:border-slate-600"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-slate-800 dark:bg-slate-600 text-white py-2 rounded-md hover:bg-slate-700 dark:hover:bg-slate-500 transition"
      >
        +
      </button>
    </form>
  );
}
