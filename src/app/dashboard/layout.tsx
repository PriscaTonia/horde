"use client";
import { Sidebar } from "@/components";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobileSize = useMedia("(max-width: 1023px)", false);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isMobileSize) {
      setIsSidebarOpen(false);
    }
  }, [isMobileSize]);
  return (
    <section className="flex min-h-screen w-full flex-row bg-[#f5f6fa]">
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={handleCloseSidebar}
        isMobileSize={isMobileSize}
      />

      <div className="w-full">{children}</div>
    </section>
  );
}
