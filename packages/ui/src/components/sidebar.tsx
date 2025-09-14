import React, { useState } from "react";
import { Button } from "@repo/ui/components/button"; // shadcn button (adjust path to your repo)

import { ChevronLeft, Home, Settings, Users, PieChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation"; 

// --- Types ---
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
  /** currently active item id (optional) */
  activeId?: string;
  /** callback when an item is clicked (optional) */
  onNavigate?: (item: SidebarItem) => void;
  /** initial collapsed state */
  collapsed?: boolean;
  /** width when expanded */
  width?: string; // e.g. 'w-64'
};

// --- Default icons for demo ---
const DEFAULT_ICONS = {
  home: <Home className="h-5 w-5" />,
  reports: <PieChart className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  settings: <Settings className="h-5 w-5" />,
};

// --- Helper: Item row ---
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
  const paddingLeft = Math.min(12 + depth * 12, 48);
  const isActive = item.id === activeId;

  return (
    <li>
      <button
        onClick={() => onClick(item)}
        className={`group flex items-center w-full gap-3 py-2 px-3 rounded-md text-sm transition-colors duration-150
          ${isActive ? "bg-slate-100 dark:bg-slate-800 font-medium" : "hover:bg-slate-50 dark:hover:bg-slate-900"}`}
        style={{ paddingLeft }}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="flex-none">
          {item.icon ?? DEFAULT_ICONS.home}
        </span>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              className="flex-1 text-left truncate"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>

        {item.badge && !collapsed && (
          <span className="ml-2 inline-flex items-center justify-center rounded-full bg-slate-200 px-2 py-0.5 text-xs">{item.badge}</span>
        )}

        {hasChildren && !collapsed && (
          <svg
            className="h-4 w-4 opacity-60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      {hasChildren && (
        <ul className="mt-1 space-y-1">
          {item.children!.map((c) => (
            <ItemRow
              key={c.id}
              item={c}
              depth={depth + 1}
              activeId={activeId}
              collapsed={collapsed}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

// --- Sidebar Component ---
export default function Sidebar({
  items,
  activeId,
  onNavigate,
  collapsed: collapsedProp = false,
  width = "w-64",
}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(collapsedProp);
  const router = useRouter();

  function handleClick(item: SidebarItem) {
    if (item.href) {
      router.push(item.href); // navigate to href
    }
  }

  return (
    <aside
      className={`flex flex-col bg-white dark:bg-slate-950 border-r dark:border-slate-800 h-full  shrink-0`}
      aria-label="Sidebar"
    >
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-3">
         
          {!collapsed && (
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold">Amanuel</span>
              <span className="text-xs text-slate-500">Admin</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setCollapsed((s) => !s)} aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}>
            <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`} />
          </Button>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        <ul className="space-y-1">
          {items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              activeId={activeId}
              collapsed={collapsed}
              onClick={handleClick}
            />
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t dark:border-slate-800  bottom-0 bg-gray-800 text-white">
        {!collapsed ? (
          <div className="flex items-center justify-between">
            <div className="text-xs text-slate-500">v1.0.0</div>
            <Button size="sm" variant="secondary">Logout</Button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button className="text-xs text-slate-400">•••</button>
          </div>
        )}
      </div>
    </aside>
  );
}

