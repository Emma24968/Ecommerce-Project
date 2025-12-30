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
 <div className="sticky top-0 h-screen w-full flex flex-col gap-4 pl-4 pt-2 bg-white overflow-hidden transform-gpu will-change-transform">
      <img src={logo} alt="logo" className="w-70 object-contain mb-4" />
      <p><Codesandbox /></p>
      <p><TrendingUp /></p>
      <p><MessageSquare /></p>
      <p><Users /></p>
      <p><Settings /></p>
      <p><Info /></p>
      <p className="mt-auto mb-6"><LogOut /></p>
    </div>  );
};
