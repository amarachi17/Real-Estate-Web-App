import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDarkMode} from '../components/DarkModeContext'
import {dashItem} from "./export.js"
import { FaUser } from "react-icons/fa";

const Sidebar = () => {
  const [showside, setShowside] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`${darkMode ?'dark  bg-black' :'bg-white'}`}>
        <div className="lg:hidden">
          {/* Mobile menu button */}
          <button
            className="flex items-center px-3 py-2 border rounded dark:hover:text-white dark:hover:border-white hover:border-black"
            onClick={() => setShowside(!showside)}
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
          
          {showside && (
            <div className="lg:w-1/3 xl:w-1/4 p-4 bg-gray-100 h-screen fixed top-0 left-0 lg:relative lg:top-auto lg:left-auto transition duration-300 ease-in-out">
              <ul className="flex flex-col gap-4 my-8 text-xl font-bold ">
              {
                dashItem.map((element,index)=>(
            <li key={index}>
                  <Link
                    to={element.path} 
                    className="block py-2 px-4 text-sm hover:bg-gray-700 rounded"
                  >
                    {element.link}
                  </Link>
                </li>
          ))
              }
              </ul>
            </div>
          )}
        </div>
        
        <ul className="hidden lg:flex flex-col justify-end items-start  gap-2 my-8 text-xl font-bold">
         {
          dashItem.map((element,index)=>(
            <li key={index}>
                  <Link
                    to={element.path}
                    className="block py-2 px-4 text-sm hover:bg-red-500 rounded"
                  >
                    {element.link}
                  </Link>
                </li>
          ))
         }
          
        </ul>
       
      </div>
    
)};
export default Sidebar;