
"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Clock3,
  ImagePlus,
  MoreHorizontal,
  Sparkles,
  FolderOpen,
  Images,
} from "lucide-react";


const artworks = [
  {
    title: "The quiet wanderer",
    category: "CHARACTER DESIGN",
    date: "Updated 2 hours ago",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=700&q=85",
    className: "h-[260px]",
  },
  {
    title: "Fragments of summer",
    category: "DIGITAL PAINTING",
    date: "Updated yesterday",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=700&q=85",
    className: "h-[200px]",
  },
  {
    title: "A world in blue",
    category: "EXPLORATION",
    date: "Updated 3 days ago",
    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=700&q=85",
    className: "h-[230px]",
  },
  {
    title: "Study no. 04",
    category: "SKETCH",
    date: "Updated 5 days ago",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=85",
    className: "h-[190px]",
  },
];

const projects = [
  {
    name: "Character explorations",
    description: "Building original characters and visual identities",
    count: "12 artworks",
    progress: 72,
    color: "#c8783a",
  },
  {
    name: "Visual journal",
    description: "A collection of everyday moments and ideas",
    count: "8 artworks",
    progress: 45,
    color: "#8a9b88",
  },
  {
    name: "World building",
    description: "Environments, landscapes and imagined places",
    count: "5 artworks",
    progress: 30,
    color: "#8a83a8",
  },
];

const references = [
  {
    title: "Color and atmosphere",
    image:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&q=80",
  },
  {
    title: "Architecture studies",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=400&q=80",
  },
  {
    title: "Light and shadows",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&q=80",
  },
];


export default function StudioPage() {
  return (
    <main className="mx-auto max-w-[1600px] px-5 py-10 md:px-9">
      <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
        Your personal creative space
      </p>

      <h1 className="text-5xl font-medium tracking-tight">
        Your creative space.
      </h1>

      <p className="mt-4 text-sm text-muted">
        A place for your ideas, inspiration and everything you create.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          ["Total artworks", "24"],
          ["Active projects", "03"],
          ["Saved references", "48"],
          ["Recently updated", "06"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-4 text-3xl">{value}</p>
          </div>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="text-2xl font-medium">Your creative journey</h2>
        <p className="mt-2 text-sm text-muted">
          Your artwork gallery will live here.
        </p>
      </section>
    </main>
  );
}

