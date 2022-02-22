import { useState } from "react";
import { useTheme } from "next-themes";
import { BsEmojiSunglassesFill, FaBeer } from "react-icons/fa";

const toggleDarkMode = (event) => {
  enabled;
  switchTheme();
};
const switchTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
};

export default function Navbar() {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between w-full p-3">
      <button
        onClick={switchTheme}
        type="button"
        className="p-2 pl-5 pr-5 text-lg text-green-500 bg-transparent bg-blue-700 border-2 border-green-300 rounded-lg dark:bg-blue-40 dark:border-hover:bg-green-500 hover:text-gray-100 dark:text-white"
      >
        <h3>
          Lets go for a <FaBeer />?
        </h3>
      </button>
      <h3></h3>
      <button
        onClick={switchTheme}
        type="button"
        className="p-2 pl-5 pr-5 text-lg text-green-500 bg-transparent border-2 border-green-300 rounded-lg hover:bg-green-500 hover:text-gray-100 dark:text-white"
      >
        asdf
      </button>
    </div>
  );
}
