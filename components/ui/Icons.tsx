"use client";
import { useTheme } from "next-themes";

export const ArrowRight = () => {
  const { resolvedTheme } = useTheme();

  return (
    <svg
      className="dark:text-[rgba(0,0,0,0.87)]"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.83 5.29L2.59 1.05C2.49704 0.956274 2.38644 0.881879 2.26458 0.83111C2.14272 0.780342 2.01202 0.754204 1.88 0.754204C1.74799 0.754204 1.61729 0.780342 1.49543 0.83111C1.37357 0.881879 1.26297 0.956274 1.17 1.05C0.983753 1.23736 0.879211 1.49082 0.879211 1.755C0.879211 2.01919 0.983753 2.27264 1.17 2.46L4.71 6L1.17 9.54C0.983753 9.72736 0.879211 9.98082 0.879211 10.245C0.879211 10.5092 0.983753 10.7626 1.17 10.95C1.26344 11.0427 1.37426 11.116 1.4961 11.1658C1.61794 11.2155 1.7484 11.2408 1.88 11.24C2.01161 11.2408 2.14207 11.2155 2.26391 11.1658C2.38575 11.116 2.49656 11.0427 2.59 10.95L6.83 6.71C6.92373 6.61704 6.99813 6.50644 7.04889 6.38458C7.09966 6.26272 7.1258 6.13201 7.1258 6C7.1258 5.86799 7.09966 5.73728 7.04889 5.61543C6.99813 5.49357 6.92373 5.38297 6.83 5.29Z"
        fill={resolvedTheme === "dark" ? "rgba(0,0,0,0.87)" : "#FFF2EE"}
      ></path>
    </svg>
  );
};

interface TripleCirclesProps {
  className?: string;
}

export const TripleCircles: React.FC<TripleCirclesProps> = ({ className }) => {
  const { resolvedTheme } = useTheme();

  return (
    <svg
      width="721"
      height="620"
      viewBox="0 0 721 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="360.5"
        cy="309.5"
        r="360"
        stroke={resolvedTheme === "dark" ? "#222222" : "#EEF0F3"}
      />
      <circle
        cx="360.5"
        cy="309.5"
        r="277"
        stroke={resolvedTheme === "dark" ? "#222222" : "#EEF0F3"}
      />
      <circle
        cx="360.5"
        cy="309.5"
        r="186"
        stroke={resolvedTheme === "dark" ? "#222222" : "#EEF0F3"}
      />
    </svg>
  );
};
