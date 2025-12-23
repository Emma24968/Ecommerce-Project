export const Color = () => {
  return (
    <div className="color-filter">
      <div className="flex">
        {" "}
        <div className=" p-1 m-1 rounded-full w-3 h-3 cursor-pointer">X</div>
        <div className="bg-red-700 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
        <div className="bg-yellow-700 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
        <div className="bg-indigo-100 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
      </div>
      <div className="row">
        {" "}
        <div className="bg-green-700 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
        <div className="bg-cyan-700 p-2 m-2 w-3 h-3 rounded-full cursor-pointer">
          {" "}
        </div>
        <div className="bg-black p-2 m-2 w-3 h-3 rounded-full cursor-pointer">
          {" "}
        </div>
        <div className="bg-pink-700 p-2 m-2 w-3 h-3 rounded-full cursor-pointer">
          {" "}
        </div>
      </div>
    </div>
  );
};
