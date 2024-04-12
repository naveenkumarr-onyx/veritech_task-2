"use client";
import Image from "next/image";
import React, { useState } from "react";
import { icontainer } from "./data";
import Heading from "./Heading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Excellence = () => {
  const [slideChange, setSlideChange] = useState(0);
  const [imageLoader, setImageLoader] = useState(false);
  const next = () => {
    setSlideChange((slideChange + 1) % icontainer.length);
  };
  const prev = () => {
    setSlideChange((slideChange - 1 + icontainer.length) % icontainer.length);
  };
  return (
    <div className="lg:max-h-full flex flex-col px-12 max-sm:px-1 gap-9">
      <div className="flex flex-col items-center">
        <Heading title="EXCELLENCE" />
        <p className=" font-mulish text-center">
          Choice of materials, design, connected equipment, engine, comfort, the
          PEUGEOT 308 has left nothing to chance.
          <br /> Everything offers you a new experience.
        </p>
      </div>
      <div className="flex flex-row max-md:flex-col max-md:gap-4 max-sm:flex-col max-sm:w-full justify-between lg:gap-5 max-sm:gap-7">
        <div className="flex items-center text-center lg:w-[40%] max-sm:p-2">
          {icontainer.map((value: any, index: any) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <div className="flex justify-center items-center ">
                  <h1 onClick={prev} className="cursor-pointer">
                    {slideChange === index ? (
                      <IoIosArrowBack className="" />
                    ) : (
                      ""
                    )}
                  </h1>
                  <h1 className="text-secondary">
                    {slideChange === index
                      ? `${index}/${icontainer.length}`
                      : ""}
                  </h1>
                  <h1 onClick={next} className="cursor-pointer ">
                    {slideChange === index ? <IoIosArrowForward /> : ""}
                  </h1>
                </div>
                <div>
                  <h1
                    className={`font-roboto ${
                      slideChange === index ? " block" : "hidden"
                    }`}
                  >
                    {value.Heading}
                  </h1>
                  <p
                    className={` font-mulish lg:w-[400px] ${
                      slideChange === index ? " block" : "hidden"
                    }`}
                  >
                    {value.subHeading}
                  </p>
                </div>

                {slideChange === index && (
                  <ul className="list-disc text-left max-sm:px-8 font-mulish">
                    {value.list?.map((list: any, index: any) => {
                      return <li key={index}>{list}</li>;
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row lg:w-full max-sm:w-full relative">
          <BsArrowLeftSquareFill
            className="absolute text-white lg:top-[260px] max-md:top-[150px] max-sm:text-2xl max-sm:left-[1px] text-4xl  max-sm:top-[100px] cursor-pointer"
            onClick={prev}
          />
          {icontainer.map((value: any, index: any) => {
            return (
              <div key={index} className="max-h-full">
                <Image
                  src={value.src}
                  width={1000}
                  height={1200}
                  alt="ex-i"
                  quality={100}
                  loading="eager"
                  priority
                  className={` ${slideChange === index ? "block" : "hidden"}`}
                />
              </div>
            );
          })}
          <BsArrowRightSquareFill
            className="absolute text-4xl max-sm:text-2xl lg:right-[1px] lg:top-[260px] max-md:right-0 max-md:top-[150px] max-sm:top-[100px] max-sm:right-[1px] text-white cursor-pointer"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Excellence;
