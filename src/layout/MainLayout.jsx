import Header from "../components/Header";
import Canvas from "../components/Canvas";
import PropTypes from "prop-types";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
      <Canvas />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
