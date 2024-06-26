import Header from "../components/Header";
import PropTypes from "prop-types";

const MainLayout = ({ children, parentClasses }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div
        className={
          parentClasses
            ? parentClasses
            : "bg-gradient-to-b from-[#CEE5FD] to-white dark:from-[rgb(2,41,79)] dark:to-[rgba(9,14,16,0)] bg-no-repeat"
        }
        style={{
          backgroundSize: "100% 20%",
        }}
      >
        {children}
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  parentClasses: PropTypes.string,
};

export default MainLayout;
