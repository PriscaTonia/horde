"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "@/modules";
import { CloseIcon, HamburgerIcon } from "@/icons";
import clsx from "clsx";
import { useMediaQuery } from "@mantine/hooks";
import { ApplicationRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { Btn } from "../button";

const Navbar = () => {
  const { push } = useRouter();
  const [show, setShow] = useState(false);
  const isMobileSize = useMediaQuery("(max-width: 1280px)", false);

  return (
    <nav className="container flex items-center justify-between gap-10 px-10 py-[34px] lg:px-[121px]">
      <Logo />

      <section
        className={clsx(
          "fixed right-0 top-0 flex h-screen w-full max-w-[90%] flex-col items-center gap-16 bg-white py-[34px] shadow-lg xl:relative xl:h-auto xl:max-w-[70%] xl:flex-row xl:justify-between xl:gap-10 xl:bg-transparent xl:py-0 xl:shadow-none",
          isMobileSize && !show && "hidden",
        )}
      >
        {/* mobile close icon */}
        <div className="mx-10 place-self-end rounded-full p-3 hover:bg-app-purple hover:bg-opacity-20 xl:hidden">
          <CloseIcon onClick={() => setShow(false)} />
        </div>

        {/* links */}
        <div className="flex flex-col items-center gap-[34.18px] font-inter xl:flex-row">
          {nav_links.map((i) => {
            return (
              <Link
                key={i.title}
                href={i.path}
                className="border-b-2 border-transparent pb-1 text-lg font-medium capitalize text-app-black-100 hover:border-app-purple"
              >
                {i.title}
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center gap-[46px]">
          <Link
            href={ApplicationRoutes.AUTH_SIGNIN}
            className="rounded-lg px-8 py-3 text-lg font-semibold capitalize text-app-black-100 hover:bg-app-purple hover:bg-opacity-20"
          >
            Login
          </Link>

          <Btn
            onclick={() => push(ApplicationRoutes.AUTH_SIGNUP)}
            label="Sign up"
          />
        </div>
      </section>

      {/* mobile hamburger icon */}
      <div
        className="rounded-full p-2 hover:bg-app-purple hover:bg-opacity-20 xl:hidden"
        onClick={() => setShow(true)}
      >
        <HamburgerIcon />
      </div>
    </nav>
  );
};

export { Navbar };

const nav_links = [
  {
    title: "features",
    path: "/",
  },
  {
    title: "about",
    path: "/",
  },
  {
    title: "contact",
    path: "/",
  },
  {
    title: "pricing",
    path: "/",
  },
];
