import { Menu, Transition } from "@headlessui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  BsFillMoonStarsFill
} from "react-icons/bs";

export default function menu(setDarkMode, darkMode) {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div className="flex items-center justify-between md:w-auto order-1" id="navbar-sticky">
        <ul className="flex p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 flex-row space-x-4 md:space-x-8 md:mt-0 text-md md:text-lg md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
          <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="whoami"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <p>Who am I?</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="facts"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <p>Facts</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <p>Skills</p>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1500}
              >
                <p>Portfolio</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="order-2 pt-4 pr-5 md:pt-0 md:pr-20">
        <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
              />
      </div>
      </div>
    </nav>
  )
}
