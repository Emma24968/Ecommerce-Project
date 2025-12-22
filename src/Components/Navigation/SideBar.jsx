import { Codesandbox, TrendingUp, MessageSquare, Users, Settings, Info, LogOut } from "lucide-react";
export const SideBar =() =>{
    return(
        <div>
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
      <p><LogOut /></p>
        </div>
    )
}