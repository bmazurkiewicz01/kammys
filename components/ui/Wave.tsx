"use client";
import { useEffect, useCallback } from "react";
import { useCanvasContext } from "../hooks/useCanvas";
import { useTheme } from "next-themes";
import useResponsiveSize from "../hooks/useResponsiveSize";
import WaveObj from "../utils/wave";

const Wave: React.FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;
  const { theme } = useTheme();

  const waves = {
    frontWave: new WaveObj(
      [0.0211, 0.028, 0.015],
      theme === "dark" ? "rgba(2, 41, 79, 0.4)" : "rgba(180, 213, 249, 0.5)"
    ),
    backWave: new WaveObj(
      [0.0122, 0.018, 0.005],
      theme === "dark" ? "rgba(2, 50, 80, 0.3)" : "rgba(190, 200, 249, 0.5)"
    ),
  };

  const render = useCallback(() => {
    if (context) {
      if (document.documentElement.classList.contains("dark")) {
        waves.frontWave.color = "rgba(2, 41, 79, 0.4)";
        waves.backWave.color = "rgba(2, 50, 80, 0.3)";
      } else {
        waves.frontWave.color = "rgba(180, 213, 249, 0.5)";
        waves.backWave.color = "rgba(190, 200, 249, 0.5)";
      }

      context.clearRect(0, 0, width, height);
      Object.values(waves).forEach((wave) => {
        wave.draw(context, width, height, frequency);
      });
      frequency += 0.013;
      requestAnimationFrame(render);
    }
  }, [context, width, height, frequency]);

  useEffect(() => {
    if (context) render();
  }, [context, render]);

  return null;
};

export default Wave;
