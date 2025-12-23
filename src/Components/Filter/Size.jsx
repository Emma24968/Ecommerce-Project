export const Size = () => {
  return (
    <div>
      <h3 className="font-semibold">Size</h3>
      <div className="grid">
        <div className="flex gap-5">
          <input type="radio" />
          <label>XS</label>
          <input type="radio" />
          <label>X</label>
          <input type="radio" />
          <label>M</label>
        </div>
        <div className="flex gap-5">
          <input type="radio" />
          <label>XL</label>
          <input type="radio" />
          <label>L</label>
        </div>
      </div>
    </div>
  );
};
