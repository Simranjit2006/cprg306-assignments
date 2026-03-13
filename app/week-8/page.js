"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems(prev => [...prev, newItem]);
  }

  function handleItemSelect(item) {

    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim()
      .split(" ")[0];

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8">

      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        Shopping List
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="space-y-6">

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <NewItem onAddItem={handleAddItem} />
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>

        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <MealIdeas ingredient={selectedItemName} />
        </div>

      </div>

    </main>
  );
}