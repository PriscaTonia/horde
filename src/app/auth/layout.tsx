import { Logo } from "@/modules";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen bg-[#FAFAFA] py-[34px]">
      {/* logo */}
      <div className="mx-auto w-[83%] pb-[34px]">
        <Logo textSize="big" />
      </div>

      <div className="mx-auto my-10 max-w-[85%] rounded-[38px] bg-white drop-shadow-sm lg:max-w-[40%]">
        {children}
      </div>
    </section>
  );
}
