import Image from "next/image";
import { NavBar } from "./components/NavBar";
import Hero from "./components/Hero";
import NewArrival from "./components/NewArrival";

export default function Home() {
  return (
    <main className="">
      
      <Hero />
      <NewArrival />
    </main>
  );
}
