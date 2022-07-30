import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import blackLogo from "../public/images/blackLogo.png";
import whiteLogo from "../public/images/whiteLogo.png";
import Button from "./Button";
import Drawer from "./Drawer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav
        className={
          isOpen
            ? "w-full bg-accent px-4 py-1 transition duration-200 ease-in-out"
            : "px-4 py-1 dark:bg-gray dark:text-white"
        }
        id="myTopnav"
      >
        <div className="navBar text-normal mt-4 flex items-center justify-between xl:px-16">
          <div className="navTitle flex items-center">
            <Link href="/">
              <a>
                {theme === `dark` ? (
                  <Image src={whiteLogo} width={70} height={70} />
                ) : (
                  <Image src={blackLogo} width={70} height={70} />
                )}
              </a>
            </Link>
          </div>

          <div className="actions flex space-x-7">
            <div className="navLinks hidden sm:flex">
              <ul className="flex cursor-pointer items-center space-y-7 sm:space-y-0 sm:space-x-7">
                <li>
                  <a
                    href="https://blog.mahdibeldjoudi.xyz/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                  >
                    <span>Blog</span>
                  </a>
                </li>
                <li>
                  <Link href="#projects">
                    <a className="font-semibold">
                      <span>Projects</span>
                    </a>
                  </Link>
                </li>
                <li className="">
                  <Button
                    href="mailto:mehdiibeldjoudi@gmail.com"
                    bgColor="bg-accent"
                    txtColor=" text-white"
                    text="Contact"
                  />
                </li>
                <li>
                  <button
                    className={
                      "py-4 px-6 " +
                      (theme === "dark"
                        ? "bg-white text-black"
                        : "bg-black text-white")
                    }
                    onClick={toggleDarkMode}
                  >
                    {theme === "dark" ? (
                      <FontAwesomeIcon icon={faSun} />
                    ) : (
                      <FontAwesomeIcon icon={faMoon} />
                    )}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="CTAs flex items-center sm:hidden">
            <button
              className={
                "mr-3 py-3 px-4 transition duration-200 rounded-xl " +
                (theme === "dark"
                  ? "bg-white text-black"
                  : "bg-black text-white")
              }
              onClick={toggleDarkMode}
            >
              {theme === "dark" ? (
                <FontAwesomeIcon icon={faSun} />
              ) : (
                <FontAwesomeIcon icon={faMoon} />
              )}
            </button>
            <button
              className={
                "py-3 px-4 transition duration-200 rounded-xl " +
                (theme === "dark" ? "text-white" : "text-black")
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faXmark} size="2x" />
              )}
            </button>
          </div>
        </div>
        {isOpen && <Drawer />}
      </nav>
    </>
  );
}

export default Navbar;
