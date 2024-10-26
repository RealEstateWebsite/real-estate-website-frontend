import React, { useState } from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { PiEye, PiEyeClosed, PiKeyhole } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { POST_URL, validateEmail } from "utilities/common";

export default function LogIn({ isOpen, setIsOpen, ...props }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false); // for the toggle switch || remember me
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // const isValidated = !!(validateEmail(email) && password);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await POST_URL("user/login", {
        username,
        password,
      });
      const data = await response.json();
      console.log(response, data);
      setUsername("");
      setPassword("");

      if (response.ok) {
        setSuccess("Login Successful", data.message);
        // const url = "/";
        // console.log(url);
        let rememberMe = document.getElementById("remember").isChecked
        if (rememberMe) {
          console.log(rememberMe)
        }
        navigate("/");
      } else {
        setError("Login failed...", data.error);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setError(`Login failed:  ${error.message.split(" ")[0]}`);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await POST_URL("/auth/login");
      const data = await response.json();
      console.log(response, data);

      if (response.ok) {
        setSuccess("Login Successful", data.message);
        const url = "/";
        // console.log(url);
        navigate("/");
      } else {
        setError("Login failed...", data.error);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setError("Login failed", error.message);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setError("");
        setSuccess("");
      }, 5000);
    }
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[480px]"
    >
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px] font-candara">
          <div className="flex flex-col items-center justify-start w-full gap-[29px] my-[9px]">
            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
              <div className="flex flex-row justify-center w-full pt-[5px]">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <div className="flex flex-row justify-between items-center w-full pb-6 border-b-[0.5px]">
                    <Heading
                      as="h2"
                      className="tracking-[-0.72px] text-[32px] font-[750]"
                    >
                      Log In
                    </Heading>
                    <Button
                      size="sm"
                      shape="square"
                      className="w-[30px] mt-1 hover:bg-white-A700 hover:text-black hover:border-black hover: border-[0.25px] duration-700 transition-all"
                      onClick={() => navigate("/")}
                    >
                      <FaTimes />
                    </Button>
                  </div>
                  <Input
                    shape="round"
                    type="text"
                    name="username"
                    placeholder="Username"
                    prefix={<AiOutlineUser size={28} />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    shape="round"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    prefix={<PiKeyhole size={32} />}
                    suffix={
                      <button onClick={() => togglePasswordVisibility()}>
                        {showPassword ? (
                          <PiEye size={32} />
                        ) : (
                          <PiEyeClosed size={32} />
                        )}
                      </button>
                    }
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid font-ser"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <CheckBox
                  shape="round"
                  name="remember"
                  label="Remember Me"
                  id="remember"
                  className="mb-0.5 gap-2 text-left font-[550] text-[18px] font-reemkufi"
                  onClick={(e) => {
                    console.log(checked);
                    setChecked(e.target.checked);
                    console.log(checked);
                  }}
                />
                <Link
                  to="/reset-password"
                  className="text-right font-[400] hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            {error && <div className="text-red-600">{error}</div>}
            {success && <div className="text-green-600">{success}</div>}
            <div className="flex flex-col items-center justify-start w-full gap-[18px]">
              <Button
                size="4xl"
                shape="round"
                className="w-full sm:px-5 font-bold"
                disabled={isLoading}
              >
                Log in
              </Button>
              <Button
                color="white_A700"
                size="4xl"
                shape="round"
                leftIcon={
                  <Img src="images/img_icon_20px_google.svg" alt="Google" />
                }
                className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </Button>
            </div>
            <div className="h-px w-full bg-blue_gray-100_01" />
            <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-2 sm:gap-2">
              <Heading
                as="h2"
                className="text-[#1D1D1D] opacity-[95] tracking-[-0.40px] text-center ml-[25px] sm:ml-5"
              >
                Don't have an account?
              </Heading>
              <Link to="/create-account" className="font-candara hover:underline text-[#272727ea]">
                Try Creating One
              </Link>
            </div>
          </div>
        </div>
      </form>
    </ModalProvider>
  );
}
