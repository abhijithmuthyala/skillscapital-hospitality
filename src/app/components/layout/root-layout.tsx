"use client";

import React, { useLayoutEffect, useRef, useState } from "react";

export default function RootLayoutGrid({
  topSlot,
  leftSlot,
  rightSlot,
}: {
  topSlot: React.ReactNode;
  leftSlot: React.ReactNode;
  rightSlot: React.ReactNode;
}) {
  const [sidebarTop, setSidebarTop] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(function fixSidebarPosition() {
    if (!headerRef.current) return;
    setSidebarTop(headerRef.current.getBoundingClientRect().bottom);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[240px_1fr] gap-y-3">
      <div
        ref={headerRef}
        className="col-span-2 sticky top-0 backdrop-blur-lg row-start-1"
      >
        {topSlot}
      </div>
      <div
        className="col-span-1 col-start-1 shadow-xl shadow-zinc-400 sticky hidden md:block overflow-y-auto"
        style={{
          top: `${sidebarTop}px`,
          height: `calc(100vh - ${sidebarTop} * 1px)`,
        }}
      >
        {leftSlot}
      </div>
      <div className="md:col-span-1 col-span-2">{rightSlot}</div>
    </div>
  );
}
