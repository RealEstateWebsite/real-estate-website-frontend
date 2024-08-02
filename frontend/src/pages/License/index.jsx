import React from "react";
import { Heading, Img, Text } from "../../components";
import Header from "../../components/Navbar";

export default function LicensePage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] mx-auto max-w-[996px]">
              <div className="flex flex-col items-center justify-start w-full gap-10">
                <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    License
                  </Heading>
                  <Text as="p">Last updated: January 2020</Text>
                </div>
                <Text as="p">
                  <>
                    Your content remains yours, which means that you retain any intellectual property rights that you
                    have in your content. For example, you have intellectual property rights in the creative content you
                    make, such as reviews you write. Or you may have the right to share someone else’s creative content
                    if they’ve given you their permission.
                    <br />
                    We need your permission if your intellectual property rights restrict our use of your content. You
                    provide Google with that permission through this license.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                  <Heading size="2xl" as="h2" className="tracking-[-0.48px]">
                    What’s covered
                  </Heading>
                  <Text as="p">
                    This license covers your content if that content is protected by intellectual property rights.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[22px]">
                  <Heading size="2xl" as="h3" className="tracking-[-0.48px]">
                    What’s not covered
                  </Heading>
                  <Text as="p">
                    We use cookies to recognize and monitor users, their on-site behavior, and their preferences for
                    accessing their website. These cookies include the IP and time of visits by visitors. Visitors to
                    Relasto that do not want cookies put on their browsers should configure their browsers to reject
                    cookies before using the Relasto website.
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                  <Heading size="2xl" as="h4" className="tracking-[-0.48px]">
                    Price Updates
                  </Heading>
                  <Text as="p">
                    <>
                      We will need to update this policy from time to time to ensure that it remains up-to-date with the
                      latest legal requirements and any improvements to our privacy management practices.
                      <br />
                      When we change the policy, we will make sure that we inform you, if any, of such changes. A copy
                      of this policy’s latest version will always be available at this page.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-8">
                  <Heading size="2xl" as="h5" className="mt-px tracking-[-0.48px]">
                    Refund Policy
                  </Heading>
                  <Text as="p">
                    But why fast loading is important? According to Neil Patel, 47% of people on the internet expect a
                    web page to load in less than 2 seconds.
                  </Text>
                  <Text as="p">
                    Static websites are way faster than dynamic ones. As they don’t have a back-end system, there is no
                    time loss due to database connection. Instead, the lightweight, pre-rendered HTML files load
                    incredibly fast.
                  </Text>
                  <Text as="p">
                    You may not disclose any information about your order including, but not limited to, Order ID,
                    download connection, etc.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex md:flex-col w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:gap-5 md:p-5 bg-white-A700">
          <div className="flex flex-row md:flex-col justify-start items-center w-full mt-[5px] gap-px mx-auto md:gap-5 max-w-[1200px]">
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
                  <Img src="images/img_icon_facebook.svg" alt="iconfacebook" className="h-[30px] w-[30px]" />
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
                  <a href="#">
                    <Heading as="h6">Privacy Policy</Heading>
                  </a>
                  <Heading as="h6">License</Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[15px]">
                <Heading size="md" as="h6" className="!font-bold">
                  Others
                </Heading>
                <div className="flex flex-col items-start justify-center w-full gap-[15px]">
                  <a href="#" className="mt-0.5">
                    <Heading as="h6">Log in</Heading>
                  </a>
                  <Heading as="h6">Enter OTP</Heading>
                  <Heading as="h6">New Password</Heading>
                  <a href="#">
                    <Heading as="h6">Reset Password</Heading>
                  </a>
                  <a href="#">
                    <Heading as="h6">Create Account</Heading>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Heading as="h6" className="ml-[45px] md:ml-5">
            © 2022. All rights reserved.
          </Heading>
        </footer>
      </div>
    </>
  );
}
