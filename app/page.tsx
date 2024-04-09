import Allure from "./components/Allure";
import Excellence from "./components/Excellence";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import LandingPage from "./components/LandingPage";
import Online from "./components/Online";
import Specifications from "./components/Specifications";
import Tesing from "./components/Tesing";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 max-sm:gap-5">
      <LandingPage />
      <Specifications />
      <Online />
      <Allure />
      <Excellence />
      <Footer />
      {/* <Heading title="HELLO" /> */}
    </div>
  );
}
