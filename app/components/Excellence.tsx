"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import i1 from "../../public/images/Showroom_308_D_Excellence_1.png";
import i2 from "../../public/images/Showroom_308_D_Excellence_2.png";
import i3 from "../../public/images/Showroom_308_D_Excellence_3.png";
import { FaArrowAltCircleRight, FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Heading from "./Heading";

const Excellence = () => {
  const [slideChange, setSlideChange] = useState(0);
  const icontainer: any = [
    {
      src: i1,
      Heading: "PEUGEOT I-CONNECT ADVANCED",
      subHeading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo commodi molestiae ratione quidem reprehenderit ab ea temporibus aliquam! Eius cumque, repellendus dolor quia sapiente doloribus non labore asperiores molestiae",
    },
    {
      src: i2,
      Heading: "PEUGEOT I-CONNECT ADVANCED",
      subHeading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo commodi molestiae ratione quidem reprehenderit ab ea temporibus aliquam! Eius cumque, repellendus dolor quia sapiente doloribus non labore asperiores molestiae",
    },
    {
      src: i3,
      Heading: "PEUGEOT I-CONNECT ADVANCED",
      subHeading:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quo commodi molestiae ratione quidem reprehenderit ab ea temporibus aliquam! Eius cumque, repellendus dolor quia sapiente doloribus non labore asperiores molestiae",
    },
  ];
  const next = () => {
    setSlideChange((slideChange + 1) % icontainer.length);
  };
  const prev = () => {
    setSlideChange((slideChange - 1 + icontainer.length) % icontainer.length);
  };
  return (
    <div className=" flex flex-col px-12 max-sm:px-2 gap-9">
      <div className=" flex flex-col items-center">
        <Heading title="EXCELLENCE" />
        <p className=" font-mulish text-center">
          Choice of materials, design, connected equipment, engine, comfort, the
          PEUGEOT 308 has left nothing to chance.
          <br /> Everything offers you a new experience.
        </p>
      </div>
      <div className="flex flex-row max-sm:flex-col max-sm:w-full justify-between gap-5">
        <div className="flex items-center text-center  max-sm:w-full">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            veniam voluptates perspiciatis officiis ab non. Quos harum aliquam
          </p> */}
          {icontainer.map((value: any, index: any) => {
            return (
              <div key={index}>
                <h1>{slideChange === index ? `${index}/3` : ""}</h1>
                <h1
                  className={`${slideChange === index ? " block" : "hidden"}`}
                >
                  {value.Heading}
                </h1>
                <p
                  className={` w-[400px] ${
                    slideChange === index ? " block" : "hidden"
                  }`}
                >
                  {value.subHeading}
                </p>
              </div>
            );
          })}
        </div>
        <div className="max-sm:w-full relative">
          <FaArrowAltCircleLeft
            className="absolute text-white lg:top-[260px] max-sm:top-[125px]"
            onClick={prev}
          />
          {icontainer.map((value: any, index: any) => {
            return (
              <div key={index}>
                <Image
                  src={value.src}
                  width={1000}
                  alt="ex-i"
                  className={`${
                    slideChange === index ? "block duration-1000" : "hidden"
                  } `}
                />
              </div>
            );
          })}
          <FaArrowAltCircleRight
            className="absolute lg:right-0 lg:top-[250px] max-sm:top-[125px] text-white"
            onClick={next}
          />
        </div>
      </div>
    </div>
  );
};

export default Excellence;
