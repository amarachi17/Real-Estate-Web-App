import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useDarkMode} from '../components/DarkModeContext'
import { FaMoon, FaSun } from "react-icons/fa";
import { navItem } from "./export";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ?'dark ' :'bg-white'}`}>
<nav className="fixed top-0 left-0 dark:bg-black right-0 p-4 dark:text-white bg-white z-50">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/">
          <div className="flex items-center font-sans text-3xl font-bold">
            <h1>HomeBuy</h1>
          </div>
        </Link>
        <div className="lg:hidden">
          {/* Mobile menu button */}
          <button
            className="flex items-center px-3 py-2 border rounded dark:hover:text-white dark:hover:border-white hover:border-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 100 2h12a1 1 0 100-2H3a1 1 0 000 0zM4 15a1 1 0 100 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-black dark:text-white mt-1 p-2">
              <ul className="flex flex-col space-y-2">
              {
  navItem.map((nav,index)=>(
    <li key={index}>
            <Link to={nav.path} className="block py-2 uppercase px-4 text-sm hover:bg-gray-700 rounded">{nav.link}</Link>
          </li>
  ))
}
              </ul>
            </div>
          )}
        </div>
        
        <ul className="hidden lg:flex space-x-4">
{
  navItem.map((nav,index)=>(
    <li key={index}>
            <Link to={nav.path} className="hover:text-black uppercase">{nav.link}</Link>
          </li>
  ))
}
        </ul>
        <button onClick={toggleDarkMode} className='flex  w-11 h-11 p-3 mr-15 rounded-full bg-orange-500 right-full  sm:left-8'>
        {darkMode ? <FaMoon size={20} className='text-black'/>: <FaSun size={20} className='text-black' />}
      </button>
      </div>
    </nav>
  </div>
)};
export default Header;