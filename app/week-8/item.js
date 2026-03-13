export default function Item({ name, quantity, category, onSelect }) {

  return (
    <li
      onClick={onSelect}
      className="
        flex justify-between items-center
        bg-slate-50 p-4 rounded-lg border
        cursor-pointer hover:bg-slate-100
      "
    >

      <p className="font-medium text-slate-800">{name}</p>

      <p>Quantity: {quantity}</p>

      <p className="text-sm text-slate-600">
        Category: {category}
      </p>

    </li>
  );
}