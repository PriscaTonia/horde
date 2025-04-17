import { Facebook, Linkedin, Twitter } from "@/icons";
import { Logo, Newsletter } from "@/modules";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col-reverse gap-[30px] px-10 pb-[55px] lg:flex-col lg:px-[121px]">
        <Newsletter />

        {/* footer section */}
        <footer className="order-3 flex flex-col gap-16 py-[38px] font-inter lg:order-2 lg:flex-row">
          <div className="flex w-full flex-col gap-8 lg:max-w-[27%]">
            <Logo />

            <p className="text-[#667085]">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          <section className="flex w-full flex-wrap justify-between gap-8 lg:max-w-[68%] lg:flex-row">
            {/* product list */}
            <div className="flex flex-col gap-3">
              <h6 className="pb-1 text-sm font-semibold text-[#98A2B3]">
                Product
              </h6>

              {product_list.map((i) => (
                <Link
                  className="text-base font-semibold text-[#667085]"
                  key={i.title}
                  href={i.path}
                >
                  {i.title}{" "}
                  {i.title === "Solutions" && (
                    <span className="rounded-full bg-[#ECFDF3] px-2 py-[2px] text-[#027A48]">
                      New
                    </span>
                  )}
                </Link>
              ))}
            </div>

            {/* company list */}
            <div className="flex flex-col gap-3">
              <h6 className="pb-1 text-sm font-semibold text-[#98A2B3]">
                Company
              </h6>

              {company_list.map((i) => (
                <Link
                  className="text-base font-semibold text-[#667085]"
                  key={i.title}
                  href={i.path}
                >
                  {i.title}
                </Link>
              ))}
            </div>

            {/* resources list */}
            <div className="flex flex-col gap-3">
              <h6 className="pb-1 text-sm font-semibold text-[#98A2B3]">
                Resources
              </h6>

              {resources_list.map((i) => (
                <Link
                  className="text-base font-semibold text-[#667085]"
                  key={i.title}
                  href={i.path}
                >
                  {i.title}
                </Link>
              ))}
            </div>

            {/* social list */}
            <div className="flex flex-col gap-3">
              <h6 className="pb-1 text-sm font-semibold text-[#98A2B3]">
                Social
              </h6>

              {social_list.map((i) => (
                <Link
                  className="text-base font-semibold text-[#667085]"
                  key={i.title}
                  href={i.path}
                >
                  {i.title}
                </Link>
              ))}
            </div>

            {/* legal list */}
            <div className="flex flex-col gap-3">
              <h6 className="pb-1 text-sm font-semibold text-[#98A2B3]">
                Legal
              </h6>

              {legal_list.map((i) => (
                <Link
                  className="text-base font-semibold text-[#667085]"
                  key={i.title}
                  href={i.path}
                >
                  {i.title}
                </Link>
              ))}
            </div>
          </section>
        </footer>

        {/* social icons */}
        <section className="order-1 flex flex-col justify-between gap-2 border-t border-[#EAECF0] py-8 lg:order-3 lg:flex-row lg:gap-10">
          <p className="text-base text-[#98A2B3]">
            © 2024 Horde. All rights reserved.
          </p>

          <div className="flex items-center gap-3 sm:gap-6">
            {icon_list.map((x, i) => (
              <Link href={x.path} key={i}>
                {x.icon}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export { Footer };

const product_list = [
  {
    title: "Overview",
    path: "/",
  },
  {
    title: "Pricing",
    path: "/",
  },
  {
    title: "Tutorials",
    path: "/",
  },
];

const company_list = [
  {
    title: "About Us",
    path: "/",
  },
  {
    title: "Careers",
    path: "/",
  },
  {
    title: "Contact",
    path: "/",
  },
];

const resources_list = [
  {
    title: "Blog",
    path: "/",
  },
  {
    title: "Newsletter",
    path: "/",
  },
  {
    title: "Help Center",
    path: "/",
  },
];

const social_list = [
  {
    title: "Twitter",
    path: "/",
  },
  {
    title: "LinkedIn",
    path: "/",
  },
  {
    title: "Facebook",
    path: "/",
  },
];

const legal_list = [
  {
    title: "Terms",
    path: "/",
  },
  {
    title: "Privacy",
    path: "/",
  },
  {
    title: "Cookies",
    path: "/",
  },
];

const icon_list = [
  {
    icon: <Twitter />,
    path: "/",
  },
  {
    icon: <Linkedin />,
    path: "/",
  },
  {
    icon: <Facebook />,
    path: "/",
  },
];
