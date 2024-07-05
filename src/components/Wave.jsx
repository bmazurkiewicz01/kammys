import { useEffect, useState, useCallback } from "react";
import { useCanvasContext } from "../hooks/useCanvas";
import useResponsiveSize from "../hooks/useResponsiveSize";
import WaveObj from "../utils/wave";

const Wave = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const height = 600;
  let frequency = 0.013;

  const waves = {
    frontWave: new WaveObj(
      [0.0211, 0.028, 0.015],
      isDarkMode ? "rgb(236, 71, 85, 0.1)" : "rgb(236, 71, 85, 0.5)"
    ),
    backWave: new WaveObj(
      [0.0122, 0.018, 0.005],
      isDarkMode ? "rgb(249, 168, 168, 0.1)" : "rgb(249, 168, 168, 0.5)"
    ),
  };

  const render = useCallback(() => {
    if (context) {
      context.clearRect(0, 0, width, height);
      Object.entries(waves).forEach(([, wave]) => {
        wave.draw(context, width, height, frequency);
      });
      frequency += 0.013;
      requestAnimationFrame(render);
    }
  }, [context, width, height, frequency, waves]);

  useEffect(() => {
    if (context) render();
  }, [context, render]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default Wave;
