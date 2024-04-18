"use client";

import { Btn } from "@/components";
import { Switch } from "@/icons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-auto flex flex-col items-center justify-between gap-[124px] p-6 lg:px-[137px] lg:py-[56px]">
      {/* hero section */}
      <section className="flex flex-col items-center gap-[42px]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-open_sans text-center text-[50px] font-bold leading-[60px] tracking-tight text-black lg:text-[72px] lg:leading-[80px]">
            Take <span className="text-app-purple">control</span> of your money
            one budget at a time
          </h1>
          <p className="text-center text-base text-black lg:max-w-[60%] lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel
            iure ratione libero ut reiciendis nisi in ipsam, nostrum nulla
            cumque, consequuntur molestias harum asperiores voluptatum? Itaque
            ex architecto quod.
          </p>
          <div className="w-full max-w-[60%] lg:max-w-[20%]">
            <Btn label="Get Started" size="big" />
          </div>
        </div>

        <Image src="/home/hero.png" alt="" width={1166} height={408} />
      </section>

      {/* create a budget section */}
      <section className="flex flex-col items-center gap-[68px]">
        <div className="flex flex-col items-center gap-3 lg:gap-6">
          <h2 className="font-inter text-center text-[30px] font-bold leading-[40px] tracking-tight text-black lg:text-[52px] lg:leading-[62px]">
            Create a budget that works for you
          </h2>
          <p className="text-center text-base text-black lg:max-w-[80%] lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Habitasse nec dapibus vel
            elit aliquam sit pellentesque.
          </p>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-[74px]">
          <aside className="flex flex-col gap-5 lg:w-[50%]">
            <h4 className="text-3xl font-semibold text-black lg:text-[42px] lg:leading-[48px]">
              Customize a budget that is uniquely yours
            </h4>
            <p className="text-base text-black lg:mb-[22px] lg:max-w-[80%] lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Ut tristique consectetur
              vivamus pretium quam suscipit ac.
            </p>

            <Btn label="Learn More" />
          </aside>

          <Image
            src="/home/img_one.png"
            className="lg:w-[50%]"
            alt=""
            width={1166}
            height={408}
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-[74px]">
          <Image
            src="/home/img_two.png"
            className="lg:w-[50%]"
            alt=""
            width={1166}
            height={408}
          />

          <aside className="flex flex-col gap-5 lg:w-[50%]">
            <h4 className="text-3xl font-semibold text-black lg:text-[42px] lg:leading-[48px]">
              Keep track of your expenses accurately
            </h4>
            <p className="text-base text-black lg:mb-[22px] lg:max-w-[80%] lg:text-xl">
              Lorem ipsum dolor sit amet consectetur. Ut tristique consectetur
              vivamus pretium quam suscipit ac.
            </p>

            <Btn label="Learn More" />
          </aside>
        </div>
      </section>

      {/* elevate your budget section */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 lg:gap-6">
          <h2 className="font-open_sans  text-[30px] font-semibold leading-[40px] tracking-tight text-black lg:max-w-[50%] lg:text-[52px] lg:leading-[64px]">
            Elevate your budgeting experience with
            <span className="text-app-purple"> Horde</span>
          </h2>
          <p className="text-base text-black lg:max-w-[45%] lg:text-xl">
            Effortless budgeting for everyone, everywhere. Harness the power of
            smart budgeting tools at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {elevate_content.map((x, i) => (
            <div
              key={i}
              className="col-span-1 flex flex-col gap-1 rounded-[14px] bg-white p-6"
            >
              <Switch />
              <p className="font-inter mt-5 text-base font-semibold text-[#16192C]">
                {x.title}
              </p>
              <p>{x.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* financial empowerment section */}
      <section className="flex flex-col items-center gap-[68px]">
        <div className="flex flex-col items-center gap-6">
          <h2 className="font-inter text-center text-[38px] font-bold leading-[40px] tracking-tight text-black lg:text-[69px] lg:leading-[62px]">
            Embark on your journey to financial empowerment
          </h2>
          <p className="text-center text-base text-black lg:max-w-[60%] lg:text-xl">
            Lorem ipsum dolor sit amet consectetur. Habitasse nec dapibus vel
            elit aliquam sit pellentesque.
          </p>
          <div className="flex flex-wrap gap-3 lg:gap-12">
            <Btn label="Sign Up Now" />
            <Btn label="Contact Us" variant="secondary" />
          </div>
        </div>

        <Image src="/home/img_three.png" alt="" width={1166} height={408} />
      </section>
    </main>
  );
}

const elevate_content = [
  {
    title: "Easy-to-use",
    text: "Lorem ipsum dolor sit amet consectetur. Ut tristique consectetur vivamus pretium quam suscipit ac.",
  },
  {
    title: "Live insights",
    text: "Lorem ipsum dolor sit amet consectetur. Ut tristique consectetur vivamus pretium quam suscipit ac.",
  },
  {
    title: "Expense tracking",
    text: "Lorem ipsum dolor sit amet consectetur. Ut tristique consectetur vivamus pretium quam suscipit ac.",
  },
];
