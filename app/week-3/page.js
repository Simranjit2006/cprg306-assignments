import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Shopping List
        </h1>
        <GroceryItemList />
      </div>
    </main>
  );
}
