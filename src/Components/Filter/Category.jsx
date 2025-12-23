export const Category = () => {
  return (
    <div>
      <h3 className="font-semibold">Category</h3>
      <div className="grid grid-cols-2 gap-[3px]">
        <div className="grid grid-rows-1 gap-1.5">
          <button
            className=" p-1 p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            All Items
          </button>
          <button
            className=" p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            Featured
          </button>
          <button
            className=" p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            New Items
          </button>
        </div>
        <div className="grid grid-rows-1 gap-1.5">
          <button
            className=" p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            On Sale
          </button>
          <button
            className=" p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            Best Seller
          </button>
          <button
            className=" p-1 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            On Sale
          </button>
        </div>
      </div>
    </div>
  );
};
