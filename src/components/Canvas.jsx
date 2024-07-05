import { useRef, useEffect, useState } from "react";

import { CanvasContext } from "../hooks/useCanvas";
import useResponsiveSize from "../hooks/useResponsiveSize";
import Wave from "./Wave";

const Canvas = () => {
  const canvasRef = useRef(null);
  const { width } = useResponsiveSize();
  const [context, setContext] = useState(undefined);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (ctx) setContext(ctx);
  }, []);

  return (
    <>
      <CanvasContext.Provider value={{ context }}>
        <canvas
          id="canvas"
          ref={canvasRef}
          width={width}
          height={220}
          className="w-full  max-w-[100vw]"
        ></canvas>
        <Wave />
      </CanvasContext.Provider>
    </>
  );
};

export default Canvas;
