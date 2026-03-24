export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="p-4 rounded-lg border bg-white dark:bg-slate-800 cursor-pointer hover:bg-purple-100 dark:hover:bg-slate-700 transition"
    >
      <p className="font-semibold text-slate-800 dark:text-slate-100">
        {name}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-300">
        Quantity: {quantity}
      </p>

      <p className="text-sm text-purple-500 capitalize">
        {category}
      </p>
    </li>
  );
}