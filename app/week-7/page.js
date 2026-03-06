"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems(prev => [...prev, newItem]);
  }

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8">

      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        Shopping List
      </h1>

      <div className="max-w-2xl mx-auto space-y-6">

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <ItemList items={items} />
        </div>

      </div>

    </main>
  );
}