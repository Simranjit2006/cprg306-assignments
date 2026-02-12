import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8 transition-colors">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        Shopping List
      </h1>

      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-6 rounded-xl shadow transition-colors">
        <ItemList />
      </div>
    </main>
  );
}
