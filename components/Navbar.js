import { useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { FaRegMoon } from "react-icons/fa";
import OYButton from "../components/buttons/OYButton";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="flex items-center justify-between w-full px-16 py-4">
      {showNav && <h1 className="text-xl">{"{JC}"}</h1>}
      <button
        onClick={switchTheme}
        type="button"
        className="p-2 pl-5 pr-5 text-lg text-green-500 bg-transparent bg-blue-700 border-2 border-green-300 rounded-lg dark:bg-blue-40 dark:border-hover:bg-green-500 hover:text-gray-100 dark:text-white"
      >
        <h3>{theme === "light" ? <FaRegMoon /> : <HiOutlineSun />}</h3>
      </button>
      <button onClick={() => setShowNav(!showNav)}>asdf</button>
      <OYButton buttonText="Resume" onClick={switchTheme} />
    </div>
  );
}
