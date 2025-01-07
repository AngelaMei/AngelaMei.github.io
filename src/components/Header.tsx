import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute l-0 t-0 w-full flex items-center text-sm sm:text-xl gap-4 sm:gap-7 h-24 my-0.5 font-sans">
      <div className="flex items-center sm:gap-2">
        Yu-Chi 
        <Image
          aria-hidden
          src="/eyes.svg"
          alt="Eyes icon"
          width={55}
          height={44}
        />
        Mei
      </div>
      <div className="flex grow items-center justify-center gap-5">
        <a className="hidden sm:block" href="mailto:angela101475@gmail.com">
          <Image
            src="/Email.svg"
            alt="email icon"
            width={28}
            height={28}
          />
        </a>
        <a
          className="hidden sm:block"
          href="https://www.linkedin.com/in/angela-mei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/LinkedinLogo.svg"
            alt="Linkedin icon"
            width={28}
            height={28}
          />
        </a>
        <a
          className="hidden sm:block"
          href="https://github.com/AngelaMei"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/GithubLogo.svg"
            alt="Github icon"
            width={28}
            height={28}
          />
        </a>
        <a
          className="hidden sm:block"
          href="/docs/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/CV.svg"
            alt="CV icon"
            width={28}
            height={28}
          />
        </a>
      </div>
      <a
        className="flex items-center hover:underline hover:underline-offset-4"
        href="/about"
      >
        About
      </a>
      <a
        className="flex items-center hover:underline hover:underline-offset-4"
        href="/works"
      >
        All Works
      </a>
    </header>
  );
}

