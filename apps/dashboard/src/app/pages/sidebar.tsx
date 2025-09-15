"use client";

import { useState } from "react";
import Sidebar, { SidebarItem } from "@repo/ui/layouts/sidebar";
import "@repo/ui/styles/globals.css";
import { Home, PieChart, Settings, ArrowLeftRight, BarChart3} from "lucide-react";

const items: SidebarItem[] = [
  { id: "home", label: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  {
    id: "trasactions",
    label: "Trasactions",
    href: "/trasaction",
    icon: <ArrowLeftRight className="h-5 w-5" />,
  },
  { id: "analysis", label: "Analysis", href: "/analysis", icon: <BarChart3 className="h-5 w-5" /> },
  { id: "reports", label: "Reports", href: "/reports", icon: <PieChart className="h-5 w-5" />, badge: 3 },
  { id: "settings", label: "Settings", href: "/settings", icon: <Settings className="h-5 w-5" /> },
];


export default function SidebarLayout(props) {
   const [active, setActive] = useState('home');
  return (
   
       <div className="h-screen  fixed ">
         <div className="py-2 pb-18 h-full">
          <Sidebar items={items} activeId={active} onNavigate={(i) => setActive(i.id)}/>
         </div>
       </div>
     
  );
}