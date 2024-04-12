import React from "react";

const Heading = (props: any) => {
  return (
    <h1 className="text-xl sm:text-2xl text-secondary md:text-3xl lg:text-4xl xl:text-5xl max-sm:text-3xl font-roboto tracking-wide leading-[2px] mb-[3px]">
      <span className="transition ease-linear duration-[1000ms] hover:border-b-2 border-transparent hover:border-black ">
        {props.title}
      </span>
    </h1>
  );
};

export default Heading;
