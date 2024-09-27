import React, { useState } from "react";
import { Heading, Button, Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaTimes, FaEnvelope } from "react-icons/fa";
import { POST_URL, validateEmail } from "utilities/common";

export default function ResetPassword({ isOpen, ...props }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    if(validateEmail(email)) {
      e.preventDefault()
      try {
        const response = await POST_URL("https://estateapi-2t2c.onrender.com/user/me/forgot-password", {
          email
        })
        const data = await response.json()
        console.log(response, data)
        setEmail("")
        if(response.ok) {
          alert(data.message)
          navigate("/enter-otp")
        } else {
          alert(data.error)
        }
      } catch (error) {
        console.error("Fetch error: ", error)
        alert(error.message)
      }
    }
  }
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <form className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full gap-[31px] my-[9px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[22px]">
              <div className="flex flex-col items-center justify-start w-full gap-2">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                    Reset Password
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px] mt-1 hover:bg-white-A700 hover:text-black hover:border-black hover: border-[0.25px] duration-700 transition-all" onClick={() => navigate("/login")}>
                      <FaTimes />
                    </Button>
                </div>
                <Text as="p" className="!text-gray-900">
                  Enter the email address associated with your account and we'll send you a link to reset your
                  password.
                </Text>
              </div>
              <Input
                shape="round"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)
                }
                placeholder="Email Address"
                prefix={<FaEnvelope size={32} />}
                className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[18px]">
            <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold" disabled={email === ""} onClick={handleSubmit}>
              Get OTP
            </Button>
            <Button
              color="white_A700"
              size="2xl"
              shape="round"
              className="w-full sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
              onClick={() => navigate('/login')}
            >
              Return to sign in
            </Button>
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
            <p href="#" className="ml-[25px] sm:ml-5">
              <Heading size="lg" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
                Don&apos;t have an account?
              </Heading>
            </p>
            <Link to="/create-account" className="mr-[25px] sm:mr-5">
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                Create Account
              </Heading>
            </Link>
          </div>
        </div>
      </form>
    </ModalProvider>
  );
}
