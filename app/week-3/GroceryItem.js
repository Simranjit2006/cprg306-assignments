export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center bg-slate-50 p-4 rounded-lg border">
      <span className="font-medium text-slate-800">
        {name}
      </span>
      <span className="text-sm text-slate-600">
        Qty: {quantity} | {category}
      </span>
    </li>
  );
}
