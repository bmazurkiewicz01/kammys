import React from 'react';

interface DividerProps {
  width?: string; 
}

const Divider: React.FC<DividerProps> = ({ width = "w-64" }) => {
  return (
    <div className="w-full mb-4">
      <div
        className={`h-1 mx-auto bg-[rgba(25,118,210,0.9)] ${width} opacity-25 my-0 py-0 rounded-t mb-10`}
      ></div>
    </div>
  );
};

export default Divider;
