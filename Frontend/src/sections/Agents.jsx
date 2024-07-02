import React, { useEffect } from 'react'
import { agent } from '../components/export'
import { useDarkMode} from '../components/DarkModeContext'
import 'aos/dist/aos.css'
import AOS from 'aos'


const Agents = () => {
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
    <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section id='agent' className='lg:w-[95%] w-full h-fit m-auto bg-coverbg-center rounded-xl flex justify-center flex-col items-start lg:px-20 px-6 py-20 gao-20'>
            <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos='zoom-in' className='text-red-500 dark:bg-white'>OUR AGENTS</h1>
            <h1 data-aos='zoom-in' className='text-black dark:bg-white text-[40px] font-semibold leading-10'>Meet our agents</h1>
            </div>

            <div id='agents-box' className='grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8 w-full'>
                {
                    agent.map((item, index) => (
                        <div data-aos='zoom-in' data-aos-delay='200' key={index}
                        className='bg-white dark:bg-gray-900 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center items-center gap-6 rounded-xl w-full'>
                            <div className='flex justify-start items-center w-full gap-4'>
                                <img src={item.image} alt='' className='w-[70px] transform hover:scale-110 transition-transform duration-300' />
                                <div className='flex flex-col justify-center items-start gap-1'>
                                    <h1 className='text-xl text-black font-semibold dark:text-white'>{item.name}</h1>
                                    <h2 className='text-slate-600 dark:text-white'>{item.text}</h2>
                                </div>    
                            </div>

                            <p className='text-md text-justify text-slate-600 dark:text-white'>{item.feedback}</p>

                        </div>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default Agents