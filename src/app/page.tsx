import Image from "next/image";
import Banner from "./Component/Banner";
import HomeBg from "./Component/HomeBg";
import WelcomeTo from "./Component/WelcomeTo";
import PopularCategory from "./Component/PopularCategory";
import BestSeller from "./Component/BestSeller";
import Faqs from "./Component/Faqs";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <>
    <Banner />
    <HomeBg/>
    <WelcomeTo/>
    <PopularCategory/>
    <BestSeller/>
    <Faqs/>
    <Footer/>
    </>
  );
}
