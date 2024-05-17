import type { Metadata } from "next";
import { open_sans, inter } from "@/utils/font";
import "./globals.css";
import clsx from "clsx";
import { Provider } from "@/utils/provider";

export const metadata: Metadata = {
  title: "HORDE",
  description: "Take control of your money, one budget at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          open_sans.variable,
          inter.variable,
          "mx-auto w-full max-w-[1440px] bg-app-off-white",
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
