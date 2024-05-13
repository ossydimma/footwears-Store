"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Playfair_Display, Roboto_Condensed } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });
const roboto = Roboto_Condensed({ subsets: ["latin"] });

const Hero = () => {

  return (
    <main className="w-[100wv] mt-1  lg:mt-[2vh] ">
      <section>
        <Swiper
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          
          pagination={{
            dynamicBullets: true,
            clickable: true,
           
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="  heroBg h-[35vh] lg:h-[60vh] overflow-hidden flex flex-col justify-center items-center gap-2 lg:gap-5 pt-20 lg:pt-24">
              <div className="herobgChild  text-4xl  flex flex-col justify-center items-center ">
                <h2
                  className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-xl sm:text-2xl lg:text-6xl mb-2`}
                >
                  Get your quality & timeless footwears.
                </h2>
                <p
                  className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-lg sm:text-xl lg:text-4xl mb-2`}
                >
                  {" "}
                  shop over{" "}
                  <span
                    className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}
                  >
                    10%
                  </span>{" "}
                  off all products
                </p>
                <p
                  className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-lg sm:text-xl lg:text-4xl mb-2`}
                >
                  <span
                    className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}
                  >
                    Offer
                  </span>{" "}
                  Expires in{" "}
                  <span
                    className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}
                  >
                    june 2024
                  </span>
                </p>
              </div>
              <button
                className={` ${roboto.className} buttonTrans flex items-center gap-2 text-xs sm:text-[15px] lg:text-[20px] bg-black hover:bg-[#ff4d4d]   p-2 lg:p-4 ml-[250px] lg:ml-[380px] roundedLg `}
              >
                Shop Now
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-5 sm:w-6 lg:w-8 "
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="  heroBg1 h-[35vh] lg:h-[60vh] overflow-hidden flex flex-col justify-center items-center gap-2 lg:gap-5 lg:pt-24">
              <div className="herobgChild  text-4xl  flex flex-col justify-center items-center ">
                <p
                  className={` ${playfair.className}  heroBgChild text-[#ff4d4d] font-semibold text-2xl sm:text-3xl lg:text-6xl mb-2`}
                >
                  BECOME A MEMBER.
                </p>
                <p
                  className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-2xl sm:text-3xl lg:text-6xl mb-2 `}
                >
                  {" "}
                  &
                </p>
                <p
                  className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-xl sm:text-2xl lg:text-4xl mb-2 `}
                >
                  GET{" "}
                  <span
                    className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}
                  >
                    20%
                  </span>{" "}
                  OFF
                </p>
              </div>
              <button
                className={` ${roboto.className} buttonTrans flex items-center gap-2 text-[10px] sm:text-[15px] lg:text-[20px] bg-black hover:bg-[#ff4d4d] p-2 lg:p-4 ml-[250px] lg:ml-[380px] roundedLg `}
              >
                Sign up for free
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" w-5 sm:w-6 lg:w-8 "
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </SwiperSlide>
          
        </Swiper>
        {/* <div className="  heroBg overflow-hidden flex flex-col justify-center items-center gap-5 pt-24">
          <div className="herobgChild  text-4xl  flex flex-col justify-center items-center ">
            <p
              className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-2xl sm:text-3xl lg:text-5xl mb-2`}
            >
              Get your quality & timeless footwears.
            </p>
            <p className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-xl sm:text-2xl lg:text-4xl mb-2`}>
              {" "}
              shop over <span className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}>10%</span>  off all products
            </p>
            <p className={` ${playfair.className}  heroBgChild1 text-[#000] font-semibold text-xl sm:text-2xl lg:text-4xl mb-2`}>
              <span className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}>Offer</span> Expires in  <span className={` ${roboto.className} text-[#ff4d4d]  heroBgChild `}>june 2024</span>
            </p>
          </div>
          <button className= {` ${roboto.className} buttonTrans flex items-center gap-3 text-[20px] bg-black hover:bg-[#ff4d4d]  p-4 ml-[380px] roundedLg `}>
            Shop Now
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
        {/* <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div> */}
      </section>
    </main>
  );
};

export default Hero;
