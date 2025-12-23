;

export const Size = () => {
  return (
    <div>
      <h3 className="font-semibold">Size</h3>
      <div className="grid">
        <div className="flex gap-5">
          <input type="radio" id="testing"/><label for="testing">XS</label>
          <input type="radio" id="testing"/><label for="testing">X</label>
          <input type="radio" id="testing"/><label for="testing">M</label>
        </div>
        <div className="flex gap-5">
                    <input type="radio" id="testing"/><label for="testing">XL</label>
                    <input type="radio" id="testing"/><label for="testing">L</label>
        </div>
      </div>
    </div>
  );
};
