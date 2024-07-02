import React from 'react'

const MyProperties = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md rounded p-4">
          <div className="flex items-center mb-4">
            {/* <img
              src="property-image.jpg"
              alt="Property Image"
              className="w-1/2 md:w-1/3 xl:w-1/4"
            /> */}
            <div className="ml-4">
              <h2 className="text-lg md:text-xl xl:text-2xl font-bold">
                Property Name
              </h2>
              <p className="text-gray-600">Property Address</p>
            </div>
          </div>
          <div className="mb-4">
              <p className="text-gray-600">Property Description</p>
            </div>
            <div className="flex items-center mb-4">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Edit Property
              </button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                Delete Property
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/3 p-4">
          <div className="bg-white shadow-md rounded p-4">
            <div className="flex items-center mb-4">
            {/* <img
                src="property-image.jpg"
                alt="Property Image"
                className="w-1/2 md:w-1/3 xl:w-1/4"
              /> */}
              <div className="ml-4">
                <h2 className="text-lg md:text-xl xl:text-2xl font-bold">
                  Property Details
                </h2>
                <p className="text-gray-600">Property Type: House</p>
                <p className="text-gray-600">Property Status: For Sale</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Property Features:</p>
              <ul className="list-none mb-4">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProperties
