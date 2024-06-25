import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitial, setIsInitial] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
    setIsInitial(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsInitial(false);
  };

  return (
    <header className="fixed top-2 left-0 right-auto z-30 w-full md:top-6">
      <div className="flex items-center justify-center gap-3 mx-auto px-6 w-full">
        <div
          className="w-full relative rounded-full flex bg-[rgba(255, 255, 255, 0.4)] px-4 min-h-14 backdrop-blur-xl
          items-center max-h-14 border border-[rgba(191,204,217,0.5)] 
          shadow-[0_0_1px_rgba(85,166,246,0.1),1px_1.5px_2px_-1px_rgba(85,166,246,0.15),4px_4px_12px_-2.5px_rgba(85,166,246,0.15)]"
        >
          <img
            src={logo}
            alt="Company truck logo"
            className="w-12 h-auto cursor-pointer"
          />
          <nav className="hidden sm:block">
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
          </nav>
          <div
            className="p-3 h-full w-10 flex flex-col justify-between items-center cursor-pointer sm:hidden gap-1 ml-auto hover:bg-[rgba(85,166,246,0.3)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl"
            onClick={handleMenu}
          >
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={handleMenu}
            ></div>
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={handleMenu}
            ></div>
            <div
              className="w-8 bg-[#0959AA] h-1 rounded-lg"
              onClick={handleMenu}
            ></div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed z-40 top-0 left-0 h-screen w-screen bg-black opacity-40 sm:hidden"
          onClick={closeMenu}
        ></div>
      )}
      <div
        className={`fixed z-50 top-0 sm:hidden ${
          isOpen && "animate-slide-in opacity-100"
        }
          ${!isOpen && !isInitial && "animate-slide-out opacity-0"}
          ${!isOpen && isInitial && "opacity-0 hidden"}
        } h-screen w-1/2 bg-[rgb(251,252,254)] text-[rgb(19,17,32)] p-4`}
      >
        <ul className="flex flex-col items-start gap-4 mt-14 text-[rgb(19,17,32)]">
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
