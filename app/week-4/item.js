export default function Item({ name, quantity, category }) {
  return (
    <li
      className="flex justify-between items-center bg-slate-50 p-4 rounded-lg border"
    >
      <p className="font-medium text-slate-800">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="text-sm text-slate-600">
        Category: {category}
      </p>
    </li>
  );
}