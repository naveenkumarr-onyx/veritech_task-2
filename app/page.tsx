import Allure from "./components/Allure";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Online from "./components/Online";
import Specifications from "./components/Specifications";
import Tesing from "./components/Tesing";

export default function Home() {
  return (
    <div className=" flex flex-col gap-[30px]">
      <LandingPage />
      <Specifications />
      <Online />
      <Allure />
      <Footer />
    </div>
  );
}
