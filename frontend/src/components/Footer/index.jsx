import React from "react";
import { Heading, Img, Text } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[5px] gap-px mx-auto md:gap-5 md:px-5 max-w-[1200px]">
        <div className="flex flex-col items-center justify-start w-[29%] md:w-full gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
            <Text size="lg" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
              Relasto
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Heading as="h6">
              <>
                59 Bervely Hill Ave, Brooklyn Town,
                <br />
                New York, NY 5630, CA, US
              </>
            </Heading>
            <div className="flex flex-col items-start justify-center gap-2">
              <Heading as="h6" className="mt-px">
                +(123) 456-7890
              </Heading>
              <Heading as="h6">info@mail.com</Heading>
            </div>
            <div className="flex flex-row justify-start w-full gap-3">
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
              </div>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_twitter.svg" alt="icontwitter_one" className="h-[30px] w-[30px]" />
              </div>
              <Img src="images/img_icon_instragram.svg" alt="iconinstragram" className="h-[30px] w-[30px]" />
              <Img src="images/img_icon_linked_in.svg" alt="iconlinkedin" className="h-[30px] w-[30px]" />
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img src="images/img_icon_youtube.svg" alt="iconyoutube_one" className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col justify-between items-center w-[72%] md:w-full md:gap-10">
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6" className="!font-bold">
              Features
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[15px]">
              <Heading as="h6">Home v1</Heading>
              <Heading as="h6">Home v2</Heading>
              <Heading as="h6">About</Heading>
              <Heading as="h6">Contact</Heading>
              <Heading as="h6">Search</Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6" className="!font-bold">
              Information
            </Heading>
            <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
              <Heading as="h6">Listing v1</Heading>
              <Heading as="h6">Listing v2</Heading>
              <Heading as="h6">Property Details</Heading>
              <Heading as="h6">Agent List</Heading>
              <Heading as="h6">Agent Profile</Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6" className="!font-bold">
              Documentation{" "}
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Heading as="h6" className="mt-0.5">
                Blog
              </Heading>
              <Heading as="h6">FAQ</Heading>
              <Heading as="h6">Privacy Policy</Heading>
              <Heading as="h6">License</Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
            <Heading size="md" as="h6" className="!font-bold">
              Others
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Heading as="h6" className="mt-0.5">
                Log in
              </Heading>
              <Heading as="h6">Enter OTP</Heading>
              <Heading as="h6">New Password</Heading>
              <Heading as="h6">Reset Password</Heading>
              <Heading as="h6">Create Account</Heading>
            </div>
          </div>
        </div>
      </div>
      <Heading as="h6" className="ml-[45px] md:ml-5">
        © 2022. All rights reserved.
      </Heading>
    </footer>
  );
}
