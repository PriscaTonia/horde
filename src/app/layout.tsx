import type { Metadata } from "next";
import { open_sans, inter } from "@/utils/font";
import "./globals.css";
import clsx from "clsx";
import { Provider } from "@/utils/provider";
import { Footer, Navbar } from "@/components";

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
          "bg-app-off-white mx-auto w-full max-w-[1440px]",
        )}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
