import Header from "../components/Header";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import "./MainLayout.css";

const MainLayout = ({ isDarkMode, onThemeChange, children, onMenuToggle }) => {
  return (
    <div className="flex flex-col min-h-full">
      <Header
        isDarkMode={isDarkMode}
        onThemeChange={onThemeChange}
        onMenuToggle={onMenuToggle}
      />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
      <Footer isDarkMode={isDarkMode} className="mt-auto" />
    </div>
  );
};

MainLayout.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  onThemeChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  onMenuToggle: PropTypes.func.isRequired,
};

export default MainLayout;
