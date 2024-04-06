import Image from "next/image";
import React from "react";
import logo from "../../public/images/peugeot-logo-alt.png";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('https://images.alphacoders.com/843/843835.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white p-2">
        <div className="flex justify-between items-center py-[20px]">
          <div className="flex flex-row justify-center items-center gap-[30px] p-2 ">
            <div>
              <Image src={logo} alt="car-logo" width={100} height={40} />
            </div>
            <div className="flex gap-[20px] custom ">
              <p>MODELS</p>
              <p>ELECTRIC & HYBRID</p>
              <p>BUY</p>
              <p>BRAND/ABOUT US</p>
            </div>
            <hr className=" bg-white" />
          </div>
          <div>BUSINESS</div>
        </div>
        {/* <hr /> */}
      </div>
      {/* Landing Page Content */}
      {/* <div className="min-h-screen w-full flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Our Website
          </h1>
          <p className="mt-4 text-lg text-white">
            This is some dummy content for the landing page.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default LandingPage;
