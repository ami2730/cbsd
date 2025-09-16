"use client";

import React, { useState } from "react";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/avatar";

export interface HeaderProps {
  onSearch?: (query: string) => void;
  showNotifications?: boolean;
  className?: string; // ✅ allow custom classes
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  showNotifications = true,
  className, // ✅ destructure it
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    onSearch?.(query.trim());
    setQuery("");
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] bg-white border border-gray-200 px-6 py-3 flex items-center justify-between z-50 shadow-md rounded-2xl ${className}`}
    >
      {/* Centered Search */}
      <div className="flex items-center gap-2 flex-1 justify-center">
        <div className="flex items-center gap-2 w-1/2">
          <Input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1 rounded-xl"
          />
          <Button onClick={handleSearch} className="p-2">
            <Search size={18} />
          </Button>
        </div>
      </div>

      {/* Right Side: Notifications + Profile */}
      <div className="flex items-center gap-4">
        {showNotifications && (
          <button className="relative p-2 rounded-full hover:bg-gray-100 transition">
            <Bell size={24} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
        )}

        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/40" alt="@user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
