import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo.svg";
import ThemeButton from "./ThemeButton";
import "./Header.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onThemeChange = (oldTheme) => {
    setIsDarkMode(oldTheme === "dark" ? false : true);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setIsDarkMode(savedTheme);
  }, []);

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBackdrop = document.querySelector(".menu-backdrop");

    menu.classList.remove("animate-slide-out");
    menu.classList.add("animate-slide-in");

    menu.classList.remove("hidden");
    menuBackdrop.classList.remove("hidden");
  };

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const menuBackdrop = document.querySelector(".menu-backdrop");

    menu.classList.add("animate-slide-out");

    setTimeout(() => {
      menu.classList.add("hidden");
      menuBackdrop.classList.add("hidden");
    }, 500);
  };

  return (
    <header className="fixed top-2 left-0 right-auto z-30 w-full md:top-6">
      <div className="flex items-center justify-center gap-3 mx-auto px-6 w-full">
        <div
          className="mx-auto max-w-6xl w-full relative rounded-full flex bg-white bg-opacity-40 px-4 min-h-14 backdrop-blur-xl
          items-center max-h-14 border border-[rgba(191,204,217,0.5)] 
          shadow-[0_0_1px_rgba(85,166,246,0.1),1px_1.5px_2px_-1px_rgba(85,166,246,0.15),4px_4px_12px_-2.5px_rgba(85,166,246,0.15)] dark:bg-black dark:bg-opacity-40 dark:border-[rgba(76,89,103,0.3)] dark:text-white"
        >
          <img
            src={isDarkMode ? darkLogo : lightLogo}
            alt="Company truck logo"
            className="w-12 h-auto cursor-pointer"
          />
          <nav className="hidden w-full sm:flex">
            <ul className="flex items-center justify-start gap-3 flex-grow font-sans font-normal font text-[0.90rem] pl-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/o-nas">O nas</Link>
              </li>
              <li>
                <Link to="/">Placeholder</Link>
              </li>
              <li>
                <Link to="/">Placeholder</Link>
              </li>
            </ul>
            <ThemeButton classList={"w-full ml-auto"} onClick={onThemeChange} />
          </nav>
          <div
            className="p-3 h-full w-10 flex flex-col justify-between items-center cursor-pointer sm:hidden gap-1 ml-auto hover:bg-[rgba(85,166,246,0.3)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl"
            onClick={openMenu}
          >
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={openMenu}
            ></div>
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={openMenu}
            ></div>
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={openMenu}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="menu-backdrop fixed hidden z-40 top-0 left-0 h-screen w-screen bg-black opacity-40 "
        onClick={closeMenu}
      ></div>
      <div className="menu fixed hidden z-50 top-0 right-0 h-screen w-1/2 bg-[rgb(251,252,254)] dark:bg-[rgb(18,27,33)] text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)] p-4">
        <ThemeButton onClick={onThemeChange} />
        <ul className="flex flex-col items-start gap-4 mt-14 text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)]">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/o-nas" onClick={closeMenu}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Placeholder
            </Link>
          </li>
          <li>
            <Link to="/" onClick={closeMenu}>
              Placeholder
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
