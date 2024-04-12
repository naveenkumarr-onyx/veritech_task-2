"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { icontainer2 } from "./data";
import Heading from "./Heading";

const Specifications = () => {
  const [slideChange, setSlideChange] = useState(0);
  const next = () => {
    setSlideChange((slideChange + 1) % icontainer2.length);
  };
  const prev = () => {
    setSlideChange((slideChange - 1 + icontainer2.length) % icontainer2.length);
  };
  return (
    <div className="flex flex-col py-[10px] gap-9 lg:px-10 max-md:px-9  max-sm:px-4">
      <div className="text-center leading-[50px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary font-roboto tracking-wide leading-none">
          PEUGEOT 508{" "}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-sm:text-lg font-roboto tracking-wide leading-[2px]">
          AS UNIQUE AS YOU ARE
        </h2>
      </div>
      <div className="text-center font-mulish leading-[25px] text-customBlack ">
        <p>
          Discover the magnetic Peugeot 308. Stunning design, uncompromising
          quality and a dynamic drive.
        </p>
        <p>
          Now available with a 100% electric motor in the beautiful New Peugeot
          E-308, you can experience an exhilarating drive in whatever version
          you choose.
        </p>
      </div>
      <div className="flex flex-col gap-7 md:flex-row md:gap-10">
        <div className="relative">
          <div className="lg:h-full">
            {icontainer2.map((value: any, index: any) => (
              <div
                key={index}
                className={`max-sm:w-full  ${
                  slideChange === index ? "block" : "hidden"
                }`}
              >
                <Image
                  src={value.src}
                  width={800}
                  height={1000}
                  quality={100}
                  priority
                  loading="eager"
                  alt="Spec"
                  className={`${slideChange === index ? "block" : "hidden"}`}
                />
              </div>
            ))}
          </div>
          <BsArrowLeftSquareFill
            className="absolute text-white max-md:top-[150px]  max-sm:text-2xl max-sm:left-[1px] text-4xl lg:top-[215px] max-sm:top-[80px] cursor-pointer"
            onClick={prev}
          />
          <BsArrowRightSquareFill
            className="absolute text-4xl max-sm:text-2xl lg:right-0 max-md:right-0 max-md:top-[150px] bg-red-950 lg:top-[215px] max-sm:top-[80px] max-sm:right-[1px] text-white cursor-pointer"
            onClick={next}
          />
        </div>
        <div className="flex flex-col gap-7">
          <div className="text-center text-xl font-roboto">
            <Heading title="SPECIFICATIONS" />
          </div>
          <div className="font-mulish flex flex-col gap-4">
            <p className="w-full">
              Available with <span className="font-lato">0%APR</span>, no
              minimum deposit, and a <span className="font-lato">£1,500</span>
              <span className="font-lato"> Switch Grant(4)</span>
            </p>
            <ul className="max-sm:px-5 list-disc flex flex-col leading-[25px]">
              <li>100% electric driving range: Up to 257 miles WLTP</li>
              <li>Charging time: 100 km in 12 min</li>
              <li>CO2 emissions whilst driving: 0 g/km</li>
              <li>Power: 115 kW (156 hp)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
