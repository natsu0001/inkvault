
"use client";

import Link from "next/link";
import {
  Aperture,
  LayoutDashboard,
  Images,
  FolderKanban,
  Bookmark,
  PanelsTopLeft,
  Settings,
  CircleHelp,
  Plus,
  X,
} from "lucide-react";

const navigation = [
  { label: "Studio", href: "/", icon: LayoutDashboard },
  { label: "Artwork", href: "/artwork", icon: Images },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "References", href: "/references", icon: Bookmark },
  { label: "Moodboards", href: "/moodboards", icon: PanelsTopLeft },
];

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && (
        <button
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[250px] flex-col border-r border-border bg-[#151515] px-5 py-6 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-[#17120e]">
              <Aperture size={21} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">inkvault</p>
              <p className="text-[10px] tracking-[0.2em] text-muted">
                YOUR CREATIVE SPACE
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="text-muted lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716b]">
          Workspace
        </div>

        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = item.label === "Studio";

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  active
                    ? "bg-[#29231e] text-[#e5a16e]"
                    : "text-[#a39a90] hover:bg-[#222] hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
                {active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716b]">
          Personal
        </div>

        <button className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-[#222] hover:text-white">
          <Settings size={18} />
          Settings
        </button>

        <button className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-[#222] hover:text-white">
          <CircleHelp size={18} />
          Help & support
        </button>

        <div className="mt-auto">
          <div className="rounded-xl border border-border bg-[#1c1c1c] p-4">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#30251d] text-accent">
                <Plus size={15} />
              </div>
              <span className="text-xs font-medium">Keep creating</span>
            </div>
            <p className="mb-3 text-xs leading-5 text-muted">
              Every little idea deserves a place to grow.
            </p>
            <button className="w-full rounded-lg bg-accent py-2.5 text-xs font-semibold text-[#17120e] transition hover:bg-[#d68b52]">
              New artwork
            </button>
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#514034] text-sm font-semibold text-[#f4eee5]">
              A
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium">My Studio</p>
              <p className="text-xs text-muted">Personal workspace</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
