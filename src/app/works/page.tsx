'use client'
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page: FC = () => {

    return(
        <div className="relative flex w-full justify-center bg-dark-bg">
        <main className="relative flex flex-col items-center pt-30 sm:pt-50 pb-24 w-full px-4 sm:px-20 gap-y-8 sm:gap-y-20 font-sans text-white">
            <div className="">
            <span className="text-center text-7xl sm:text-9xl">all works.</span>
                <div className="mt-6 mb-6 space-x-2 text-s">
                    <a href="#UXDesign" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                     UX Design
                    </a>
                    <a href="#frontEnd" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                     FrontEnd
                    </a>
                    <a href="#graphic" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        Graphic Design
                    </a>
                    <a href="#Playground" className="border border-yellow-400 px-3 py-1 rounded-full text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
                        Playground
                    </a>
                </div>
            </div>

            {/* UX Design Section */}
            <section id="UXDesign" className="flex w-full flex-col items-center mb-20">
                <p className="text-center text-2xl pb-10">“First, Users.”</p>
                <div className="flex w-full">
                    <Link href="./project/coin-toss">
                        <Image
                            className="w-full h-auto"
                            aria-hidden
                            src="../media/works/CoinToss.png"
                            alt="Coin Toss App Hero Banner"
                            width={1600}
                            height={400}
                        />
                    </Link>
                </div>
                <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                  {/* Left (60%) */}
                  <div className="relative w-full md:w-[60%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Link href="./project/guide-app">
                        <Image
                          src="../media/works/Guide.png"
                          alt="Guide App on Laptop"
                          className="object-cover w-full h-full"
                          width={1600}
                          height={400}
                        />
                    </Link>
                  </div>
                  {/* Right (40%) */}
                  <div className="relative w-full md:w-[40%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Link href="./project/dairy-subscription-service">
                        <Image
                          src="../media/works/milk.png"
                          alt="Dairy Subscription Service App Screens"
                          className="object-cover w-full h-full"
                          width={1600}
                          height={400}
                        />
                    </Link>
                  </div>
                </section>
            </section>

            {/* FrontEnd Section */}
            <section id="frontEnd" className="flex w-full flex-col items-center">
              <p className="text-center text-2xl pb-10">“First, Make it work.”</p>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                {/* Left (50%) */}
                <div className="relative w-full md:w-[50%] aspect-[5/3] rounded-2xl overflow-hidden">
                <Link href="https://go-for-a-ride.vercel.app/">
                    <Image
                      src="../media/works/goforaride.png"
                      alt="go for a ride"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </Link>
                </div>
                {/* Right (50%) - two stacked images */}
                <div className="relative w-full md:w-[50%] aspect-[5/3] rounded-2xl overflow-hidden">
                    <Link href="https://19-galaxy-generator-iota-pink.vercel.app/">
                        <Image
                        src="../media/works/galaxy.png"
                        alt="Galaxy"
                        className="object-cover w-full h-full"
                        width={1600}
                        height={400}
                        />
                    </Link>
                </div>
              </section>
              <div className="flex w-full">
                    <Image
                        className="w-full h-auto rounded-2xl mt-6"
                        aria-hidden
                        src="../media/works/pokemon.png"
                        alt="Coin Toss App Hero Banner"
                        width={1600}
                        height={400}
                    />
                </div>
            </section>
            

            {/* Graphic Section */}
            <section id="graphic" className="flex w-full flex-col items-center">
              <p className="text-center text-2xl pb-10">“First, Visual Appealing.”</p>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                {/* Left (50%) */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/milkbottle.png"
                      alt="Milk Bottle Packaging Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                {/* Right (50%) - two stacked images */}
                <div className="flex flex-col w-full md:w-[50%] gap-6">
                  <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
                      <Image
                        src="../media/works/milkbag.png"
                        alt="Milk Delivery Bag Design"
                        className="object-cover w-full h-full"
                        width={800}
                        height={400}
                      />
                  </div>
                  <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
                      <Image
                        src="../media/works/iceangel.png"
                        alt="Ice Angel Shop Sign Design"
                        className="object-cover w-full h-full"
                        width={800}
                        height={400}
                      />
                  </div>
                </div>
              </section>
                <div className="flex w-full mt-6">
                    <Image
                        className="w-full h-auto rounded-2xl"
                        aria-hidden
                        src="../media/works/BHRCBusinessCard.png"
                        alt="BHRC Business Card Design"
                        width={1600}
                        height={400}
                    />
                </div>
                <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                {/* Left (50%) */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/tshirt.png"
                      alt="Custom T-shirt Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                {/* Right (50%) - two stacked images */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/ticket.png"
                      alt="Event Ticket Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
              </section>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                <div className="relative w-full md:w-[1/3] aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/dollhouse1.png"
                      alt="Dollhouse Project - Exterior View"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                <div className="relative w-full md:w-[1/3] aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/dollhouse2.png"
                      alt="Dollhouse Project - Interior Room"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                <div className="relative w-full md:w-[1/3] aspect-[4/5] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/dollhouse3.png"
                      alt="Dollhouse Project - Details"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
              </section>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                {/* Left (50%) */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/FSC1.png"
                      alt="FSC Project - Poster Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                {/* Right (50%) - two stacked images */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/FSC2.png"
                      alt="FSC Project - Social Media Graphic"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
              </section>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                <div className="relative w-full md:w-[70%] aspect-[5/4] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/sign1.png"
                      alt="Milk Bottle Packaging Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                <div className="flex flex-col w-full md:w-[30%] gap-6">
                  <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden">
                      <Image
                        src="../media/works/sign2.png"
                        alt="Milk Delivery Bag Design"
                        className="object-cover w-full h-full"
                        width={800}
                        height={400}
                      />
                  </div>
                  <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden">
                      <Image
                        src="../media/works/sign3.png"
                        alt="Ice Angel Shop Sign Design"
                        className="object-cover w-full h-full"
                        width={800}
                        height={400}
                      />
                  </div>
                </div>
              </section>
              <section className="flex flex-col md:flex-row gap-6 w-full mt-6">
                {/* Left (50%) */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/NFAC1.png"
                      alt="NFAC - Poster Design"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
                {/* Right (50%) - two stacked images */}
                <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="../media/works/NFAC2.png"
                      alt="NFAC - Brochure Graphic"
                      className="object-cover w-full h-full"
                      width={1600}
                      height={400}
                    />
                </div>
              </section>
            </section>

            {/* Playground Section */}
            <section id="Playground" className="flex w-full flex-col items-center">
              <p className="text-center text-2xl pb-10">“Coming Soon”</p>
            </section>
        </main>
        </div>
    )
}

export default Page;