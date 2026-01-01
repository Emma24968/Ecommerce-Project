const ratings = [5, 4, 3, 2, 1];

export const Rating = () => {
  return (
    <div className="grid grid-cols-3 ">
      {ratings.map((rating) => (
        <label key={rating}>
          <input type="radio" value={rating} />
          <span>
            {rating}
            <span className="text-yellow-400 font-bold">★</span>
          </span>
        </label>
      ))}
    </div>
  );
};
