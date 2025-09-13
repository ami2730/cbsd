"use client";

import Link from "next/link";
import { Home, DollarSign, PieChart, Settings } from "lucide-react";

export interface SidebarItem {
  title: string;
  href: string;
  icon: React.ComponentType<any>;
}

const items: SidebarItem[] = [
  { title: "Dashboard", href: "/", icon: Home },
  { title: "Income & Expenses", href: "/finance", icon: DollarSign },
  { title: "Reports", href: "/reports", icon: PieChart },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r shadow-md flex flex-col">
      <div className="p-4 text-xl font-bold border-b">Finance Dashboard</div>

      {/* Scrollable menu */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        <nav className="flex flex-col space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} href={item.href}>
                <button className="w-full flex items-center p-2 gap-2 rounded-lg hover:bg-gray-100 transition">
                  <Icon className="w-5 h-5" />
                  {item.title}
                </button>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
