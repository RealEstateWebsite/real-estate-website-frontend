import React from "react";
import { Heading, Button, Input, Img, Text } from "../../components";
import { default as ModalProvider } from "react-modal";

export default function NewPassword({ isOpen, ...props }) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[480px]">
      <div className="flex flex-col items-center justify-center w-full p-[29px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
        <div className="flex flex-col items-center justify-start w-full mt-2.5 mb-[7px] gap-[31px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                    New Password
                  </Heading>
                  <Button size="sm" shape="square" className="w-[30px]">
                    <Img src="images/img_icon_24px_close.svg" />
                  </Button>
                </div>
                <Text as="p" className="!text-gray-900">
                  Enter your new password
                </Text>
              </div>
              <Input
                shape="round"
                type="password"
                name="newpassword"
                placeholder="Password"
                prefix={<Img src="images/img_icon_20px_lock.svg" alt="icon / 20px / lock " />}
                suffix={<Img src="images/img_icon_20px_eyehide.svg" alt="icon / 20px / eye-hide" />}
                className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
              />
              <Input
                shape="round"
                type="password"
                name="newpassword"
                placeholder="Re-New Password"
                prefix={<Img src="images/img_icon_20px_lock.svg" alt="icon / 20px / lock " />}
                suffix={<Img src="images/img_icon_20px_eyehide.svg" alt="icon / 20px / eye-hide" />}
                className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
              />
            </div>
          </div>
          <Button size="4xl" shape="round" className="w-full sm:px-5 font-bold">
            Update Password
          </Button>
          <div className="h-px w-full bg-blue_gray-100_01" />
          <div className="flex flex-row sm:flex-col justify-center w-full gap-2 sm:gap-2">
            <a href="#" className="mb-px ml-[58px] md:ml-5">
              <Heading size="lg" as="h2" className="!text-gray-600_02 tracking-[-0.40px] text-center">
                Remember the Password?
              </Heading>
            </a>
            <a href="#" className="mr-[58px] md:mr-5">
              <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                Log in
              </Heading>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
