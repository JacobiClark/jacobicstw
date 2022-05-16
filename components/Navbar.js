import { useState, Fragment } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";
import { HiOutlineSun } from "react-icons/hi";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { FaRegMoon } from "react-icons/fa";
import { CgMenuRightAlt } from "react-icons/cg";
import OYButton from "../components/buttons/OYButton";

export default function Navbar() {
  const { theme, setTheme } = useTheme("dark");
  const [showNav, setShowNav] = useState(false);

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <Fragment>
      <header className="flex items-center justify-between w-full px-8 py-4 max-w-7xl">
        <Link href="/" passHref={true}>
          <a>
            <h1 className="text-2xl hover:scale-125">{"{JC}"}</h1>
          </a>
        </Link>
        <div className="flex items-center justify-between">
          <IconContext.Provider
            value={{ className: "h-8 w-8 m-1 cursor-pointer hover:scale-125" }}
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
            className="mx-5 hover:scale-125"
          >
            <span className="text-2xl text-gray-600 dark:text-orange-500">
              {theme === "light" ? <FaRegMoon /> : <HiOutlineSun />}
            </span>
          </button>{" "}
          <a
            href="./Jacob_Clark_CS_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className=" md:visible relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Resume
              </span>
            </button>
          </a>
        </div>
      </header>
      {showNav && <div className="h-56 bg-pink-400 w-100"></div>}
    </Fragment>
  );
}
