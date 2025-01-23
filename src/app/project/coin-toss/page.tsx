import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-4 sm:mx-20">
      <Header />
      <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
        <main className="relative flex flex-col min-h-[70vh] items-center justify-center">
          <div className="pt-20 pb-14">
            <Image
              src="/cover/Logo_Guide.png"
              alt="logo"
              width={50}
              height={58}
              priority
            />
          </div>
          <span className="pb-4 text-xl font-medium">
              Capstone
          </span>
          <span className="pb-16 text-5xl font-semibold">
              Guide App
          </span>
          <div className="relative h-[470px] w-full">
            <Image
              className="object-contain"
              src="/mock_main.png"
              alt="photo"
              fill={true}
              priority
            />
          </div>
          <div
            className="flex w-screen h-96 bg-[#0C1743] mt-[-100px] items-center justify-center"
          >
            <span className="text-white text-[40px] leading-normal font-medium text-center">
              Mark, Snip, and Succeed<br/>
              Make training and learning like TikTok
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

