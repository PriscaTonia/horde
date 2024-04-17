import { Inter, Open_Sans } from "next/font/google";

export const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
