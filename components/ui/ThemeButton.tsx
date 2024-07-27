"use client";
import React from "react";
import { useEffect, useState, useId, useRef } from "react";
import Sun from "../../public/Sun.svg";
import Moon from "../../public/Moon.svg";
import Image from "next/image";
import "./themebutton.css";
import { useTheme } from 'next-themes';

interface ThemeButtonProps {
  classList?: string;
  onClick?: (theme: string) => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ classList, onClick }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const {setTheme, resolvedTheme} = useTheme();

  const id = useId();
  const selectedThemeRef = useRef(resolvedTheme);

  const toggleTheme = () => {
    setTheme(selectedThemeRef.current === "dark" ? "light" : "dark");
    selectedThemeRef.current = selectedThemeRef.current === "dark" ? "light" : "dark";
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <Image
      src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
      width={36}
      height={36}
      sizes="36x36"
      alt="Loading Light/Dark Toggle"
      priority={false}
      title="Loading Light/Dark Toggle"
    />
  )

  return (
    <div
      className={`ml-auto w-max dark:outline-[rgba(156,204,252,0.1)] dark:border-solid dark:border-1 dark:shadow-[rgba(3,51,99,0.2)] ${
        classList ? classList : ""
      }`}
    >
      <input
        className="w-0 h-0 hidden dark_mode_input"
        type="checkbox"
        id={id}
        onClick={toggleTheme}
        defaultChecked={selectedThemeRef.current === "dark"}
      />
      <label
        className="w-[65px] h-[30px] relative block bg-[#ebebeb] rounded-full shadow-[inner-custom-light] cursor-pointer transition duration-300 dark_mode_label"
        htmlFor={id}
      >
        <Image className="absolute w-[20px] top-[5px] left-[5px] fill-white transition duration-300 sun" src={Sun.src} alt="Sun icon" width={20} height={20}/>
        <Image className="absolute w-[20px] top-[5px] left-[40px] fill-[#7e7e7e] transition duration-300 moon" src={Moon.src} alt="Moon icon" width={20} height={20}/>
      </label>
    </div>
  );
};

export default ThemeButton;
