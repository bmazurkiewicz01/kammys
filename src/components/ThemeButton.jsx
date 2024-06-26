import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "../assets/Sun.svg";
import { ReactComponent as Moon } from "../assets/Moon.svg";
import "./ThemeButton.css";

const ThemeButton = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(userPrefersDark ? "dark" : "light");
      localStorage.setItem("theme", userPrefersDark ? "dark" : "light");
    } else {
      setTheme(savedTheme);
    }
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector(".dark_mode_input").checked = true;
    }
  }, []);

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
  };

  return (
    <div className="ml-auto w-max">
      <input
        className="w-0 h-0 hidden dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onClick={toggleTheme}
      />
      <label
        className="w-[65px] h-[30px] relative block bg-[#ebebeb] rounded-full shadow-[inner-custom-light] cursor-pointer transition duration-300 dark_mode_label"
        htmlFor="darkmode-toggle"
      >
        <Sun className="absolute w-[20px] top-[5px] left-[5px] fill-white transition duration-300 sun" />
        <Moon className="absolute w-[20px] top-[5px] left-[40px] fill-[#7e7e7e] transition duration-300 moon" />
      </label>
    </div>
  );
};

export default ThemeButton;
