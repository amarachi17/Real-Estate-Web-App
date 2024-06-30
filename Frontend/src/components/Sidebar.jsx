import { useState } from "react";
import client1 from "../assets/images/images/client1.png";
import { DarkModeProvider, useDarkMode } from "./DarkModeContext";
import { dashItem } from "./export";

const Sidebar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closedMenu = () => {
    setIsMenuOpen(false);
  }

    return (
        
            <div className={`${darkMode ? 'dark bg-black' : 'light bg-slate-300 fixed  p-4 top-0 left-0 h-screen w-64 shadow-md' } `}>
          <div className="flex  items-center justify-center">
            <img src={client1} width={100} />
          </div>
          <ul className="list-none my-7">
           {
            dashItem.map((item,index)=>(
                <li className="py-2 hover:border-b hover:shadow-sm my-10  cursor-pointer">
            <div className="flex items-center justify-between ">
            <a href={item.path} key={index} className="text-red-500 dark:bg-white">
                {item.link}
              </a>
              
                <item.icon className= "size-4 text-red-500 dark:bg-white"  />

            </div>
            </li>     
            ))
           }
          </ul>
          {/* <div className="bg-white p-4 rounded shadow-md">
          <h3 className="text-lg font-bold mb-2">My Agent</h3>
          <p className="text-gray-600">John Doe</p>
          <p className="text-gray-600">johndoe@example.com</p>
        </div> */}
      </div>
  );
};

export default Sidebar;