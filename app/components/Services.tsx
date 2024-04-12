"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelp } from "react-icons/io";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  const data = [
    {
      content: "FIND A RETAILER",
      icon: <FaLocationDot />,
      type: "icon",
    },
    {
      content: "LATEST OFFERS",
      icon: <CiDiscount1 />,
      type: "icon",
    },
    {
      content: "NEED HELP",
      icon: <IoMdHelp />,
      type: "icon",
    },
    {
      content: "CONTACT US",
      icon: <BiSupport />,
      type: "icon",
    },
  ];
  return (
    <div className="grid lg:grid-flow-col max-sm:grid-cols-1 max-md:grid-cols-2  gap-[0.5px] ">
      {data.map((value: any, index: any) => {
        return (
          <div
            key={index}
            className="text-white flex justify-center items-center gap-[10px] px-[20px] py-[30px]  border bg-black "
          >
            {value.type === "icon" && (
              <h1 className="text-white text-xl font-roboto">{value.icon}</h1>
            )}
            <h2 className="font-roboto">{value.content}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
