import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center z-30 ">
      <div onClick={() => setOpen(!open)} className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="flex items-center p-2 md:p-3 dark:bg-amber-600/10 bg-amber-200/70 rounded-full dark:hover:bg-amber-600/20 hover:bg-amber-200/90 transition-colors"
        >
          <span className="mr-2 text-sm md:text-base text-amber-600 dark:text-amber-500">
            Menu
          </span>
          <AiOutlineCaretDown
            className={`w-4 h-4 duration-200  text-amber-600 dark:text-amber-500 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </motion.button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg z-40 shadow-lg bg-gray-50 dark:bg-neutral-900 backdrop-blur-xl duration-700 ease-in-out ${
            open ? "block" : "hidden"
          }`}
        >
          {/* <li className="">
            <a
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-amber-500 dark:hover:bg-amber-500 rounded-md transition-colors duration-200"
              href="https://viktormartin-blog.vercel.app/"
            >
              01 Blogs
            </a>
          </li> */}
          <li className="">
            <Link
              to="about"
              smooth={true}
              offset={-30}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-amber-500 dark:hover:bg-amber-500 rounded-md transition-colors duration-200"
            >
              Overview
            </Link>
          </li>
          <li className="">
            <Link
              to="projects"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-amber-500 dark:hover:bg-amber-500 rounded-md transition-colors duration-200"
            >
              Projects
            </Link>
          </li>
          <li className="">
            <Link
              to="skills"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-amber-500 dark:hover:bg-amber-500 rounded-md transition-colors duration-200"
            >
              Expertise
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-40}
              duration={800}
              onClick={() => setOpen(!open)}
              className="cursor-pointer flex w-full items-center px-3 py-2 text-sm hover:bg-amber-500 dark:hover:bg-amber-500 rounded-md transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
