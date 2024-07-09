import PropTypes from "prop-types";

const Divider = ({ width = "w-64" }) => {
  return (
    <div className={`w-full mb-4`}>
      <div
        className={`h-1 mx-auto bg-[rgba(25,118,210,0.9)] ${width} opacity-25 my-0 py-0 rounded-t mb-10`}
      ></div>
    </div>
  );
};

Divider.propTypes = {
  width: PropTypes.string,
};

export default Divider;
