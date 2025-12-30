export const Header = ({onClear}) => {
  return (
    <div className="flex gap-15 ">
      <h3 className="font-bold p-1">Filter</h3>
      <button onClick={onClear} className="border border-blue-900 text-blue-900 px-1 py-1 rounded cursor-pointer">
        Clear All X
      </button>
    </div>
  );
};
