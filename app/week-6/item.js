export default function Item({ name, quantity, category }) {
  return (
    <li
      className="flex justify-between items-center 
      bg-slate-50 dark:bg-slate-700 
      p-4 rounded-lg border 
      border-slate-200 dark:border-slate-600
      transition-colors"
    >
      <p className="font-medium text-slate-800 dark:text-slate-100">
        {name}
      </p>

      <p className="text-slate-700 dark:text-slate-300">
        Quantity: {quantity}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        Category: {category}
      </p>
    </li>
  );
}
