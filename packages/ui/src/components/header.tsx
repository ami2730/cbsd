"use client";

import React from "react";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { Bell, Search } from "lucide-react";

export interface HeaderProps {
  userName: string;
  onSearch?: (query: string) => void;
  showNotifications?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  userName,
  onSearch,
  showNotifications = true,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-50 shadow-md">
      {/* Welcome */}
      <div className="text-lg font-semibold">
        Welcome, <span className="text-blue-600">{userName}</span>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-1/3">
        <Input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch && onSearch(e.target.value)}
          className="flex-1"
        />
        <Button variant="default" className="p-2">
          <Search size={18} />
        </Button>
      </div>

      {/* Notifications */}
      {showNotifications && (
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
          <Bell size={24} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>
      )}
    </header>
  );
};

export default Header;
