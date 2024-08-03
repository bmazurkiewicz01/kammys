"use client";

import Link from "next/link";
import { useEffect } from "react";
import ThemeButton from "../ui/ThemeButton";
import Divider from "../ui/Divider";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const HeaderClient: React.FC = () => {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBackdrop = document.querySelector(".menu-backdrop");
    const globeBackground = document.querySelector(".globe-background");

    if (menu) {
      menu.classList.remove("animate-slide-out");
      menu.classList.add("animate-slide-in");
      menu.classList.remove("hidden");
    }
    if (menuBackdrop) {
      menuBackdrop.classList.remove("hidden");
    }
    if (globeBackground) {
      globeBackground.classList.add("hidden");
    }

    document.body.classList.add("no-scroll");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBackdrop = document.querySelector(".menu-backdrop");
    const header = document.getElementById("top-header");
    const globeBackground = document.querySelector(".globe-background");

    if (menu) {
      menu.classList.add("animate-slide-out");
    }
    document.body.classList.remove("no-scroll");

    if (header) {
      header.classList.remove("pr-[15px]");
    }

    setTimeout(() => {
      if (menu) menu.classList.add("hidden");
      if (menuBackdrop) menuBackdrop.classList.add("hidden");
      if (globeBackground) globeBackground.classList.remove("hidden");
    }, 500);
  };

  useEffect(() => {
    const menuButton = document.getElementById("menu-button");

    if (menuButton) {
      menuButton.onclick = openMenu;
    }
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = document.getElementById("top-header");

      if (header) {
        if (currentScrollY > lastScrollY) {
          header.classList.add("translate-y-[-84px]");
          header.classList.remove("translate-y-0");
        } else {
          header.classList.add("translate-y-0");
          header.classList.remove("translate-y-[-84px]");
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="menu-backdrop fixed hidden z-80 top-[-0.5rem] left-0 h-screen w-screen bg-black opacity-40"
        onClick={closeMenu}
      ></div>
      <div className="menu fixed hidden z-90 top-[-0.5rem] right-0 h-screen w-1/2 bg-[rgb(251,252,254)] dark:bg-[rgb(18,27,33)] text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)] p-4">
        <ThemeButton />
        <ul className="flex flex-col items-start gap-4 mt-14 text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)]">
          <Link href="/" className="w-full" onClick={closeMenu} passHref>
            <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full w-full">
              Strona Główna
            </li>
          </Link>
          <Link
            href="/oferta-przeprowadzki-transport"
            className="w-full"
            onClick={closeMenu}
            passHref
          >
            <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full w-full">
              Oferta
            </li>
          </Link>
          <Link
            href="/przeprowadzki"
            className="w-full"
            onClick={closeMenu}
            passHref
          >
            <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full w-full">
              Realizacje
            </li>
          </Link>
          <Link href="/kontakt" className="w-full" onClick={closeMenu} passHref>
            <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full w-full">
              Kontakt
            </li>
          </Link>
          <li className="w-full">
            <Divider width="w-full" mb="mb-0" />
          </li>
          <Link href="tel:+48667903199" className="w-full mt-[-1.5rem]">
            <li className="w-full max-w-2xl pt-3 flex justify-center">
              <div className="transition-btn-trans duration-250 ease-btn-trans-time delay-0 flex items-center justify-center cursor-pointer text-base md:text-xl px-[10px] py-[8px] uppercase text-white font-medium bg-[rgb(25,117,210)] rounded-md z-90 hover:shadow-btn-hover-shadow dark:text-[rgba(0,0,0,0.87)] dark:bg-[rgb(144,202,249)] dark:hover:bg-[rgb(66,165,245)]">
                <LocalPhoneIcon className="mr-2" />
                Zadzwoń
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HeaderClient;
