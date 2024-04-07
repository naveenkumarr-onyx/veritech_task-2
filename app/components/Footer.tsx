import Image from "next/image";
import React from "react";
import logo from "../../public/images/peugeot-logo-alt.png";

const Footer = () => {
  return (
    <div className=" bg-black p-6  flex flex-col items-center gap-3 max-sm:gap-5">
      <div className="text-primary flex justify-end w-full">
        <h1 className=" font-roboto">FOLLOW PEUGEOT</h1>
      </div>
      <div>
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className="font-roboto text-primary">
        <p className=" text-center">
          Privacy Policy | Legal Information | Cookies Preferences | Cookies
          Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
