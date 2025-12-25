
export const Card = ({title, image, rating, stock}) => {
  return (
   <div className=" w-[60%] bg-white m-10 p-4 rounded">
  <div className="bg-gray-500 rounded w-full h-[260px] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt="Cashmere"
      className="w-full h-full object-contain" 
    />
  </div>

  <div className="flex justify-between mt-3">
    <div>
      <p className="font-semibold">{title}</p>
      <p>
        Rating:
        <span className="text-yellow-400 font-bold">★★★★★</span>
      </p>
      <p>Available: {stock}</p>
    </div>

    <button className="w-10 h-10 self-end rounded bg-blue-800 text-[20px] text-white">
      +
    </button>
  </div>
</div>

  );
};
