import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col row-start-2 items-center">
        <Image
          src="/eyes.gif"
          alt="Portfolio logo"
          width={320}
          height={38}
          priority
        />
        <div
            className="flex items-center justify-center text-lg sm:text-3xl h-10 sm:h-12 sm:min-w-44"
          >
            🚧 Portfolio Under Construction 🚧
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://meiyuchi.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/eyes.png"
            alt="Eyes icon"
            width={20}
            height={20}
          />
          Go to meiyuchi.com →
        </a>
      </footer>
    </div>
  );
}
