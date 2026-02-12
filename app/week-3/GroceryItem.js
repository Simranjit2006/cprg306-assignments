export default function Item({ name, quantity, category }) {
  return (
    <li
      className="flex justify-between items-center 
      bg-slate-50 dark:bg-slate-700 
      p-4 rounded-lg border 
      border-slate-200 dark:border-slate-600
      transition-colors"
    >
      <span className="font-medium text-slate-800 dark:text-slate-100">
        {name}
      </span>

      <span className="text-sm text-slate-600 dark:text-slate-300">
        Qty: {quantity} | {category}
      </span>
    </li>
  );
}
