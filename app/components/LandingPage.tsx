import Image from "next/image";
import React from "react";
import logo from "../../public/images/peugeot-logo-alt.png";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen px-4 sm:px-10 py-10 sm:py-20"
      style={{
        backgroundImage:
          "url('https://images5.alphacoders.com/994/994370.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white">
        <div className="flex justify-between items-center p-1">
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-6 p-2 font-roboto">
            <div>
              <Image src={logo} alt="car-logo" width={90} height={30} />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 sm:gap-6">
                <p>MODELS</p>
                <p>ELECTRIC & HYBRID</p>
                <p>BUY</p>
                <p>BRAND/ABOUT US</p>
              </div>
              <div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-12 py-3 flex flex-col gap-4 max-sm:gap-8 ">
          <div className="flex flex-col leading-7 sm:leading-10">
            <h1 className="text-6xl sm:text-5xl lg:text-6xl xl:text-7xl text-secondary font-roboto tracking-wide leading-none">
              PEUGEOT 508
            </h1>
            <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-roboto tracking-wide leading-5 sm:leading-7">
              UNIQUE SENSATIONS
            </h2>
          </div>
          <div className="flex flex-col gap-4 font-mulish">
            <div className="flex flex-col gap-3">
              <p className="max-w-[500px]">
                Switch to electric today. The E-308 is available with{" "}
                <span className="text-md font-semibold">0% APR(1)</span>,
              </p>
              <p>
                no minimum deposit, and up to a{" "}
                <span className="text-md font-semibold">
                  £1,500 Switch Grant(4)
                </span>
                .
              </p>
            </div>
            <div className="font-roboto">
              <button className="hover:bg-black duration-1000 bg-secondary p-2 rounded-sm">
                BOOK A TEST DRIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
