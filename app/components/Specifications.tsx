import React from "react";
import Image from "next/image";
import car1 from "../../public/images/UK_HQ_PEUGEOT_308-Masthead-Update_308-T4-1812024_750x1200-1.jpg";
import car2 from "../../public/images/1103984.jpg";

const Specifications = () => {
  return (
    <div className=" flex flex-col py-[10px] gap-9 px-10">
      <div className=" flex flex-col gap-10">
        <div className=" text-center leading-[50px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-secondary font-roboto tracking-wide leading-none">
            PEUGEOT 508{" "}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-sm:text-lg font-roboto tracking-wide leading-[2px]">
            AS UNIQUE AS YOU ARE
          </h2>
        </div>
        <div className=" text-center font-mulish  leading-[25px]">
          <p>
            Discover the magnetic Peugeot 308. Stunning design, uncompromising
            quality and a dynamic drive.
          </p>
          <p>
            Now available with a 100% electric motor in the beautiful New
            Peugeot E-308, you can experience an exhilarating drive in whatever
            version you choose.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:flex-row md:gap-10">
        <div>
          <Image src={car2} width={800} height={800} alt="Spec" />
        </div>
        <div className=" flex flex-col gap-7">
          <div className="text-center text-xl font-roboto">
            <h1 className="text-3xl">
              <span className="border-b-2">SPECIFICATIONS</span>
            </h1>
          </div>
          <div className="max-w-full md:max-w-[500px] font-mulish  flex flex-col gap-4">
            <p className=" w-full">
              Available with <span className="font-lato">0%APR</span>,no
              minimumm deposit,and a <span className="font-lato">£1,500</span>
              <span className="font-lato"> Switch Grant(4)</span>
            </p>
            <ul className="list-disc flex flex-col leading-[25px]">
              <li>100% electric driving range: Up to 257 miles WLTP</li>
              <li>Charging time:100 km in 12 min</li>
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
