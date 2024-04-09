import Image from "next/image";
import React from "react";
import i1 from "../../public/images/HD-wallpaper-2015-peugeot-508-interior-steering-wheel-car.jpg";
import i2 from "../../public/images/HD-wallpaper-2019-peugeot-508-interior-detail-car.jpg";
import i3 from "../../public/images/peakpx.jpg";
import Heading from "./Heading";

const Allure = () => {
  return (
    <div className=" flex flex-col gap-4">
      <div className="text-center flex flex-col gap-1">
        <Heading title="ALLURE" />
        <p className="font-mulish leading-7">
          With its radical design, its sharp lines, the compact Peugeot 508
          hatchback stands out at first glance.
          <br /> Powerful and athletic, it asserts its character and makes an
          impression with its LED lights displaying 3 claws.
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div>
          <Image src={i3} width={900} height={300} alt="interior" />
        </div>
        <div className="flex flex-row max-md:flex-col gap-1 ">
          <Image src={i2} width={700} height={300} alt="interior" />
          <Image src={i1} width={700} height={300} alt="interior" />
        </div>
      </div>
    </div>
  );
};

export default Allure;
