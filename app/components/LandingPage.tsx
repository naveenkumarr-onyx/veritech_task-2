import Image from "next/image";
import React from "react";
import logo from "../../public/images/peugeot-logo-alt.png";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen px-[10px] py-[30px]"
      style={{
        backgroundImage:
          "url('https://images5.alphacoders.com/994/994370.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white">
        <div className="flex justify-between items-center  p-1">
          <div className="flex flex-row justify-center items-center gap-[30px] p-2  font-roboto ">
            <div>
              <Image src={logo} alt="car-logo" width={90} height={30} />
            </div>
            <div className="flex flex-col gap-3 ">
              <div className=" flex flex-row gap-[30px]">
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
          <div className="font-roboto flex gap-4 items-center justify-center">
            <div>
              <p>BUSINESS</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="search"
                readOnly
                className="placeholder:p-1 bg-transparent border-white border-[1px] opacity-80 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <div className=" px-12 py-3 flex flex-col gap-4">
          <div className=" flex flex-col leading-[55px]">
            <h1 className=" font-roboto text-[80px]">PEUGEOT 508</h1>
            <h2 className=" font-roboto text-[30px] tracking-[1px]">
              UNIQUE SENSATIONS
            </h2>
          </div>
          <div className=" flex flex-col gap-4 font-robotomono">
            <div className=" flex flex-col gap-3">
              <p className="w-[500px]">
                Switch to electric today. The E-308 is available with{" "}
                <span className=" text-md font-[900]">0% APR(1)</span>,
              </p>
              <p>
                no minimum deposit, and up to a{" "}
                <span className="text-md font-[900]">
                  £1,500 Switch Grant(4)
                </span>
                .
              </p>
            </div>
            <div className=" font-roboto">
              <button className=" hover:bg-black duration-1000 bg-secondary p-2 rounded-sm">
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
