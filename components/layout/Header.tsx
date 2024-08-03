import darkLogo from "../../public/logo-dark-without-text.svg";
import lightLogo from "../../public/logo-without-text.svg";
import ThemeButton from "../ui/ThemeButton";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import "./header.css";

const HeaderClient = dynamic(() => import("@/components/layout/HeaderClient"), {
  ssr: false,
});

const Header: React.FC = () => {
  return (
    <header
      className="fixed min-h-16 top-2 left-0 right-auto z-50 w-full md:top-6 transition-transform duration-300"
      id="top-header"
    >
      <div className="flex items-center justify-center gap-3 mx-auto px-6 w-full">
        <div
          className="blur-background mx-auto max-w-6xl w-full relative rounded-full flex bg-white bg-opacity-40 px-4 min-h-14
          items-center max-h-14 border border-[rgba(191,204,217,0.5)]
          shadow-[0_0_1px_rgba(85,166,246,0.1),1px_1.5px_2px_-1px_rgba(85,166,246,0.15),4px_4px_12px_-2.5px_rgba(85,166,246,0.15)] dark:bg-black dark:bg-opacity-40 dark:border-[rgba(76,89,103,0.3)] dark:text-white"
        >
          <Link href="/" passHref>
            <Image
              src={lightLogo.src}
              className="w-14 h-auto cursor-pointer block dark:hidden"
              width="53"
              height="53"
              alt="Logo firmy KAMMYS"
            />
            <Image
              src={darkLogo.src}
              className="w-14 h-auto cursor-pointer hidden dark:block"
              width="53"
              height="53"
              alt="Logo firmy KAMMYS"
            />
          </Link>
          <nav className="hidden w-full sm:flex">
            <ul className="flex items-center justify-start gap-0 flex-grow font-sans font-normal text-[0.90rem] pl-6 text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)]">
              <Link href="/" passHref>
                <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full">
                  Strona Główna
                </li>
              </Link>
              <Link href="/oferta-przeprowadzki-transport" passHref>
                <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full">
                  Oferta
                </li>
              </Link>
              <Link href="/przeprowadzki" passHref>
                <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full">
                  Realizacje
                </li>
              </Link>
              <Link href="/kontakt" passHref>
                <li className="hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[rgba(255,255,255,0.08)] px-[12px] py-[6px] rounded-full">
                  Kontakt
                </li>
              </Link>
            </ul>
            <ThemeButton classList={"w-full ml-auto"} />
          </nav>
          <div
            className="p-3 h-full w-10 flex flex-col justify-between items-center cursor-pointer sm:hidden gap-1 ml-auto hover:bg-[rgba(85,166,246,0.3)] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-xl"
            id="menu-button"
          >
            <div className="w-8 bg-[#0959AA] h-1 rounded-lg"></div>
            <div className="w-8 bg-[#0959AA] h-1 rounded-lg"></div>
            <div className="w-8 bg-[#0959AA] h-1 rounded-lg"></div>
          </div>
        </div>
        <HeaderClient />
      </div>
    </header>
  );
};

export default Header;
