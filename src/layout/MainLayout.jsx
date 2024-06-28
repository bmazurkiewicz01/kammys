import Header from "../components/Header";
import PropTypes from "prop-types";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-[#fefeff] dark:bg-[#080f10]">{children}</main>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
