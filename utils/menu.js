import { Menu, Transition } from "@headlessui/react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function dropdown() {
  return (
    <div>
      <div className="grid grid-cols-5">
      <Link
            activeClass="active"
            to="facts"
            spy={true}
            smooth={true}
            duration={1200}
          >
            <h3>Facts</h3>
        </Link>
        <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            duration={1500}
          >
            <h3>Skills</h3>
        </Link>
        <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={2000}
          >
            <h3>Portfolio</h3>
        </Link>
      </div>
    </div>
  )
}
