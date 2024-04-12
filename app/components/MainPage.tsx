"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MainPage = () => {
  return (
    <div
      className="min-h-screen p-8 max-sm:p-4 grid grid-flow-col grid-rows-2 bg-green-400"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dfhew0ljw/image/upload/v1712668656/bg_scixmy.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row justify-between">
        <div>
          <Image
            src="https://res.cloudinary.com/dfhew0ljw/image/upload/v1712848511/peugeot-logo-alt_ppjjak.png"
            height={100}
            width={100}
            alt="logo"
            priority
          />
        </div>
        <div
          className="text-white cursor-pointer flex gap-9 font-roboto flex-row  max-sm:hidden "
          onClick={() => {
            alert("click reveal button");
          }}
        >
          <h1>HOME</h1>
          <h1>ABOUT</h1>
          <h1>SPECIFICATIONS</h1>
          <h1>MODELS</h1>
          <h1>COMMUNITY</h1>
        </div>
        <div
          className="text-white flex flex-row gap-5  text-5xl"
          onClick={() => alert("click reveal button")}
        >
          <FaFacebookF className="max-sm:hidden" />
          <FaSquareXTwitter />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="">
            <h1 className="text-5xl font-roboto text-secondary">PUEOGOT-508</h1>
            <h1 className="text-lg leading-[15px] tracking-widest  text-white">
              UNIQUE SENSATIONS
            </h1>
          </div>
          <div>
            <h1 className="font-roboto text-white text-3xl">
              Powerful , Fun and
            </h1>
            <h1 className="text-2xl text-white">FIERCE TO</h1>
            <span className="text-7xl font-roboto text-red-700">DRIVE</span>
            <h1 className="leading-10 text-lg text-white">
              Real Power,Real Performance
            </h1>
          </div>
        </div>
        <div className="flex items-center animate-pulse">
          <Link
            href="/specpage"
            className="rounded px-4 py-2 text-white bg-secondary inline-flex items-center gap-1"
          >
            <div className="flex items-center gap-3">
              <span>Reveal more</span>
              <span>
                <FaArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
