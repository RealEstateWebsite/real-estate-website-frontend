import React from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export default function CreateAccount({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-row justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[7px] gap-[29px]">
          <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                  Create Account
                </Heading>
                <Button size="sm" shape="square" className="w-[30px] hover:bg-white-A700 hover:text-black hover:border-black hover: border-[0.25px] duration-700 transition-all">
                  <FaTimes className="rounded-sm "/>
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-center w-full gap-5">
                <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-5">
                  <Input
                    shape="round"
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    prefix={<Img src="images/img_icon_24px_user.svg" alt="First Name" />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                  />
                  <Input
                    shape="round"
                    type="text"
                    name="Last Name"
                    placeholder="Last Name"
                    prefix={<Img src="images/img_icon_24px_user.svg" alt="Last Name" />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                  />
                  <Input 
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="email address"
                    prefix={<Img src="images/img_icon_24px_email.svg" alt="icon / 24px / email" />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                  />
                  <Input
                    shape="round"
                    type="password"
                    name="password"
                    placeholder="Password"
                    prefix={<Img src="images/img_icon_20px_lock.svg" alt="icon / 20px / lock " />}
                    suffix={<Img src="images/img_icon_20px_eyehide.svg" alt="icon / 20px / eye-hide" />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid "
                  />
                </div>
              </div>
            </div>
            <CheckBox
              shape="round"
              name="check_list"
              label="I agree to all Terms & Conditions"
              id="checklist"
              className="gap-2 !text-gray-600_02 text-left font-bold my-2 mx-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[60%] gap-[18px]">
            <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
              Create Account
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              shape="round"
              leftIcon={<Img src="images/img_icon_20px_google.svg" alt="icon / 20px / google" />}
              className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
            >
              Create Account with Google
            </Button>
          </div>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row md:flex-col justify-center w-full gap-2">
            <a href="#" className="mb-px ml-[196px] md:ml-5">
              <Heading size="lg" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
                Have an account?
              </Heading>
            </a>
            <a href="#" className="mr-[196px] md:mr-5">
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                <Link to='/login'>
                  Log in
                </Link>
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
