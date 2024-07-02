import React, { useState } from "react";
import homeLogo from "../assets/house-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [selected, setSelected] = useState("Buyer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (selected === "Seller") {
      navigate("/sellerdashboard");
    } else if (selected === "Buyer") {
      navigate("/buyerdashboard");
    } else if (selected === "Agent") {
      navigate("/agentdashboard");
    }
  };
  return (
    <div className="pt-20">
      <div className="p-5 flex items-center justify-center">
        <div className="inline-flex overflow-hidden border border-red-400 rounded-lg w-96">
          <label htmlFor="Seller" className="cursor-pointer w-1/3 relative">
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
                <span className="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-red-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Seller
              </span>
            </span>
          </label>
          <label htmlFor="Buyer" className="cursor-pointer w-1/3 relative">
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
                <span className="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-red-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Buyer
              </span>
            </span>
          </label>
          <label htmlFor="Agent" className="cursor-pointer w-1/3 relative">
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
                <span className="absolute hidden w-2 h-2 font-bold transform -translate-y-1/2 bg-red-500 rounded-full left-3 top-1/2 peer-checked:inline-block"></span>
                Agent
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={homeLogo} alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-900">
            Sign up as a <span className="text-3xl text-red-600 underline">{selected}</span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-red-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="text"
                  required
                  placeholder="  Enter your name"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="block text-sm font-medium leading-6 text-red-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="number"
                  name="number"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="  Enter your phone number"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 
                  shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="  Enter your email"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-red-900">
                Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="  Enter your password"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-red-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="  Confirm your password"
                  className="block w-full rounded-md border-0 py-1.5 text-red-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-red-400 focus:ring-2 focus:ring-inset focus:ring-red-300 sm:text-sm sm:leading-6"
                />
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Sign up
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-red-500">
            Have an Account??
            <a
              href="./loginScreen"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
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

export default SignUp;





