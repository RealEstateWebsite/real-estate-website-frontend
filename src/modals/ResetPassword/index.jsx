import React, { useState } from "react";
import {  Button, Input,Text } from "../../components";
import { default as ModalProvider } from "react-modal";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FaTimes, FaEnvelope } from "react-icons/fa";
import { POST_URL, validateEmail } from "utilities/common";

export default function ResetPassword({ isOpen, ...props }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (validateEmail(email)) {
      e.preventDefault();
      try {
        const response = await POST_URL(
          "https://estateapi-2t2c.onrender.com/user/me/forgot-password",
          {
            email,
          }
        );
        const data = await response.json();
        console.log(response, data);
        setEmail("");
        if (response.ok) {
          alert(data.message);
          navigate("/enter-otp");
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Fetch error: ", error);
        alert(error.message);
      }
    }
  };
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[480px] bg-[#ffffffc9] focus:outline-0 border border-[#363020] rounded-xl max-w-[900px] min-h-[40vh]"
      overlayClassName="bg-[#d4dae4] h-[100vh]"
    >
      <form className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full gap-[31px] my-[9px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[22px]">
              <div className="flex flex-col items-center justify-start w-full gap-2">
                <div className="flex flex-row justify-between items-center w-full pb-4 border-b-[2px] border-[#363020]">
                  <h4 className="font-reemkufi">Reset Password</h4>
                  <Button
                    size="sm"
                    shape="square"
                    className="w-[30px] mt-1 bg-[#605c4e]  hover:text-[#bbc9aa] hover:bg-[#363020] text-[#1d1d1d] duration-100 transition-all focus-visible:border-[#605ce4]"
                    onClick={() => navigate("/login")}
                  >
                    <FaTimes />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex flex-row">
            <div className=" border-r border-solid border-[#363021] mr-4 max-w-[50%]">
              <Text as="p" className="!text-gray-900">
                Enter the email address associated with your account and we'll
                send you a link to reset your password.
              </Text>
            </div>
            <div className="flex flex-col w-[50%] gap-10">
              <Input
                shape="round"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                prefix={<FaEnvelope size={32} />}
                className="w-full gap-3.5 font-semibold border-[#363020] focus:border-[#605c4e] border border-solid"
              />
              <div className="flex flex-col items-end justify-end w-full gap-[18px]">
                <Button
                  size="4xl"
                  shape="round"
                  className=" sm:px-5 font-bold bg-[#605c4e] text-[#f2f2f2] font-[15px] font-candara"
                  disabled={email === ""}
                  onClick={handleSubmit}
                >
                  Send OTP
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </ModalProvider>
  );
}
