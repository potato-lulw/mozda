import Image from "next/image";
import { ThemeToggler } from "./components/theme-toggler";
import Header from "./components/header";
import Hero from "./components/hero";
import BlogCard from "./components/blogcard";

export default function Home() {
  return (
    <div className=" min-h-screen p-3 flex flex-col items-center font-[family-name:var(--font-geist-sans)] bg-background ">
      <Header />
      <Hero />

      <div className="grid grid-cols-4 gap-4 w-[1024px] ">

        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
            return (
              <BlogCard key={index} title={index} imageSrc={index} comments={index} lastUpdated={index} id={index} />
            );
          })
        }
      </div>
    </div>
  );
}
