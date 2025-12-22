import { Bell, CircleUserRound, MessageSquare, Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="">
        <div className="flex items-center bg-[azure] h-8 rounded-[5px] ">
          <input type="text" placeholder="search something"className="border-none p-2 rounded-[5px]  bg-transparent" />
          <span className="pr-5 text-[20px]">|</span>
          <Search />
      </div>
          <div className="flex content-between">
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
