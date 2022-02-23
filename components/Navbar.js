import { useState, Fragment } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";
import { HiOutlineSun } from "react-icons/hi";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { FaRegMoon } from "react-icons/fa";
import OYButton from "../components/buttons/OYButton";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const switchShowNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Fragment>
      <div className="flex items-center justify-between w-full px-16 py-4">
        <Link href="/" passHref={true}>
          <a>
            <h1 className="text-xl">{"{JC}"}</h1>
          </a>
        </Link>
        <div className="flex items-center justify-between">
          <IconContext.Provider
            value={{ className: "h-8 w-8 m-1 cursor-pointer" }}
          >
            <Link href="https://github.com/JacobiClark/" passHref={true}>
              <GrGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/jacob-clarksd/"
              passHref={true}
            >
              <GrLinkedin />
            </Link>
          </IconContext.Provider>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={switchTheme}
            type="button"
            className="p-2 pl-5 pr-5 m-1 text-lg text-green-500 bg-transparent bg-blue-700 border-2 border-green-300 rounded-lg dark:bg-blue-40 dark:border-hover:bg-green-500 hover:text-gray-100 dark:text-white"
          >
            <h3>{theme === "light" ? <FaRegMoon /> : <HiOutlineSun />}</h3>
          </button>
          <OYButton buttonText="Resume" onClick={switchTheme} className="m-1" />
        </div>
      </div>
      {showNav && <div className="h-56 bg-pink-400 w-100"></div>}
    </Fragment>
  );
}
