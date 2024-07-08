import { useEffect, useState, useId, useRef } from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import PropTypes from "prop-types";
import "./ThemeButton.css";

const ThemeButton = ({ classList, onClick }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  const id = useId();
  const selectedThemeRef = useRef(theme);

  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(userPrefersDark ? "dark" : "light");
      localStorage.setItem("theme", userPrefersDark ? "dark" : "light");
      selectedThemeRef.current = userPrefersDark ? "dark" : "light";
    } else {
      setTheme(savedTheme);
      selectedThemeRef.current = savedTheme;
    }
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("dark");
    }
  }, [selectedThemeRef]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      document.querySelector("body").classList.remove("dark");
    }
    onClick && onClick(theme);
  };

  return (
    <div
      className={`ml-auto w-max dark:outline-[rgba(156,204,252,0.1)] dark:border-solid dark:border-1 dark:shadow-[rgba(3,51,99,0.2)] ${
        classList ? classList : ""
      }`}
    >
      <input
        className="w-0 h-0 hidden dark_mode_input"
        type="checkbox"
        id={id}
        onClick={toggleTheme}
        defaultChecked={selectedThemeRef.current === "dark"}
      />
      <label
        className="w-[65px] h-[30px] relative block bg-[#ebebeb] rounded-full shadow-[inner-custom-light] cursor-pointer transition duration-300 dark_mode_label"
        htmlFor={id}
      >
        <Sun className="absolute w-[20px] top-[5px] left-[5px] fill-white transition duration-300 sun" />
        <Moon className="absolute w-[20px] top-[5px] left-[40px] fill-[#7e7e7e] transition duration-300 moon" />
      </label>
    </div>
  );
};

ThemeButton.propTypes = {
  classList: PropTypes.string,
  onClick: PropTypes.func,
};

export default ThemeButton;
