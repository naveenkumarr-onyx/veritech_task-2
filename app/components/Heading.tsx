import React from "react";

const Heading = (props: any) => {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-sm:text-lg font-roboto tracking-wide leading-[2px]">
        {props.title}
      </h1>
    </div>
  );
};

export default Heading;
