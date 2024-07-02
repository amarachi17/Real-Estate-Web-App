import React from 'react'
import { FaEdit, FaUser } from 'react-icons/fa'
import { profItem } from '../components/export'
import { useDarkMode} from '../components/DarkModeContext'

const Profile = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
  <div className={`${darkMode ?'dark bg-black' :'bg-white'}`}>
  <div className='flex items-center justify-center gap-4 flex-col'>
   <FaUser size={60} className='rounded-full bg-red-500 w  my-8' />
   <h1 className='text-2xl font-bold'> Hi, User</h1>
   
  {
    profItem.map((text,index)=>(
      <div key={index} className='flex flex-row items-center gap-3'>
      <input  type={text.type}  className=' w-96 p-2 border-b' placeholder={text.edit}/>
      <FaEdit className=' rounded-full shadow-md shadow-red-500'/>
      </div>
    ))
  }
          <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white
          dark:hover:text-black text-lg px-10 py-4  text-white font-semibold w-auto  rounded-lg
          cursor-pointer transform hover:scale-110 transition-transform duration-300'>SAVE</button>

   </div>
   </div>
  )
}

export default Profile
