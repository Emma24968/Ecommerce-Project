const colors = [
  { name: "green", class: "bg-green-600" },
  { name: "black", class: "bg-black" },
  { name: "pink", class: "bg-pink-600" },
  { name: "white", class: "bg-white border" },
  { name: "blue", class: "bg-blue-600" },
  { name: "brown", class: "bg-amber-800" },
  { name: "beige", class: "bg-amber-200" },
  { name: "gray", class: "bg-gray-500" },
];

export const Color = ({ onFilter }) => {
  const handlefilter = (color) => {
    onFilter(color);
  };
  return (
    <div className="grid grid-cols-5 gap-3">
      {colors.map((color, index) => (
        <label key={index} className="cursor-pointer">
          <input
            type="radio"
            name="color"
            onChange={() => handlefilter(color.name)}
            className="hidden peer"
          />
          <div
            className={`w-4 h-4 rounded-full peer-checked:ring-2 ${color.class}`}
          />
        </label>
      ))}
    </div>
  );
};
