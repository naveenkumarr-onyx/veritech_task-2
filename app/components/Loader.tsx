import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-100"></div>
    </div>
  );
};

export default Loader;
