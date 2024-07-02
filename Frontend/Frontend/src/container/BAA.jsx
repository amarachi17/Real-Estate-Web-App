import React from 'react'

const BAA = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 pt-20">
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-center text-red-900">Book an Appointment</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-red-700 font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            placeholder="  Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-red-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            placeholder="  Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-red-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            placeholder="  Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-red-700 font-medium mb-2">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-red-700 font-medium mb-2">Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-red-700 font-medium mb-2">Appointment Time</label>
          <input
            type="time"
            id="time"
            name="time"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <div className="mb-6">
        <label htmlFor="message" className="block text-red-700 font-medium mb-2">Anything to take note of?</label>
          <textarea
            id="message"
            name="message"
            className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
            placeholder="  Leave a message"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <a
            href="./appointmentsuccessful"
            className="block w-full px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-500 focus:outline-none focus:bg-red-600"
          >
            Submit
          </a>
        </div>
      </form>
    </div>
  </div>
);
};

export default BAA;

        



