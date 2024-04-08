import Image from "next/image";
import React from "react";
import offer from "../../public/images/Offers.png";
import delivery from "../../public/images/delivery.png";
import support from "../../public/images/support.png";
import peugeotCare from "../../public/images/repair.png";
import Heading from "./Heading";

const Online = () => {
  return (
    <div className=" flex flex-col  px-11 gap-11">
      <div className="text-center flex flex-col gap-1">
        <Heading title="WHY BUY ONLINE" />
        <div className="font-mulish  flex flex-col gap-1">
          <p>Get Peugeot peace of mind when you order online.</p>
          <p>
            Design your new car all the way through to securing finance from the
            comfort of your own home, with expert support when you need it.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="max-w-[300px] flex flex-col gap-6 p-3">
          <div className=" flex flex-col items-center gap-2">
            <Image src={offer} width={90} height={50} alt="offer" />
            <h1 className=" font-roboto">EXCLUSIVE ONLINE OFFERS</h1>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic doloribus? Molestiae quibusdam nulla, iure error
          </p>
        </div>
        <div className="max-w-[300px] flex flex-col gap-6 p-3">
          <div className=" flex flex-col items-center gap-2">
            <Image src={support} width={90} height={50} alt="offer" />
            <h1 className=" font-roboto">TALK TO US DIRECT</h1>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic doloribus? Molestiae quibusdam nulla, iure error
          </p>
        </div>
        <div className="max-w-[300px] flex flex-col gap-6 p-3">
          <div className=" flex flex-col items-center gap-2">
            <Image src={delivery} width={90} height={50} alt="offer" />
            <h1 className=" font-roboto">DELIVERY YOUR WAY</h1>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic doloribus? Molestiae quibusdam nulla, iure error
          </p>
        </div>
        <div className="max-w-[300px] flex flex-col gap-6 p-3">
          <div className=" flex flex-col items-center gap-2">
            <Image src={peugeotCare} width={90} height={50} alt="offer" />
            <h1 className=" font-roboto">PEUGEOT CARE</h1>
          </div>
          <p className=" text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            hic doloribus? Molestiae quibusdam nulla, iure error
          </p>
        </div>
      </div>
    </div>
  );
};

export default Online;
