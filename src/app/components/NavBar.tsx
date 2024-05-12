"use client";
import { Bebas_Neue, Roboto } from "next/font/google";
import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export interface themeType {
  theme: "" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"" | "dark">>;
}

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const NavBar = ({ theme, setTheme }: themeType) => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    localStorage.currentTheme === null
      ? localStorage.setItem("currentTheme", "")
      : "";
    if (localStorage.currentTheme === "dark") {
      setTheme("dark");
      setIsDark(true);
    } else {
      setTheme("");
      setIsDark(false);
    }

    window.innerWidth > 860 ? setShowMenu(true) : setShowMenu(false);

    window.addEventListener("resize", () => {
      window.innerWidth > 860 ? setShowMenu(true) : setShowMenu(false);
    });
  }, []);
  return (
    <nav
      className={`fixed  top-0 w-[100%] border-b-2 border-[#484848] bg-inherit  z-10`}
    >
      <div
        className={
          " relative flex items-center justify-between mx-4 sm:mx-6 lg:mx-14 lg:  h-[8vh] sm:h-[10vh]  pt-4 pb-4   sm:pt-6   "
        }
      >
        <h2
          className={` text-black text-sm font-medium sm:text-2xl dark:text-white uppercase `}
        >
          FootWear Store
        </h2>

        {/* <--------------------------------  MENU CENTER  ------------------------------> */}
        <div className={`flex ${bebasNeue.className}` }>
          {showMenu && (
            <ul
              className={clsx(
                `    h-screen w-[62%] pb-20 px-3 flex flex-col font-medium text-xl  z-20 gap-[50px] bg-black dark:bg-[#f3f3f5]  absolute right-[-45px] top-0 fill-[#0a0a0a] sm:right-[-28px] lg:flex-row lg:static lg:bg-[inherit] lg:h-6 lg:w-auto lg:pb-0 lg:pl-0 lg:pr-16 dark:lg:bg-[inherit] text-[#c7c7c7] dark:text-[#0e0d0e]  dark:lg:text-[#c7c7c7] lg:text-[#0a0a0a]`,
                {
                  " dark:lg:text-[#c7c7c7] dark:lg:fill-[#c7c7c7] ":
                    theme !== "dark",
                }
              )}
            >
              {/* <----------------- CANCEL ICON ------------------> */}

              <li className="-ml-12 pl-3 mt-16 rounded-tl-3xl rounded-br-3xl w-24 bg-[#00FDEE] visible lg:hidden fill-white dark:fill-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M9.89324 3.45816L7.51247 5.92536L5.04527 3.54459C4.74253 3.25245 4.26009 3.26105 3.96795 3.56379L3.43889 4.11206C3.14675 4.4148 3.15535 4.89724 3.45809 5.18938L5.92529 7.57015L3.54452 10.0373C3.25238 10.3401 3.26098 10.8225 3.56372 11.1147L4.11199 11.6437C4.41473 11.9359 4.89717 11.9273 5.18931 11.6245L7.57008 9.15733L10.0373 11.5381C10.34 11.8302 10.8225 11.8216 11.1146 11.5189L11.6437 10.9706C11.9358 10.6679 11.9272 10.1854 11.6245 9.8933L9.15726 7.51253L11.538 5.04534C11.8302 4.7426 11.8216 4.26016 11.5188 3.96802L10.9706 3.43896C10.6678 3.14682 10.1854 3.15542 9.89324 3.45816Z"
                    className=" cursor-pointer"
                    onClick={() => setShowMenu(!showMenu)}
                  />
                </svg>
              </li>
              <li
                className={` border-b-2 pb-7 lg:pb-[38px] border-[#c7c7c7] hover:border-[#ff4d4d] dark:border-[#0a0a0a]  dark:hover:border-[#ff4d4d] lg:border-b-0  lg:hover:border-b-[3px]`}
              >
                <Link
                  href="/"
                  className={
                    pathname === "/" ? "  text-[#ff4d4d] " : ""
                  }
                >
                  {" "}
                  Shop{" "}
                </Link>
              </li>
              <li
                className={` border-b-2 pb-7 lg:pb-[38px] border-[#c7c7c7] hover:border-[#ff4d4d] dark:border-[#0a0a0a]  dark:hover:border-[#ff4d4d] lg:border-b-0  lg:hover:border-b-[3px]`}
              >
                <Link
                  href="/product"
                  className={
                    pathname === "/product"
                      ? "text-[#ff4d4d] "
                      : ""
                  }
                >
                  Products{" "}
                </Link>
              </li>

              <li
               className={` border-b-2 pb-7 lg:pb-[38px] border-[#c7c7c7] hover:border-[#ff4d4d] dark:border-[#0a0a0a]  dark:hover:border-[#ff4d4d] lg:border-b-0  lg:hover:border-b-[3px]`}
              >
                <Link
                  href="/contact"
                  className={
                    pathname === "/contact"
                      ? "text-[#ff4d4d]"
                      : ""
                  }
                >
                  Contact{" "}
                </Link>
              </li>

             
            </ul>
          )}

        </div>
         {/* <------------------- MENU RIGHT ------------------> */}
        <ul className=" flex items-center gap-2 lg:gap-5 stroke-black dark:stroke-white">

          {/* Search icon  */}

          <li className=" relative cursor-pointer hover:stroke-[gray]">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none hidden mr-5 bg-[#dcd8d8] dark:bg-[#68636322] w-40 py-[7px] rounded-3xl pl-12 lg:block text-[#0a0a0a] dark:text-white  "
            />
            <span className=" static lg:absolute top-[1.9px] left-[2px] rounded-full hover:bg-none lg:hover:bg-[#c7c7c7] p-1.5 dark:hover:lg:bg-[#191919]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-search w-4 sm:w-5 Lg:w-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </span>
          </li>

          {/* FAV ICON */}

          <li className=" cursor-pointer hover:stroke-[gray]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heart-plus w-4 sm:w-5 Lg:w-6 "
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.96 6.053" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
          </li>

          {/* CART ICON */}

          <li className=" cursor-pointer hover:stroke-[gray]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart  w-4 sm:w-5 Lg:w-6"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </li>

          {/* USER ICON */}

          <li className=" cursor-pointer hover:stroke-[gray]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user  w-4 sm:w-5 Lg:w-6"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </li>

          {/* TOGGLE SWITCH */}

          <li
            className=" bg-black p-1 lg:p-2 rounded-full fill-white dark:bg-white dark:stroke-black dark:fill-black cursor-pointer"
            onClick={() => {
              if (isDark) {
                setIsDark(false);
                setTheme("");
                localStorage.setItem("currentTheme", "light");
              } else {
                setIsDark(true);
                setTheme("dark");
                localStorage.setItem("currentTheme", "dark");
              }
            }}
          >
            {isDark && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sun  w-4 sm:w-5 Lg:w-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
              </svg>
            )}

            {!isDark && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon-filled  w-4 sm:w-5 Lg:w-6"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                  strokeWidth="0"
                />
              </svg>
            )}
          </li>

          {/* <------------------- HAMBURGER MENU ICON ------------------> */}
          <li>
            {
              <svg
                viewBox="0 -0.5 25 25"
                width={55}
                height={55}
                className={
                  " cursor-pointer  w-10 block lg:hidden sm:w-16 fill-white "
                }
                onClick={() => setShowMenu(!showMenu)}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M5.5 7.75C5.08579 7.75 4.75 8.08579 4.75 8.5C4.75 8.91421 5.08579 9.25 5.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM17.5 13.25C17.9142 13.25 18.25 12.9142 18.25 12.5C18.25 12.0858 17.9142 11.75 17.5 11.75V13.25ZM5.5 15.75C5.08579 15.75 4.75 16.0858 4.75 16.5C4.75 16.9142 5.08579 17.25 5.5 17.25V15.75ZM12.5 17.25C12.9142 17.25 13.25 16.9142 13.25 16.5C13.25 16.0858 12.9142 15.75 12.5 15.75V17.25ZM5.5 9.25H19.5V7.75H5.5V9.25ZM5.5 13.25H17.5V11.75H5.5V13.25ZM5.5 17.25H12.5V15.75H5.5V17.25Z"></path>{" "}
                </g>
              </svg>
            }
          </li>
        </ul>

        {/* <div className=" -ml-24 "></div> */}
      </div>
    </nav>
  );
};
