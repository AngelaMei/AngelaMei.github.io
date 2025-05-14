'use client'
import type { FC } from 'react';
import Image from 'next/image';
// import { IconBullet, ImageWrapper, PaddedFlexBox, PageContentContainer, SectionTitle, TwoColumn, ThreeColumn, Heading1, Heading2, Heading3, BaseText, ListBullet } from '@/components/utilities';

const Page: FC = () => {

    return(
        <div className="relative flex w-full justify-center bg-dark-bg">
        <main className="relative flex flex-col items-center pt-30 sm:pt-50 pb-24 w-full px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans text-white">
            <div className="">
            <span className="text-center text-7xl sm:text-9xl">all works.</span>
                <div className="mt-6 mb-6 space-x-2 text-s">
                    <a href="#frontend" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        Graphic Design
                    </a>
                    <a href="#motion" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        UX Design
                    </a>
                    <a href="#experiments" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        FrontEnd
                    </a>
                    <a href="#experiments" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        Playground
                    </a>
                </div>
            </div>

            <div className="flex w-full">
                <Image
                    className="w-full h-auto"
                    aria-hidden
                    src="../media/works/CoinToss.png"
                    alt="User Pain Image"
                    width={1600}
                    height={400}
                />
            </div>
            <section className="flex flex-col md:flex-row gap-6">
  {/* Left (60%) */}
  <div className="relative w-full md:w-[60%] aspect-[4/3] rounded-xl overflow-hidden">
    <Image
      src="../media/works/Guide.png"
      alt="Guide Laptop"
      className="object-cover"
      width={1600}
                    height={400}
    />
  </div>

  {/* Right (40%) */}
  <div className="relative w-full md:w-[40%] aspect-[4/3] rounded-xl overflow-hidden">
    <Image
      src="../media/works/Milky.png"
      alt="App Screens"
      className="object-cover"
      width={1600}
                    height={400}
    />
  </div>
</section>

        </main>
        </div>
    )
}

export default Page;