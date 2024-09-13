import Image from "next/image";
import { ThemeToggler } from "./components/theme-toggler";
import Header from "./components/header";
import Hero from "./components/hero";
import BlogCard from "./components/blogcard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center font-[family-name:var(--font-geist-sans)] bg-background">
      <Header />


      <Hero />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-[1024px] md:px-10 px-20 lg:px-0 lg:py-4">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => {
            return (
              <BlogCard key={index} title={`Title ${index}`} imageSrc={`/path/to/image${index}`} comments={index} lastUpdated={`Updated ${index} days ago`} id={index} />
            );
          })
        }
      </div>
    </div>
  );
}
