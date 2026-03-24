"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {

  const [mode, setMode] = useState("name");

  const buttonStyle = (active) =>
    `px-4 py-2 rounded-md border transition ${
      active
        ? "bg-purple-600 text-white"
        : "bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-100"
    }`;

  if (mode === "group") {

    const grouped = items.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});

    return (
      <div className="space-y-6">

        <div className="flex gap-3">
          <button onClick={() => setMode("name")} className={buttonStyle(false)}>Name</button>
          <button onClick={() => setMode("category")} className={buttonStyle(false)}>Category</button>
          <button className={buttonStyle(true)}>Grouped</button>
        </div>

        {Object.keys(grouped).sort().map(category => (
          <div key={category}>
            <h2 className="font-bold text-purple-600 capitalize mt-4">
              {category}
            </h2>

            <ul className="space-y-3 mt-2">
              {grouped[category]
                .sort((a,b)=>a.name.localeCompare(b.name))
                .map(item => (
                  <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
                ))}
            </ul>
          </div>
        ))}

      </div>
    );
  }

  const sortedItems = [...items].sort((a, b) =>
    mode === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="space-y-6">

      <div className="flex gap-3">
        <button onClick={() => setMode("name")} className={buttonStyle(mode==="name")}>Name</button>
        <button onClick={() => setMode("category")} className={buttonStyle(mode==="category")}>Category</button>
        <button onClick={() => setMode("group")} className={buttonStyle(false)}>Group</button>
      </div>

      <ul className="space-y-3">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>

    </div>
  );
}