import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { TbHomeFilled } from "react-icons/tb";
import { MdContacts } from "react-icons/md";
import { BsInfoCircleFill } from "react-icons/bs";
import { useThemeStore } from "../../stores/useThemeStore";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  console.log("Tema corrente:", theme);

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-lightBackground dark:bg-darkBackground
          
           z-50 transform transition-transform duration-300 ease-in-out ${
             isMenuOpen ? "translate-x-0" : "-translate-x-full"
           } lg:hidden`}
      >
        <ul className="flex flex-col items-start justify-center h-full gap-6 px-6 text-darkText dark:text-lightText">
          {/* Links */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 text-xl hover:bg-lightPurple active:bg-darkPurple rounded-lg px-4 py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <TbHomeFilled />
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="flex items-center gap-2 text-xl hover:bg-lightPurple active:bg-darkPurple rounded-lg px-4 py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <MdContacts />
              CONTACTS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center gap-2 text-xl hover:bg-lightPurple active:bg-darkPurple rounded-lg px-4 py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <BsInfoCircleFill />
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="flex items-center gap-2 text-xl hover:bg-lightPurple  rounded-lg px-4 py-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoSearchSharp />
              SEARCH
            </Link>
          </li>
        </ul>
      </aside>

      {/* Navbar */}
      <nav className=" bg-lightBackground dark:bg-darkBackground text-darkText flex sticky top-0 justify-between items-center px-6 py-4 z-50 shadow-md">
        <div className="flex flex-row gap-4 items-center">
          {/* Menu toggle button (mobile only) */}
          <button
            className="lg:hidden text-3xl dark:text-lightText"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>

          {/* Logo */}
          <img
            className="w-12 h-12 rounded-2xl"
            src="logo.jpg"
            alt="logo"
            loading="lazy"
          />
        </div>

        {/* Search Bar (centered) */}
        <div className="hidden sm:flex items-center justify-center w-full max-w-sm mx-auto bg-lightPurple border-2 border-gray-300 rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all ease-in-out duration-300 absolute left-1/2 transform -translate-x-1/2">
          <input
            className="flex-1 bg-lightPurple border-none outline-none text-base px-2 text-darkText placeholder:text-darkText"
            type="text"
            placeholder="Search"
          />
          <IoSearchSharp fontSize="1.3rem" />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <div className="hidden lg:flex gap-4">
            <Link
              to="/"
              className="text-base font-bold text-darkText dark:text-lightText hover:text-lightPurple no-underline"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-base font-bold text-darkText dark:text-lightText hover:text-lightPurple no-underline"
            >
              ABOUT
            </Link>
            <Link
              to="/contact"
              className="text-base font-bold text-darkText dark:text-lightText hover:text-lightPurple no-underline"
            >
              CONTACT
            </Link>
          </div>

          {/* Mobile search icon */}
          <IoSearchSharp
            className="sm:hidden text-darkText dark:text-lightText"
            fontSize="1.5rem"
          />

          {/* Theme toggle */}
          <label className="swap swap-rotate dark:text-lightText">
            <input
              type="checkbox"
              className="theme-controller"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
