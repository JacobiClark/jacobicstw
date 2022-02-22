import { useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex justify-between w-full p-3">
      <button
        onClick={switchTheme}
        type="button"
        className="p-2 pl-5 pr-5 text-lg text-green-500 bg-transparent border-2 border-green-300 rounded-lg hover:bg-green-500 hover:text-gray-100 dark:text-white"
      >
        asdf
      </button>
      <button
        onClick={switchTheme}
        type="button"
        className="p-2 pl-5 pr-5 text-lg text-green-500 bg-transparent bg-blue-700 border-2 border-green-300 rounded-lg dark:bg-blue-40 dark:border-hover:bg-green-500 hover:text-gray-100 dark:text-white"
      >
        <h3>{theme === "light" ? <FaRegMoon /> : <HiOutlineSun />}</h3>
      </button>
    </div>
  );
}
