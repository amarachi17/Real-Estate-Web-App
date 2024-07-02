import React from 'react'
import { property } from '../components/export';
import { useDarkMode } from '../components/DarkModeContext';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleClick=()=>{
    <Link to={"/"}/>
  }
  return (
    <div className={`${darkMode ?'dark bg-black' :'bg-white'}`}>
    <div className=" mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <Link to="/">
          <button className="flex items-center font-sans text-3xl font-bold">
            <FaArrowLeft size={24}/>
          </button>
        </Link>
      <h1 className="text-3xl font-bold text-center mb-4">Wishlist</h1>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {property.map((property,index) => (
          <li key={index} className="bg-white shadow-md rounded p-4">
            <img
              src={property.images}
              alt={property.name}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{property.address}</h2>
            <p className="text-gray-600">{property.price}</p>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            >
              Remove from Wishlist
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
 );
}

export default Wishlist;
  


