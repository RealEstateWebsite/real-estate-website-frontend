import React, { useState } from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaEye, FaEyeSlash, FaIdCard, FaKey } from 'react-icons/fa'

// console.log(import.meta.env.VITE_BACKEND);

export default function LogIn({ isOpen, setIsOpen, ...props }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState({username: "", password: ""});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }
  // let details = {username: username, password: password};

  const handleInputChange = (e) => {
    setDetails({...details, [e.target.id]: e.target.value});
  }

  const handleSubmit = () => {
    fetch("https://estate-api-wn9c.onrender.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    }).then(
      (response) => {
        if (response.ok) {
          return response.json();
        } else {
          let result = response.json();
          console.log(result)
        }
      }
    )
  }
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full gap-[29px] my-[9px]">
          <div className="flex flex-col items-center justify-start w-full gap-[13px]">
            <div className="flex flex-row justify-center w-full pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                    Log in
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px] mt-1 hover:bg-white-A700 hover:text-black hover:border-black hover: border-[0.25px] duration-700 transition-all" onClick={() => navigate("/")}>
                    {/* <Img src="images/img_frame_1000001678.svg" /> */}
                    <FaTimes />
                  </Button>
                </div>
                <Input
                  shape="round"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  prefix={<FaIdCard size={25} color={"gray"} />}
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid text-black"
                  onChange={handleInputChange}
                />
                <Input
                  shape="round"
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  id="password"
                  prefix={<Img src="images/img_icon_20px_lock.svg" alt="Lock" />}
                  suffix={
                    <span onClick={handlePasswordVisibility} className="cursor-pointer select-none" >
                      {passwordVisible ? <FaEyeSlash color={"gray"} /> : <FaEye color={"gray"} />}
                    </span>
                  }
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid focus:outline-none text-black"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <CheckBox
                shape="round"
                name="remember"
                label="Remember Me"
                id="remember"
                className="mb-0.5 gap-2 text-left font-bold"
              />
              <a href="#">
                <Heading size="md" as="h2" className="text-right !font-bold">
                  <Link to="/reset-password">
                    Forgot Password?
                  </Link>
                </Heading>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold" onClick={handleSubmit}>
              Log in
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              shape="round"
              leftIcon={<Img src="images/img_icon_20px_google.svg" alt="icon / 20px / google" />}
              className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
            >
              Log in with Google
            </Button>
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
            <a href="#" className="ml-[25px] sm:ml-5">
              <Heading size="lg" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
                Don't have an account?
              </Heading>
            </a>
            <a href="#" className="mr-[25px] sm:mr-5">
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                <Link to='/create-account'>
                  Create Account
                </Link>
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
