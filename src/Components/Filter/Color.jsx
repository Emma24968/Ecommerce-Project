export const Color = () => {
  return (
    <div className="color-filter">
      <h1 className="font-semibold">Color</h1>
      <div className="flex gap-3">
        {" "}
        <div
          className="
    m-2
    w-4 h-4
    rounded-full
    flex items-center justify-center
     text-[15px]
    shadow-[0_0_2px_rgba(0,0,0,7.3)]
    cursor-pointer
  "
        >
          X
        </div>
        <div className="bg-red-700 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
        <div className="bg-yellow-700 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
        <input
          type="radio"
          name="category"
          defaultChecked
          className="accent-blue-500 w-4"
        />
        <div className="bg-indigo-100 p-2 m-2 rounded-full w-3 h-3 cursor-pointer"></div>
      </div>
      <div className="flex gap-3">
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
