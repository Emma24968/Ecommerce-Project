export const Category = () => {
  return (
    <div>
      <h3 className="font-bold">Category</h3>
      <div className="grid grid-cols-2 gap-[5px]">
        <div className="grid grid-rows-2 gap-2.5">
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            All Items
          </button>
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            Featured
          </button>
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            New Items
          </button>
        </div>
        <div className="grid grid-rows-2 gap-2.5">
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            On Sale
          </button>
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            Best Seller
          </button>
          <button
            className=" px-3 py-2 border border-gray-300 bg-gray-100 rounded cursor-pointer
           "
          >
            On Sale
          </button>
        </div>
      </div>
    </div>
  );
};
