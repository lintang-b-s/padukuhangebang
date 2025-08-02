import Image from "next/image";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import Hero from "./ui/Hero";
import About from "./ui/About";
import TopDestinations from "./ui/TopDestinations";
import Recommendation from "./ui/Recommendation";
import TopAttraction from "./ui/TopAttraction";
import Events from "./ui/Events";
import AboutGallery from "./ui/AboutGallery";
import {
  addDataArticles,
  addDataDestinations,
  addDataEvents,
  addDataUMKM,
} from "@/lib/addData";
import RecentArticles from "./ui/RecentArticle";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-mulish-sans)] relative min-h-screen w-screen overflow-x-hidden">
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
    </main>
  );
}
