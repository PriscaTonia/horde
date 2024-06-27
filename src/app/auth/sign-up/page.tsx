"use client";
import { Btn } from "@/components";
import { EyeClose, EyeOpen, Google } from "@/icons";
import { SignUpProps, schema } from "@/utils/schemas/sign-up";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React, { useState } from "react";
import { ApplicationRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  // react hook form for form validation and handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SignUpProps> = async (data) => {
    console.log(data);
    push(ApplicationRoutes.HOME);
  };

  return (
    <div className="flex flex-col gap-8 px-7 py-8 font-inter lg:px-[50px]">
      <h1 className="flex flex-col gap-3 text-2xl font-extrabold text-app-black-200 lg:text-[32px]">
        Sign Up{" "}
        <span className="text-base font-normal text-[#667085]">
          Let’s get you started with Horde.
        </span>
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <label htmlFor="full_name" className={label_style}>
          Full Name*
          <input
            type="text"
            id="full_name"
            {...register("fullname")}
            placeholder="Enter your name"
            className={input_style}
          />
          <p className="text-xs text-red-600">{errors["fullname"]?.message}</p>
        </label>

        <label htmlFor="email" className={label_style}>
          Email Address*
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your email"
            className={input_style}
          />
          <p className="text-xs text-red-600">{errors["email"]?.message}</p>
        </label>

        {/* Password */}
        <label htmlFor="password" className={label_style}>
          Password
          <div className="flex items-center justify-between rounded-lg border border-[#D0D5DD] px-4">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              placeholder="Create a password"
              className="w-full border-none px-0 py-4 text-base font-normal text-[#667085] outline-none focus:ring-0 "
            />
            {showPassword ? (
              <EyeClose
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            ) : (
              <EyeOpen
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              />
            )}
          </div>
          <p className="text-xs font-normal text-[#667085]">
            Must be at least 8 characters.
          </p>
          <p className="text-xs text-red-600">{errors["password"]?.message}</p>
        </label>

        <Btn label="Create account" type="submit" size="big" />
        <Btn
          label="Sign up with Google"
          type="submit"
          size="big"
          variant="secondary"
          icon={<Google />}
        />
      </form>

      <div className="flex w-full items-center justify-center gap-1 text-sm">
        <p className="text-[#667085]">Already have an account?</p>
        <Link
          href={ApplicationRoutes.AUTH_SIGNIN}
          className="font-semibold text-black"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

const input_style =
  "rounded-lg border border-[#D0D5DD] font-normal p-4 text-base text-[#667085] shadow-sm outline-none focus:ring-0";
const label_style =
  "flex flex-col gap-[6px] text-xs font-medium text-[#344054]";
