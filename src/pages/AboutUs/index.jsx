import React from "react";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import { FaDollarSign, FaFire } from "react-icons/fa";
import {GoLocation} from "react-icons/go";

export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[100px] pt-[8vh]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading as="h3" className="tracking-[-1.08px] text-center">
                  <>
                    Reimagining real estate.
                  </>
                </Heading>
                <Text as="p" className="!text-gray-700 text-center">
                  <>
                    On the other hand, we denounce with righteous indignation and dislike men who <br />
                    are so beguiled and demoralized by the charms of pleasure of the moment, <br />
                    so blinded by desire, that they cannot foresee the pain and trouble.
                  </>
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5594.png"
                    alt="image_three"
                    className="w-[66%] md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full p-[50px] md:p-5 bg-[#605c4e]">
          <div className="flex flex-row justify-center w-full mx-[70px] md:mx-5 max-w-[1200px]">
            <div className="flex flex-row md:flex-col w-full gap-[100px] md:gap-10">
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <div className=" w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <FaDollarSign size={30} color="#fd650b" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading as="h4" className="tracking-[-0.92px]">
                    $15.4M
                  </Heading>
                  <p className="text-[#f0f0f0]  tracking-[-0.40px] text-[26.5px] font-candara">
                    From Property Transactions
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <div className=" w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <GoLocation size={28} color="#fd650b" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading as="h4" className="tracking-[-0.92px]">
                    25K+
                  </Heading>
                  <p className="text-[#f0f0f0] text-[26.5px] font-candara tracking-[-0.40px]">
                    Properties Bought and Sold Successfully
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full gap-[18px]">
                <div className=" w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <FaFire size={28} color="#fd650b" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                    500
                  </Heading>
                  <p className="text-[#f0f0f0] text-[26.5px] font-candara">
                    Daily completed Transactions
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] md:w-full mb-[26px] gap-[18px]">
                <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center">
                  <Img src="images/img_icon_orange_a700.svg" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                    600+
                  </Heading>
                  <p className="text-[#f0f0f0] text-[26.5px] font-candara">
                    Regular Clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="flex flex-row justify-start w-full pl-[120px] pr-14 md:px-5">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1147px]">
              <div className="flex flex-col items-center justify-start w-[47%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                  <Heading size="4xl" as="h3" className="tracking-[-0.72px]">
                    A note from our founders.
                  </Heading>
                  <Text as="p" className="!text-gray-700">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px] px-1"
                      >
                        1
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                        It all started in 1995
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        2
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] sm:w-full gap-4">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                        Donate launches in 2007
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[26px] sm:gap-5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        3
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] sm:w-full pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                        Relasto holds its initial public offering in 2008
                      </Heading>
                      <Text as="p" className="!text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                        the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                        demoralized by the charms of pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_20_589x531.png"
                alt="image_four"
                className="w-[47%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end w-full px-14 py-10 md:px-5 bg-[#252422]">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1150px]">
              <Img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className="w-[44%] md:w-full md:h-[589px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col items-center justify-start w-[44%] md:w-full gap-14">
                <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-3.5">
                  <Heading as="h3" className="text-[#fffcf2]">
                    Our vision is simple.
                  </Heading>
                  <p className="text-[#f7f7f1]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the
                      other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                      demoralized by the charms of pleasure of the moment.<br />
                      In a free hour, On the other hand, we denounce with righteous indignation and dislike men .</p>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading as="h4" className="tracking-[-0.40px] text-[#f7f7f1] text-[28px]">
                    Kausar Pial
                  </Heading>
                  <Heading as="h6" className="mb-0.5 text-[#ccc5b9] text-[22px]">
                    CEO at Static Mania
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] md:px-5 max-w-[1200px]">
              <Heading size="4xl" as="h3" className="tracking-[-0.72px] text-center">
                Relasto Team members
              </Heading>
              {/*  */}
              <div className="justify-center w-full gap-6 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5596.png"
                    alt="kausar_pial_one"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px] text-center w-full">
                      Kausar Pial
                    </Heading>
                    <Text as="p" className="mb-0.5 !text-gray-700 text-center w-full">
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5597.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-px py-0.5">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px] text-center w-full">
                      Floyd Miles
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      President of Sales
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5598.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px] text-center w-full">
                      Darlene Robertson
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Guy Hawkins
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5600.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px] ">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px] text-center w-full">
                      Jerome Bell
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5601.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Ralph Edwards
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5602.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Arlene McCoy
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5603.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px] text-center w-full">
                      Devon Lane
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5604.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Courtney Henry
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5605.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Bessie Cooper
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5606.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Cody Fisher
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5607.png"
                    alt="image"
                    className="w-[282px] md:h-auto object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h5" className="mt-0.5 tracking-[-0.40px] text-center w-full">
                      Cody Fisher
                    </Heading>
                    <Text as="p" className="!text-gray-700 text-center w-full">
                      Marketing Coordinator
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full px-14 py-[120px] md:p-5 bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <Heading
                  size="4xl"
                  as="h3"
                  className="text-white tracking-[-0.72px]"
                >
                  News & Consult
                </Heading>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Heading
                    size="md"
                    as="h6"
                    className="mt-0.5 !text-orange-A700 !font-bold"
                  >
                    Explore All
                  </Heading>
                  <Img
                    src="images/img_icon_24px_v.svg"
                    alt="icon24pxv_seven"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-row md:flex-col w-full gap-6">
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="images/img_image_350x384.png"
                    alt="image"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h5"
                      className="text-white tracking-[-0.48px]"
                    >
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h6"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="images/img_icon_24px_v_deep_orange_400.svg"
                        alt="read_the"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="images/img_image_6.png"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h5"
                      className="text-white tracking-[-0.48px]"
                    >
                      Serie Shophouse Launch Next Year, Opportunity For Investors
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h6"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="images/img_icon_24px_v_deep_orange_400.svg"
                        alt="icon24pxv_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6">
                  <Img
                    src="images/img_image_7.png"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <Heading
                      size="2xl"
                      as="h5"
                      className="text-white tracking-[-0.48px]"
                    >
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Heading>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading
                        size="md"
                        as="h6"
                        className="mt-px !text-deep_orange-400 !font-bold"
                      >
                        Read the Article
                      </Heading>
                      <Img
                        src="images/img_icon_24px_v_deep_orange_400.svg"
                        alt="icon24pxv_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 sm:p-5 bg-gray-400_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full pt-[3px] gap-[5px]">
                <Heading
                  size="3xl"
                  as="h4"
                  className="tracking-[-0.56px] text-center"
                >
                  For Recent Update, News.
                </Heading>
                <p className="text-gray-900 text-center">
                We helps businesses customize, automate and scale up their ad
                production and delivery.
                </p>
              </div>
              <div className="flex flex-row sm:flex-col justify-start w-[54%] md:w-full gap-2 sm:gap-5">
                <Input
                  color="gray_50_02"
                  size="sm"
                  shape="round"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="w-[78%] md:w-full font-semibold"
                />
                <Button
                  shape="round"
                  className="sm:px-5 font-semibold min-w-[126px] text-[#f0f0f0]"
                >
                  Subscribe
                </Button>
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
