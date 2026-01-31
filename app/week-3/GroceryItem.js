export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
      <span className="font-semibold">{name}</span>
      <span className="text-sm text-gray-600">
        {quantity} • {category}
      </span>
    </li>
  );
}