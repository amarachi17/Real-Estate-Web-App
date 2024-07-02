import React from"react";
import homeLogo from "../assets/house-svgrepo-com.svg"
import { Link, Route } from "react-router-dom";
import SignUp from "./SignUp";

const Login = () => {
//   const [selected, setSelected] = useState("Buyer");
  return (
    <div className="pt-20">
      <div className="p-5 flex items-center justify-center">
        {/* <div className="inline-flex overflow-hidden border border-red-400 rounded-lg w-96">
          <label for="Seller" className="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Seller"
              className="sr-only peer"
              checked={selected === "Seller"}
              onChange={() => setSelected("Seller")}
            />
            <span className="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-red-200">
                    <span className="flex items-center justify-center h-full relative">
                <span classNameName="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-red-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Seller
              </span>
            </span>
          </label>
          <label for="Buyer" className="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Buyer"
              className="sr-only peer"
              checked={selected === "Buyer"}
              onChange={() => setSelected("Buyer")}
            />
             <span className="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-red-200">
              <span className="flex items-center justify-center h-full relative">
                <span classNameName="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-red-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Buyer
              </span>
            </span>
          </label>
          <label for="Agent" className="cursor-pointer w-1/2 relative">
            <input
              type="radio"
              name="Usertype"
              id="Agent"
              className="sr-only peer"
              checked={selected === "Agent"}
              onChange={() => setSelected("Agent")}
            />
            <span className="block w-full h-full py-2 pr-3 text-center text-sm pl-7 peer-checked:bg-red-200">
              <span className="flex items-center justify-center h-full relative">
                <span className="absolute w-2 h-2 bg-red-500 rounded-full left-3 top-1/2 transform -translate-y-1/2 peer-checked:inline-block hidden"></span>
                Agent
              </span>
               </span>
          </label>
        </div> */}
      </div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src={homeLogo} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-900">
       Login to your account
    </h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label
          for="email"
          className="block text-sm font-medium leading-6 text-red-900"
        >
          Email address
        </label>
        <div className="mt-2">
        <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  placeholder="  Enter your email"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  placeholder="  Enter your password"
                  class="block text-sm font-medium leading-6 text-red-900"
                >
                  Password
                </label>
                <div class="text-sm">
                  <a
                    href="./Forgotpassword"
                    placeholder="  Enter your password"
                    class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div class="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-red-500">
            Not a member?
            <Link to="/signup"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



          