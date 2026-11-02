
"use client";

import {
  Search,
  Menu,
  Bell,
  Plus,
} from "lucide-react";

type TopbarProps = {
  onMenuClick: () => void;
};

export default function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-border bg-[#111111]/95 px-5 backdrop-blur-xl md:px-9">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="text-muted hover:text-white lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div>
          <p className="text-xs text-muted">Workspace /</p>
          <p className="text-sm font-medium">Studio</p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <div className="hidden h-10 w-64 items-center gap-2 rounded-lg border border-border bg-[#191919] px-3 md:flex">
          <Search size={16} className="text-muted" />
          <input
            placeholder="Search your vault..."
            className="w-full bg-transparent text-xs text-white outline-none placeholder:text-[#77716b]"
          />
          <span className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted">
            /
          </span>
        </div>

        <button
          aria-label="Notifications"
          className="relative text-muted transition hover:text-white"
        >
          <Bell size={19} />
          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </button>

        <button className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2.5 text-xs font-semibold text-[#17120e] transition hover:bg-[#d68b52] md:px-4">
          <Plus size={16} />
          <span className="hidden sm:inline">New artwork</span>
        </button>
      </div>
    </header>
  );
}
