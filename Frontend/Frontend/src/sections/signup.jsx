import React, { useState } from "react";
// import homeLogo from "../images/svg/house-svgrepo-com.svg";

const Signup = () => {
  const [selected, setSelected] = useState("Buyer");
  return (
    <div className="pt-20">
      <div class="p-5 flex items-center justify-center">
        <div class="inline-flex overflow-hidden border border-gray-400 rounded-lg w-96">
          <label for="Seller" class="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Seller"
              class="sr-only peer"
              checked={selected === "Seller"}
              onChange={() => setSelected("Seller")}
            />
            <span class="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-gray-200">
              <span class="flex items-center justify-center h-full relative">
                <span className="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-gray-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Seller
              </span>
            </span>
          </label>
          <label for="Buyer" class="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Buyer"
              class="sr-only peer"
              checked={selected === "Buyer"}
              onChange={() => setSelected("Buyer")}
            />
            <span class="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-gray-200">
              <span class="flex items-center justify-center h-full relative">
                <span className="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-gray-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Buyer
              </span>
            </span>
          </label>
          <label for="Agent" class="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Agent"
              class="sr-only peer"
              checked={selected === "Agent"}
              onChange={() => setSelected("Agent")}
            />
            <span class="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-gray-200">
              <span class="flex items-center justify-center h-full relative">
                <span class="absolute w-2 h-2 bg-gray-500 rounded-full left-3 top-1/2 transform -translate-y-1/2 peer-checked:inline-block hidden"></span>
                Agent
              </span>
            </span>
          </label>
        </div>
      </div>

      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src='' alt="Your Company" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up as a <span className="text-3xl text-gray-600 underline">{selected}</span> 
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" action="#" method="POST">
          <div>
              <label
                for="name"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div class="mt-2">
                <input
                  id="text"
                  name="text"
                  type="text"
                  autocomplete="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Have an Account??
            <a
              href="./loginScreen"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {" "}
              Sign in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
