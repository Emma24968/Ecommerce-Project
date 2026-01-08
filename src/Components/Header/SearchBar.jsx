import { Bell, CircleUserRound, MessageSquare, Search } from "lucide-react";

export const SearchBar = ({ search ,onSearch}) => {
  return (
    <div className="flex mt-5 ">
      <div className="flex items-center p-5  bg-gray-50 mb-[20px] w-[93%] h-8 rounded-[5px] ">
        <input
          type="text"
          placeholder="search something"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="border-none w-[96%] outline-none p-2 rounded-[5px]  bg-transparent"
        />
        <span className="pr-5 text-[20px]">|</span>
        <Search className="cursor-pointer" />
      </div>
      <div className="grid grid-cols-3 w-[12%]">
        <span>
          <Bell />
        </span>
        <span>
          <MessageSquare />
        </span>
        <span>
          <CircleUserRound />
        </span>
      </div>
    </div>
  );
};
