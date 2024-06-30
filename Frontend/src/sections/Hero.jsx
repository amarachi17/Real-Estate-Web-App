import React, { useEffect } from 'react'
import { useDarkMode} from '../components/DarkModeContext'
import heroimg from '../assets/images/images/hero1.webp'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  },[])

  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
    <div className={`${darkMode ?'dark bg-black' :'bg-white'}`}>
      <section id='hero' className='w-[95%] h-[600px] m-auto bg-cover bg-center 
      rounded-xl flex justify-center flex-col items lg:px-28 px-10 gap-7 x-20' 
      style={{backgroundImage: `url(${heroimg})`}}>
        <h1 data-aos="zoom-in" className='text-6xl text-white font-sem lg:pr-[500px] pr-0 lg:leadin-[70px] leading-[60px]'>
          Find Your Home in Nigeria
        </h1>
        <p data-aos="zoom-in" className='text-white  text-xl lg:pr-[500px] pr-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet 
          eveniet eius voluptas ratione repellendus, 
          dolor quis, aliquam optio illo ipsum qui aut.
           Quasi saepe sint ullam at cum natus!
        </p>
      </section>
    </div>

    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>
      <div data-aos='zoom-in' id='form' className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-cols-4 grid-cols-1
      justify-center items-center gap-6 p-8 rounded-xl -mt-14`}>
        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'> Location</h1>
          <input type="text" placeholder='Enter an address, state, city or pincode' 
          className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />
        </div>

        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'>Type</h1>
          <select name='selectOption' id='selectOption' className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value='' disabled selected>Select Properties</option>
            <option value='Option1'>Rentals</option>
            <option value='Option2'>Sales</option>
            <option value='Option3'>Commercial</option>
          </select>
        </div>

        <div className='w-full'>
          <h1 className='text-black font-semibold dark:text-white'>Category</h1>
          <select name='selectOption' id='selectOption' className='bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md'>
            <option value='' disabled selected>Property Category</option>
            <option value='Option1'>Flats & Apartments</option>
            <option value='Option2'>Duplex</option>
            <option value='Option3'>Villa</option>
            <option value='Option4'>Shop</option>
            <option value='Option5'>Office Spaces</option>
          </select>
        </div>

        <div className='w-full'>
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
          dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-x1
          cursor-pointer transform hover:scale-110 transition-transform duration-300'>SEARCH</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero