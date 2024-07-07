import { Link } from "react-router-dom";
import darkLogo from "../assets/logo-dark.svg";
import lightLogo from "../assets/logo.svg";
import PropTypes from "prop-types";
import Canvas from "./Canvas";

const Footer = ({ isDarkMode, className }) => {
  return (
    <footer className={className}>
      <Canvas isDarkMode={isDarkMode} />
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                <Link to="/" className="inline-block" aria-label="Cruip">
                  <img
                    src={isDarkMode ? darkLogo : lightLogo}
                    alt="Company truck logo"
                    className="w-12 h-auto cursor-pointer"
                  />
                </Link>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              <div className="text-sm">
                <h6 className="text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)] font-medium dark:font-bold mb-1">
                  Products
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100  transition duration-150 ease-in-out"
                    >
                      Web Studio
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      DynamicBox Flex
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Programming Forms
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-sm">
                <h6 className="text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)] font-medium dark:font-bold mb-1">
                  Resources
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Visual mockups
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Nostrud exercitation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-[rgb(19,17,32)] dark:text-[rgb(191,204,217)] font-medium dark:font-bold mb-1">
                  Company
                </h6>
                <ul>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Labore et dolore
                    </Link>
                  </li>
                  <li className="mb-1">
                    <Link
                      to="/"
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 transition duration-150 ease-in-out"
                    >
                      Consectetur adipiscing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  to="/"
                  className="flex justify-center items-center border-solid border-[1px] border-[rgb(110,180,255)] text-[rgb(110,180,255)] dark:[rgb(110,180,255)] dark:bg-gray-800 hover:bg-[rgb(107,178,253)] hover:text-white dark:hover:text-gray-100 dark:hover:bg-[rgb(91,168,251)] dark:border-none rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center border-solid border-[1px] border-[rgb(110,180,255)] text-[rgb(110,180,255)] dark:[rgb(110,180,255)] dark:bg-gray-800 hover:bg-[rgb(107,178,253)] hover:text-white dark:hover:text-gray-100 dark:hover:bg-[rgb(91,168,251)] dark:border-none rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  to="/"
                  className="flex justify-center items-center border-solid border-[1px] border-[rgb(110,180,255)] text-[rgb(110,180,255)] dark:[rgb(110,180,255)] dark:bg-gray-800 hover:bg-[rgb(107,178,253)] hover:text-white dark:hover:text-gray-100 dark:hover:bg-[rgb(91,168,251)] dark:border-none rounded-full transition duration-150 ease-in-out"
                  aria-label="Tiktok"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6,10.14a8.62,8.62,0,0,1-5.19-1.71A8.46,8.46,0,0,1,13.12,4,8.79,8.79,0,0,1,13,2.5H7.87V32.58a4.82,4.82,0,1,1-4.69-4.84,4.55,4.55,0,0,1,2.42.7V21.23a10.8,10.8,0,0,0-1.5-.11A10.93,10.93,0,1,0,14.25,32.14v-15a12,12,0,0,0,2.4,1.22,12.3,12.3,0,0,0,4.92.9Z"
                      fill="currentColor"
                      transform="translate(12, 5) scale(0.50)"
                    />
                  </svg>
                </Link>
              </li>
            </ul>

            <div className="text-gray-500 dark:text-gray-400 text-sm mr-4">
              &copy; przeprowadzkigorzow.com, Wszystkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

export default Footer;
