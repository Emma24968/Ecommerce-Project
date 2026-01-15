const ratings = ["★", "★★", "★★★", "★★★★", "★★★★★"];
export const Card = ({
  title,
  image,
  rating,
  stock,
  onButtonClick,
  productAdd,
}) => {

  return (
    <div className=" w-[80%] bg-white m-7 p-3 rounded">
      <div className=" rounded w-full h-[200px] flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between mt-3">
        <div>
          <p className="font-semibold">{title}</p>
          <p>
            Rating:
            <span className="text-yellow-400 font-bold">
              {ratings[rating - 1]}
            </span>
          </p>
          <p>Available: {stock}</p>
        </div>

        <button
          onClick={onButtonClick}
          className="w-10 h-10 self-end cursor-pointer rounded bg-blue-800 text-[20px] text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};
