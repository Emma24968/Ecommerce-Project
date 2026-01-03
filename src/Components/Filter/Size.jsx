const sizes = ["XS", "S", "M", "L", "XL"];

export const Size = ({ onFilter, selection,oncheckStatus }) => {
  const handlefilter = (size) => {
    onFilter(size);
    oncheckStatus(size)
  };
  return (
    <div>
      <h3 className="font-semibold mb-2">Size</h3>

      <div className="grid grid-cols-3 gap-2">
        {sizes.map((size) => (
          <label key={size}>
            <input
              type="radio"
              value={size}
              checked={selection === size}
              className="accent-black"
              onChange={() => handlefilter(size)}
            />
            <span>{size}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
