"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {

  const [mode, setMode] = useState("name");

  if (mode === "group") {

    const grouped = {};

    items.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    return (
      <div className="space-y-6">

        <div className="flex gap-3">

          <button
            onClick={() => setMode("name")}
            className="px-4 py-2 rounded-md border bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          >
            Sort by Name
          </button>

          <button
            onClick={() => setMode("category")}
            className="px-4 py-2 rounded-md border bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          >
            Sort by Category
          </button>

          <button
            className="px-4 py-2 rounded-md border bg-slate-800 text-white dark:bg-slate-600"
          >
            Group by Category
          </button>

        </div>

        {Object.keys(grouped).sort().map(category => (

          <div key={category}>

            <h2 className="font-semibold text-slate-700 dark:text-slate-200 capitalize mt-4">
              {category}
            </h2>

            <ul className="space-y-4 mt-2">

              {grouped[category]
                .sort((a,b)=>a.name.localeCompare(b.name))
                .map(item => (
                  <Item
                    key={item.id}
                    {...item}
                    onSelect={() => onItemSelect(item)}
                  />
                ))
              }

            </ul>

          </div>

        ))}

      </div>
    );
  }

  const sortedItems = [...items].sort((a, b) => {

    if (mode === "name") return a.name.localeCompare(b.name);

    if (mode === "category") return a.category.localeCompare(b.category);

    return 0;

  });

  return (
    <div className="space-y-6">

      <div className="flex gap-3">

        <button
          onClick={() => setMode("name")}
          className={`px-4 py-2 rounded-md border ${
            mode === "name"
              ? "bg-slate-800 text-white dark:bg-slate-600"
              : "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setMode("category")}
          className={`px-4 py-2 rounded-md border ${
            mode === "category"
              ? "bg-slate-800 text-white dark:bg-slate-600"
              : "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setMode("group")}
          className="px-4 py-2 rounded-md border bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
        >
          Group by Category
        </button>

      </div>

      <ul className="space-y-4">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            {...item}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>

    </div>
  );
}