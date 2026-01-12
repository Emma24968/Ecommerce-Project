import {
  Bell,
  CircleUserRound,
  MessageSquare,
  Search,
  ShoppingCart,
} from "lucide-react";

export const SearchBar = ({ search, onSearch,count }) => {
  return (
    <div className="flex mt-5 ">
      <div className="flex items-center p-5  bg-gray-50 mb-[20px] w-[85%] h-8 rounded-[5px] ">
        <input
          type="text"
          placeholder="search something"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="border-none w-[95%] outline-none p-2 rounded-[5px]  bg-transparent"
        />
        <span className="pr-5 text-[20px]">|</span>
        <Search className="cursor-pointer" size={28} />
      </div>
      <div className="grid grid-cols-4 w-[11%]">
        <span>
          <Bell size={28} />
        </span>
        <span>
          <MessageSquare size={28} />
        </span>
        <div className="">
          <span>
            <ShoppingCart size={28} />
          </span>
          <span
            className=" w-[15px]
  h-[15px]
  flex
  items-center
  justify-center
  -mt-[35px]
  ml-[20px]
  rounded-[11px]
  text-[11px] bg-red-800 text-white"
          >
            {count}
          </span>
        </div>
        <span>
          <CircleUserRound size={28} />
        </span>
      </div>
    </div>
  );
};
