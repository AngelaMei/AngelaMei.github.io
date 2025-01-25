import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col mx-4 sm:mx-20">
      <div className="flex flex-col items-center py-24 gap-y-8 sm:gap-y-20 font-sans">
        <main className="relative flex flex-col min-h-[70vh] items-center justify-center">
          <div className="pt-7 pb-7">
            <Image
              src="/cover/Logo_Guide.png"
              alt="logo"
              width={50}
              height={50}
              priority
            />
          </div>
          <span className="pb-4 text-xl font-medium">
              Capstone
          </span>
          <span className="pb-7 text-5xl font-semibold">
              Guide App
          </span>
          <div className="relative h-[440px] w-full">
            <Image
              className="object-contain"
              src="/mock_main.png"
              alt="photo"
              fill={true}
              priority
            />
          </div>
          <div
            className="flex w-screen p-20 min-h-[450px] bg-[#0C1743] -mt-20 items-center justify-center"
          >
            <span className="text-white text-center text-[40px] leading-normal tracking-[.01em] font-medium">
              Mark, Snip, and Succeed<br/>
              Make training and learning like TikTok.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

