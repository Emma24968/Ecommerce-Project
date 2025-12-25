import {
  Codesandbox,
  TrendingUp,
  MessageSquare,
  Users,
  Settings,
  Info,
  LogOut,
} from "lucide-react";
import logo from '../../assets/Media_Folder/logo.png'
export const SideBar = () => {
  return (
<div className="sticky top-0 h-100 gap-4 grid  pl-4 pt-2 bg-white overflow-hidden">
<img src={logo} alt="logo" className="w-70 object-contain" />
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
