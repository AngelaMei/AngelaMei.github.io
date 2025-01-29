import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-50 mx-4 sm:mx-20">
      <div className="absolute l-0 t-0 w-full flex items-center text-sm sm:text-xl gap-4 sm:gap-7 h-24 my-0.5 font-sans">
        <Link className="flex items-center gap-3" href="/">
          Yu-Chi
          <Image
            aria-hidden
            src="/eyes.svg"
            alt="Eyes icon"
            width={50}
            height={40}
          />
          Mei
        </Link>
        <div className="flex grow items-center justify-center gap-5">
          <Link className="hidden sm:block" href="mailto:angela101475@gmail.com">
            <Image
              className="w-7 h-auto"
              src="/icons/Email.svg"
              alt="email icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            className="hidden sm:block"
            href="https://www.linkedin.com/in/angela-mei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-7 h-auto"
              src="/icons/LinkedinLogo.svg"
              alt="Linkedin icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            className="hidden sm:block"
            href="https://github.com/AngelaMei"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-7 h-auto"
              src="/icons/GithubLogo.svg"
              alt="Github icon"
              width={28}
              height={28}
            />
          </Link>
          <Link
            className="hidden sm:block"
            href="/docs/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-7 h-auto"
              src="/icons/CV.svg"
              alt="CV icon"
              width={28}
              height={28}
            />
          </Link>
        </div>
        <Link
          className="flex items-center hover:underline hover:underline-offset-4"
          href="/about"
        >
          About
        </Link>
        <Link
          className="flex items-center hover:underline hover:underline-offset-4"
          href="/works"
        >
          All Works
        </Link>
      </div>
    </header>
  );
}

