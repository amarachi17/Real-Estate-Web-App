import React, { useState} from 'react'
import { FaBars, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { TbHomeCheck } from 'react-icons/tb';
import { IoPersonCircleOutline } from 'react-icons/io5';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='sticky top-0 z-50'>
        <div className='lg:block hidden bg-[#0ca39a] text-white py-2'>
            <div className='container mx-auto lg:flex hidden item-center justify-between px-3'>
                <span className='flex items-center gap-x-1'>
                    <GoLocation />
                    <p className='text-sm'>Surulere, Lagos, Nigeria</p>
                </span>
                <div className='flex items-center gap-x-4'>
                    <span className='flex items-center gap-x-1'>
                        <FaPhone />
                        <p>+234 8999 5436</p>
                    </span>
                    <span className='flex items-center gap-x-1'>
                        <FaRegEnvelope />
                        <p>homey@gmail.com</p>
                    </span>
                </div>
            </div>
        </div>    

        <div className='bg-white'>
            <div className=' container mx-auto flex flex-wrap items-center justify-between px-3'>
                <div>
                    <ul className='lg:flex hidden items-center gap-x-4 list-none lg:ml-auto lg:transform-none lg:translate-y-0 gap-y-8'>
                        <li>
                            <button>Home</button>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                        <li>
                            <a href='#'>Blogs</a>
                        </li>
                        <li>
                            <a href='#'>Listings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        
        <div 
        // className={
        //     "lg: flex lg:item-center items-baseline lg-pt-0 pt-20 lh:h-auto h-screen"
        //     (navbarOpen ? " flex " : "hidden")
        // }
        >
            <ul className=' flex flex-col lg:flex-row items-center gap-x-4 list-none'>
                <div className='lg:hidden flex flex-col gap-y-8 items-center'>
                    <li className='py-2 flex font-medium items-center loading-snug'>
                            <button className='bg-[#0ca39a] rounded-full x-4 py-1 hoverBtn'>Home</button>
                        </li>
                        <li className='py-2 flex font-medium items-center loading-snug'>
                            <a href='#' to='/'>About</a>
                        </li>
                        <li className='py-2 flex font-medium items-center loading-snug'>
                            <a href='#' to='/'>Services</a>
                        </li>
                        <li className='py-2 flex font-medium items-center loading-snug'>
                            <a href='#' to='/'>Blogs</a>
                        </li>
                        <li className='py-2 flex font-medium items-center loading-snug'>
                            <a href='#' to='/'>Listings</a>
                        </li>
                </div>

                <li className='py-2 flex font-medium items-center loading-snug'>
                    <button>
                        <IoPersonCircleOutline />
                    </button>    
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar