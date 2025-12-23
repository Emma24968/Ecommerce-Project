export const Rating = () => {
  return (
    <div className="grid ">
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <input type="radio" className="cursor-pointer" />
          <label className="cursor-pointer flex items-center gap-1">
            <span>5</span>
            <span className="text-yellow-400 font-bold">★</span>
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" className="cursor-pointer" />
          <label className="cursor-pointer flex items-center gap-1">
            <span>4</span>
            <span className="text-yellow-400 font-bold">★</span>
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" className="cursor-pointer" />
          <label className="cursor-pointer flex items-center gap-1">
            <span>3</span>
            <span className="text-yellow-400 font-bold">★</span>
          </label>
        </div>
      
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <input type="radio" className="cursor-pointer" />
          <label className="cursor-pointer flex items-center gap-1">
            <span>2</span>
            <span className="text-yellow-400 font-bold">★</span>
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input type="radio" className="cursor-pointer" />
          <label className="cursor-pointer flex items-center gap-1">
            <span>1</span>
            <span className="text-yellow-400 font-bold">★</span>
          </label>
        </div>
      </div>
    </div>
  );
};
