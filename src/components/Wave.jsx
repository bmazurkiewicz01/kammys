import { useEffect, useCallback } from "react";
import { useCanvasContext } from "../hooks/useCanvas";
import useResponsiveSize from "../hooks/useResponsiveSize";
import WaveObj from "../utils/wave";
import PropTypes from "prop-types";

const Wave = ({ isDarkMode }) => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;
  let frequency = 0.013;

  const waves = {
    frontWave: new WaveObj(
      [0.0211, 0.028, 0.015],
      isDarkMode ? "rgb(2, 41, 79, 0.4)" : "rgb(180, 213, 249, 0.5)",
    ),
    backWave: new WaveObj(
      [0.0122, 0.018, 0.005],
      isDarkMode ? "rgb(2, 50, 80, 0.3)" : "rgb(190, 200, 249, 0.5)",
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

  return null;
};

Wave.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default Wave;
