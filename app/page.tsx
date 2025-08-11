import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import About from "./ui/About";
import TopDestinations from "./ui/TopDestinations";
import Recommendation from "./ui/Recommendation";
import TopAttraction from "./ui/TopAttraction";
import Events from "./ui/Events";
import AboutGallery from "./ui/AboutGallery";
import RecentArticles from "./ui/RecentArticle";
import { Worker } from "@react-pdf-viewer/core";
import Head from "next/head";

export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Head>
        <link
          rel="canonical"
          href="https://www.padukuhangebang.com/"
          key="canonical"
        />
      </Head>
      <Navbar />
      <Hero />
      <div className="flex flex-col space-y-2  ">
        <About />
        <Recommendation />
        <Events />
        <RecentArticles />
        <TopDestinations />
      </div>
      <TopAttraction />

      <div className=" py-2 mt-[50px] container">
        <AboutGallery />
      </div>

      <Footer />
    </div>
  );
}
