import Header from "../components/Header";
import Canvas from "../components/Canvas";
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
    setIsDarkMode(savedTheme);
  }, []);
  return (
    <>
      <Header isDarkMode={isDarkMode} onThemeChange={onThemeChange} />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
      <Canvas isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
