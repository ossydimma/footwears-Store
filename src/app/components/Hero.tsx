import Image from "next/image";
import discount from "../Assets/design1.jpg";
import discount2 from "../Assets/design4.jpg";
import discount3 from "../Assets/design5.jpg";
import { Playfair_Display, Roboto_Condensed } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Condensed({ subsets: ["latin"] });

const Hero = () => {
  return (
    <main className="w-[100wv]   mt-[10vh] ">
      <section className=" relative">
        <div className="  heroBg overflow-hidden flex flex-col justify-center items-center gap-5 pt-24">
          <div className="herobgChild  text-4xl  flex flex-col justify-center items-center ">
            <p
              className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-2xl sm:text-3xl lg:text-5xl mb-2`}
            >
              Get your quality & timeless footwears.
            </p>
            <p className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}>
              {" "}
              shop over 40% off all products
            </p>
            <p className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}>
              Offer Expires in june 2023
            </p>
          </div>
          <button className=" flex items-center gap-3 text-[20px] bg-black hover:bg-[#ff4d4d] text-white p-4 ml-[350px] roundedLg">
            Start Shopping
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                {/* <rect width="24" height="24" fill="white"></rect>{" "} */}
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
