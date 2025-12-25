import {
  Codesandbox,
  TrendingUp,
  MessageSquare,
  Users,
  Settings,
  Info,
  LogOut,
} from "lucide-react";
export const SideBar = () => {
  return (
    <div className="grid gap-10 w-[20%] place-items-center">
      <h1>LOGO</h1>
      <p>
        <Codesandbox />
      </p>
      <p>
        <TrendingUp />
      </p>
      <p>
        <MessageSquare />
      </p>
      <p>
        <Users />
      </p>
      <p>
        <Settings />
      </p>
      <p>
        <Info />
      </p>
      <p>
        <LogOut />
      </p>
    </div>
  );
};
