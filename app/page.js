import Image from "next/image";
import { ThemeToggler } from "./components/theme-toggler";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className=" min-h-screen p-3 flex flex-col items-center font-[family-name:var(--font-geist-sans)] bg-background ">
      <Header />
      <Hero />
      {
        Array(6).map((index) => {
          return (
            <div key={index} className="m-3">
              bruv
            </div>
          );
        })
      }
    </div>
  );
}
