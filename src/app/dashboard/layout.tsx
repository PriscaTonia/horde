"use client";
import { DashNavbar, Sidebar } from "@/components";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const isMobileSize = useMedia("(max-width: 1023px)", false);
  const isScreenSmall = useMedia("(max-width: 420px)", false);

  const handleCloseSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isMobileSize) {
      setIsSidebarOpen(false);
    }
  }, [isMobileSize]);

  return (
    <section
      className={clsx(
        "relative flex h-screen w-full bg-[#f5f6fa]",
        isSidebarOpen && "overflow-x-hidden",
      )}
    >
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={handleCloseSidebar}
        isMobileSize={isMobileSize}
      />

      <div
        className={clsx(
          "flex flex-col",
          !isSidebarOpen && isScreenSmall && "w-[calc(100%-70px)] ",
          !isSidebarOpen && !isScreenSmall && "w-[calc(100%-100px)] ",
          isSidebarOpen && "w-[calc(100%-284px)]",
        )}
      >
        <DashNavbar />

        <div
          className={clsx(
            "no-scrollbar h-[85vh] w-full overflow-y-auto lg:h-[90vh]",
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
