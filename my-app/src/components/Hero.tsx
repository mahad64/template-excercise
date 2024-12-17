import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 md:px-12 lg:px-28 mt-6 md:mt-10 lg:mt-16">
                {/* Left Section */}
                <div className="hidden lg:flex flex-col items-start gap-6 w-full pt-4 lg:pt-10 lg:w-[40%]">
                    <div className="flex items-center gap-2 text-sm lg:text-base">
                        <h3 className="font-medium">Woman’s Fashion</h3>
                        <Image
                            src={"/images/black-arrow.svg"}
                            alt="arrow-img"
                            width={24}
                            height={24}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm lg:text-base">
                        <h3 className="font-medium">Men’s Fashion</h3>
                        <Image
                            src={"/images/black-arrow.svg"}
                            alt="arrow-img"
                            width={24}
                            height={24}
                        />
                    </div>

                    <div className="flex flex-col gap-3 text-sm lg:text-base font-medium">
                        <h3>Electronics</h3>
                        <h3>Home & Lifestyle</h3>
                        <h3>Medicine</h3>
                        <h3>Sports & Outdoor</h3>
                        <h3>Baby’s & Toys</h3>
                        <h3>Groceries & Pets</h3>
                        <h3>Health & Beauty</h3>
                    </div>
                </div>

                {/* Right Section */}
                <div className="bg-black p-6 md:p-11 mt-7 flex flex-col justify-between w-full lg:w-[65%] rounded-lg shadow-lg">
                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 md:gap-8">
                        {/* Left Content */}
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <Image
                                    src="/images/apple.svg"
                                    alt="apple-logo"
                                    width={40}
                                    height={49}
                                />
                                <span className="text-[#FAFAFA] text-sm md:text-base font-medium">
                                    iPhone 14 Series
                                </span>
                            </div>

                            <h1 className="text-[#FAFAFA] text-lg md:text-xl lg:text-2xl font-bold leading-relaxed">
                                Up to 10% <br /> off Voucher
                            </h1>

                            <div className="flex items-center gap-3 justify-center lg:justify-start">
                                <button className="text-[#FAFAFA] text-sm md:text-base font-medium border-b border-[#FAFAFA] hover:text-[#00FF66] transition duration-300">
                                    Shop Now
                                </button>
                                <Image
                                    src="/images/line-arrow.svg"
                                    alt="arrow-icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full md:w-[250px] lg:w-[300px] flex justify-center">
                            <Image
                                src="/images/hero-sec.png"
                                alt="mobile-image"
                                width={496}
                                height={352}
                                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>

                    {/* Dots Section */}
                    <div className="mt-6 flex justify-center">
                        <Image
                            src="/images/dot.svg"
                            alt="dots-image"
                            width={90}
                            height={12}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;