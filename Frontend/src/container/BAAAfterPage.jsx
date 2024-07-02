import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const BAAAfterPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <FaRegCheckCircle size={48} className="text-green-500" />
        </div>
        <h3 className="font-semibold mb-6 text-center">A message will be sent to your email shortly to confirm your booking!</h3>
        <div className="text-center">
          <a
            href="/"
            className="w-full px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500 focus:outline-none focus:bg-red-600"
          >
            Homey
          </a>
        </div>
      </div>
    </div>
     );
    }
    
    export default BAAAfterPage;
