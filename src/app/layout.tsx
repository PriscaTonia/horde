import type { Metadata } from "next";
import { open_sans, inter } from "@/utils/font";
import "./globals.css";
import clsx from "clsx";
import { Provider } from "@/utils/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          "w-full bg-app-off-white",
        )}
      >
        <Provider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {children}
        </Provider>
      </body>
    </html>
  );
}
