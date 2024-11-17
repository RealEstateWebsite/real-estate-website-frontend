import React, { useState } from "react";
import { Heading, Button, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes, FaGoogle } from "react-icons/fa";
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
      className="min-w-[480px] focus-visible:outline-0 h-full "
      overlayClassName="bg-[#d4dae4] py-6 focus-within:border-0 h-full"
    >
      <form onSubmit={handleSubmit} className="w-full h-full">
        <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px] font-candara focus-visible:outline h-full" id="loginPage">
          <div className="flex flex-col items-center justify-start w-full gap-[29px] my-[9px]">
            <div className="flex flex-col items-center justify-start w-full gap-[13px]">
              <div className="flex flex-row justify-center w-full pt-[5px]">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <div className="flex flex-row justify-between items-center w-full pb-6 border-[#363020] border-b-[1.5px]">
                    <Heading
                      as="h4"
                      className="tracking-[-0.72px]  font-[750] text-[#020202]"
                    >
                      Log In
                    </Heading>
                    <Button
                      size="sm"
                      shape="square"
                      className="w-[30px] mt-1 bg-[#605c4e]  text-[#bbc9aa] hover:bg-[#363020]  duration-100 transition-all focus-visible:border-[#605ce4]"
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
                    prefix={<AiOutlineUser size={28}  color={"363020"} />}
                    className="w-full gap-3.5 font-semibold border-[#363020] border-[2.5px] border-solid my-6 bg-transparent "
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    shape="round"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    prefix={<PiKeyhole size={34}   color={"363020"}/>}
                    suffix={
                      <button onClick={togglePasswordVisibility} type="button">
                        {showPassword ? (
                          <PiEye size={32}  color={"363020"} />
                        ) : (
                          <PiEyeClosed size={32}  color={"363020"} />
                        )}
                      </button>
                    }
                    className="w-full gap-3.5 font-semibold border-[#363020] focus:border-[#605c4e] border-[2.5px] border-solid bg-transparent mb-2 text-[#d4dae4]"
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
                  className="mb-0.5 gap-2 text-left font-[550] text-[18px] font-reemkufi  checked:text-[#602302]"
                  onClick={(e) => {
                    setChecked(e.target.checked);
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
            { error && <div className="text-red-600 font-[400] text-[16px]">{error}</div> || <div className="py-[0.6rem]"></div>}
            {success && <div className="text-green-600">{success}</div>}
            <div className="flex flex-row items-center justify-start w-full gap-[18px]">
              <Button
                size="4xl"
                shape="round"
                className="sm:px-5 font-bold w-[80%] bg-[#605c4e]"
                disabled={isLoading}
              >
                Log in
              </Button>
              <Button
                color="white_A700"
                size="4xl"
                shape="round"
                className=" gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid w-[20%] bg-[#bbc9aa]"
                onClick={handleGoogleSignIn}
              >
                {/* <Img src="images/img_icon_20px_google.svg" alt="Google" className="w-[150px]" />
                 */}
                 <FaGoogle size="25px" color={"363020"} />
              </Button>
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-2 sm:gap-2 border-[#363020] border-t-[1.5px] pt-4">
              <Heading
                as="p"
                className="text-[#1D1D1D] opacity-[95] tracking-[-0.40px] text-center ml-[25px] sm:ml-5"
              >
                Don't have an account?
              </Heading>
              <Link to="/create-account" className="font-candara underline text-[#272727ea]">
                Try Creating One
              </Link>
            </div>
          </div>
        </div>
      </form>
    </ModalProvider>
  );
}
