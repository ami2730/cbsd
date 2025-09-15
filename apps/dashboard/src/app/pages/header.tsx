"use client";

import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { Bell, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function HeaderBar(props) {
  return (
    <header className="w-full h-16 border-b bg-white flex items-center justify-between px-4 shadow-sm">
      {/* Left: Search */}
      <div className="flex items-center gap-2 w-full max-w-md">
        <Search className="w-4 h-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search..."
          className="w-full"
        />
      </div>

      {/* Right: Icons & Profile */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5 text-gray-600" />
        </Button>
        {/* User Avatar */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/avatar.png"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="hidden md:inline text-sm font-medium text-gray-700">
            Amanuel
          </span>
        </div>
      </div>
    </header>
  );
}
