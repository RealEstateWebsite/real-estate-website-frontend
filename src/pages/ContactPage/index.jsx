import React from "react";
import { Img, Heading, Button, TextArea, Input, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import { FaRegUser,FaPhoneAlt, FaReddit, FaFacebook, FaTwitter, FaRss, FaLinkedin } from "react-icons/fa";
import { PiEnvelope } from "react-icons/pi";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-center w-full pt-[10vh]">
            <div className="flex flex-col items-center justify-start w-full gap-11 md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading
                  as="h2"
                  className="tracking-[- 1.08px] text-center"
                >
                  Get in touch
                </Heading>
                <p className="text-center text-[18px]">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </p>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] p-[23px] md:gap-5 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full ml-[25px] gap-10 sm:ml-5">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="3xl" as="h4" className="tracking-[-0.56px]">
                      Send a message
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        shape="round"
                        type="text"
                        name="message"
                        placeholder="Full Name"
                        prefix={
                          <FaRegUser />
                        }
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        prefix={
                          <PiEnvelope />
                        }
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        shape="round"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        prefix={
                          // <Img
                          //   src="images/img_icon_20px_call.svg"
                          //   alt="icon / 24px / call"
                          // />
                          <FaPhoneAlt />
                        }
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <TextArea
                        shape="round"
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full sm:pb-5 sm:pr-5 text-gray-600_02 font-semibold resize-none"
                      />
                    </div>
                  </div>
                  <Button
                    size="2xl"
                    shape="round"
                    className="w-full sm:px-5 font-semibold text-white"
                  >
                    Send Request
                  </Button>
                </div>
                <div className="h-[534px] w-px md:w-full md:h-px my-[25px] bg-blue_gray-100_01" />
                <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-10">
                  <div className="flex flex-col items-center justify-start w-[96%] md:w-full gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                      <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                        Office Address
                      </Heading>
                      <Heading
                        size="md"
                        as="h6"
                        className="!text-gray-600_02 !leading-[180%]"
                      >
                        <>
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </>
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-2.5">
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img
                          src="images/img_icon_20px_call.svg"
                          alt="icon24pxcall"
                          className="h-[24px] w-[24px]"
                        />
                        <Heading
                          size="md"
                          as="h6"
                          className="!text-gray-600_02"
                        >
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        {/* <Img
                          src="images/img_icon_24px_email.svg"
                          alt="icon24pxemail"
                          className="h-[24px] w-[24px]"
                        /> */}
                        <PiEnvelope color={"gray"} size={24} />
                        <Heading
                          size="md"
                          as="h6"
                          className="mt-0.5 !text-gray-600_02"
                        >
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Social
                    </Heading>
                    <div className="flex flex-row justify-start gap-4">
                      <FaFacebook size={30} />
                      <FaLinkedin size={30} />
                      <FaTwitter size={30} />
                      <FaReddit size={30} />
                      <FaRss size={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" /> */}
      </div>
    </>
  );
}
