"use client";
import { Btn } from "@/components";
import { EyeClose, EyeOpen, Google } from "@/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React, { useState } from "react";
import { ApplicationRoutes } from "@/utils/routes";
import { SignInProps, schema } from "@/utils/schemas/sign-in";
import { useRouter } from "next/navigation";

const SignIn = () => {
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

  const onSubmit: SubmitHandler<SignInProps> = async (data) => {
    console.log(data);
    push(ApplicationRoutes.HOME);
  };

  return (
    <div className="flex flex-col gap-8 px-7 py-8 font-inter lg:px-[50px]">
      <h1 className="flex flex-col gap-3 text-2xl font-extrabold text-app-black-200 lg:text-[32px]">
        Login
        <span className="text-base font-normal text-[#667085]">
          Welcome back! Please enter details.
        </span>
      </h1>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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
          <Link href="/" className="text-xs font-normal text-[#667085]">
            Forgot password?
          </Link>
          <p className="text-xs text-red-600">{errors["password"]?.message}</p>
        </label>

        <Btn label="Login" type="submit" size="big" />
        <Btn
          label="Sign in with Google"
          type="submit"
          size="big"
          variant="secondary"
          icon={<Google />}
        />
      </form>

      <div className="flex w-full items-center justify-center gap-1 text-sm">
        <p className="text-[#667085]">Don&apos;t have an account?</p>
        <Link
          href={ApplicationRoutes.AUTH_SIGNUP}
          className="font-semibold text-black"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

const input_style =
  "rounded-lg border border-[#D0D5DD] font-normal p-4 text-base text-[#667085] shadow-sm outline-none focus:ring-0";
const label_style =
  "flex flex-col gap-[6px] text-xs font-medium text-[#344054]";
