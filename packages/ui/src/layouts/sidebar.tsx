"use client";
import React, { useState } from "react";
import { Button } from "@repo/ui/components/button";
import { ChevronLeft, Home, Settings, Users, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export type SidebarItem = {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  children?: SidebarItem[];
};

type SidebarProps = {
  items: SidebarItem[];
  activeId?: string;
  onNavigate?: (item: SidebarItem) => void;
  collapsed?: boolean;
};

const DEFAULT_ICONS = {
  home: <Home className="h-5 w-5" />,
  reports: <PieChart className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  settings: <Settings className="h-5 w-5" />,
};

function ItemRow({
  item,
  depth = 0,
  activeId,
  collapsed,
  onClick,
}: {
  item: SidebarItem;
  depth?: number;
  activeId?: string;
  collapsed?: boolean;
  onClick: (i: SidebarItem) => void;
}) {
  const hasChildren = item.children && item.children.length > 0;
  const paddingLeft = Math.min(16 + depth * 16, 56);
  const isActive = item.href === activeId;

  return (
    <li className="relative group">
      <button
        onClick={() => onClick(item)}
        className={`flex items-center w-full gap-3 py-2.5 px-3 rounded-lg text-sm font-medium transition-all duration-200 
          ${isActive ? "bg-black text-white" : "hover:bg-gray-100 dark:hover:bg-slate-800"}`}
        style={{ paddingLeft }}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="flex-none dark:text-black">
          {item.icon ?? DEFAULT_ICONS.home}
        </span>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            className="flex-1 text-left truncate"
          >
            {item.label}
          </motion.span>
        )}
        {item.badge && !collapsed && (
          <span className="ml-2 inline-flex items-center justify-center rounded-full bg-gray-400 text-xs font-semibold px-2 py-0.5">
            {item.badge}
          </span>
        )}
      </button>
    </li>
  );
}

export default function Sidebar({
  items,
  activeId,
  onNavigate,
  collapsed: collapsedProp = false,
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(collapsedProp);
  const router = useRouter();
  const pathname = usePathname();

  function handleClick(item: SidebarItem) {
    if (item.href) router.push(item.href);
    if (onNavigate) onNavigate(item);
  }

  return (
    <aside
      className={`flex flex-col h-[90%] shrink-0 bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-2xl transition-all duration-300 
        ${collapsed ? "w-16" : "w-48"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 p-4 border-b dark:border-slate-800">
        {!collapsed && (
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              Amanuel
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-400">
              Admin
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setCollapsed((s) => !s)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="hover:bg-gray-200 dark:hover:bg-slate-800 p-2 rounded-lg"
        >
          <ChevronLeft
            className={`h-4 w-4 transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        <ul className="space-y-1">
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              activeId={pathname}
              collapsed={collapsed}
              onClick={handleClick}
            />
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div
        className={`p-4 border-t dark:border-slate-800 bg-gray-50 dark:bg-slate-900 flex items-center transition-all duration-300 
          ${collapsed ? "justify-center" : "justify-between"} rounded-b-2xl`}
      >
        {!collapsed ? (
          <>
            <span className="text-xs text-gray-500">v1.0.0</span>
            <Button size="sm" variant="secondary">
              Logout
            </Button>
          </>
        ) : (
          <button className="text-xs text-gray-400">•••</button>
        )}
      </div>
    </aside>
  );
}
