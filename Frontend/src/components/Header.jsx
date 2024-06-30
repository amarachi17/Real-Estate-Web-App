import React, { useState } from 'react'
// import { Link } from 'react-scroll'
// import { FaXmark, FaBars } from 'react-icons/fa6';
// import logo from '../assets/images/images/logo.png'
 import { useDarkMode } from './DarkModeContext';
import { navItem } from './export';
import { FaMoon, FaSun } from 'react-icons/fa';
// import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {

   const { darkMode, toggleDarkMode } = useDarkMode();

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // }
  // const closedMenu = () => {
  //   setIsMenuOpen(false);
  // }

  

  return (
    <header className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
      <div className="flex justify-between item-cnter max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-black dark:text-white sm:text-xl p-5">
          Homey
        </h1>
        
          <ul className="flex justify-center items-center space-x-4 text-sm sm:text-lg">
          {
            navItem.map((nav,index)=>(
             <li className=" self-center"><a href={nav.path} key={index} className="text-black dark:text-white">{nav.link}</a></li>
            ))
          }
          </ul>
          
        <button onClick={toggleDarkMode} className='flex absolute  items-center p-2 rounded-full bg-orange-500    right-7'>
        {darkMode ? <FaMoon size={20} className='text-black'/>: <FaSun size={20} className='text-black' />}
      </button>
      </div>
    </header>
  )
}

export default Header