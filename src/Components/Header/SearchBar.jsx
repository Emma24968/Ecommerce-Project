import { Bell, CircleUserRound, MessageSquare, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex mt-5 ">
        <div className="flex items-center p-4  bg-gray-50 mb-[20px] w-[85%] h-8 rounded-[5px] ">
          <input type="text" placeholder="search something"className="border-none w-[96%] outline-none p-2 rounded-[5px]  bg-transparent" />
          <span className="pr-5 text-[20px]">|</span>
          <Search />
      </div>
          <div className="flex gap-4 w-[10%]">
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
