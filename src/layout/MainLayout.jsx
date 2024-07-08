import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onThemeChange = (oldTheme) => {
    setIsDarkMode(oldTheme === "dark" ? false : true);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    if (!savedTheme) {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(userPrefersDark);
    } else {
      setIsDarkMode(savedTheme);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-full">
      <Header isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
      <Footer isDarkMode={isDarkMode} className="mt-auto" />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
