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


export const Color = () => {
  return (
    <div className="grid grid-cols-5 gap-3">
      {colors.map((color) => (
        <label key={color} className="cursor-pointer">
          <input type="radio" name="color" className="hidden peer" />
          <div
            className={`w-4 h-4 rounded-full bg-${color} peer-checked:ring-2 ${color.class} ring-black`}
          />
        </label>
      ))}
    </div>
  );
};
