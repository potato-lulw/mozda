import Image from "next/image";
import { ThemeToggler } from "./components/theme-toggler";
import Header from "./components/header";

export default function Home() {
  return (
    <div className=" min-h-screen p-3 flex flex-col items-center font-[family-name:var(--font-geist-sans)] bg-background xl:px-80">
      <Header />
    </div>
  );
}
