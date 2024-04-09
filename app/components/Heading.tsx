import React from "react";

const Heading = (props: any) => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-sm:text-3xl font-roboto tracking-wide leading-[2px] mb-[3px]">
        {props.title}
      </h1>
    </div>
  );
};

export default Heading;
