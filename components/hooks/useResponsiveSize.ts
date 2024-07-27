import { useCallback, useEffect, useState } from "react";

const useResponsiveSize = () => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const setSizes = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setSizes);
    setSizes(); 

    return () => {
      window.removeEventListener("resize", setSizes); 
    };
  }, [setSizes]);

  return { width, height };
};

export default useResponsiveSize;
