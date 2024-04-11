import React from "react";
import LandingPage from "../components/LandingPage";
import Specifications from "../components/Specifications";
import Online from "../components/Online";
import Excellence from "../components/Excellence";
import Allure from "../components/Allure";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className=" flex flex-col gap-8 max-sm:gap-5">
      <LandingPage />
      <Specifications />
      <Online />
      <Allure />
      <Excellence />
      <Footer />
    </div>
  );
};

export default Home;
