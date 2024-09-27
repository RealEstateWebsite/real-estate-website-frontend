import React from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, SelectBox, Input } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BlogPagePage() {
  const [searchBarValue14, setSearchBarValue14] = React.useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px]">
                <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                  Real Estate News & Blogs
                </Heading>
                <div className="flex flex-row md:flex-col justify-start sm:w-full gap-4 md:gap-5">
                  <Input
                    shape="round"
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue14}
                    onChange={(e) => setSearchBarValue14(e)}
                    suffix={
                      searchBarValue14?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue14("")}
                          height={24}
                          width={24}
                          fillColor="#6e6e6eff"
                        />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_600_02.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-[33%] md:w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                    name="active"
                    placeholder="Category"
                    options={dropDownOptions}
                    className="w-[33%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={<Img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                    name="active_one"
                    placeholder="Popular"
                    options={dropDownOptions}
                    className="w-[33%] md:w-full gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Img
                        src="images/img_rectangle_5617_350x384.png"
                        alt="image"
                        className="w-full md:h-auto sm:w-full object-cover rounded-lg"
                      />
                      <div className="flex flex-col items-start justify-start w-full gap-2">
                        <Button
                          color="blue_gray_100_01"
                          size="md"
                          variant="outline"
                          shape="round"
                          className="font-semibold min-w-[89px] sm:min-w-full"
                        >
                          Business
                        </Button>
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <Heading size="2xl" as="h2" className="tracking-[-0.48px]">
                            10 Delightful Dining Room Decor Trends for Spring
                          </Heading>
                          <div className="flex flex-row justify-start w-full gap-6">
                            <div className="flex flex-row justify-start items-start w-[23%] gap-1.5">
                              <div className="h-[5px] w-[5px] mt-[5px] bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h3" className="!text-gray-600_02">
                                July 20, 2022
                              </Heading>
                            </div>
                            <div className="flex flex-row justify-start items-center w-[23%] gap-1.5">
                              <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                              <Heading size="xs" as="h4" className="!text-gray-600_02">
                                7 min read
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-full gap-2">
                      <Heading size="md" as="h5" className="mt-0.5 !text-gray-600_02 !font-bold">
                        Continue Reading
                      </Heading>
                      <Img src="images/img_icon_24px_v_gray_600_02.svg" alt="continue" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button color="gray_700" variant="outline" shape="round" className="font-semibold min-w-[48px]">
                    1
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    2
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    3
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    4
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    shape="round"
                    className="font-semibold min-w-[48px]"
                  >
                    5
                  </Button>
                </div>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  shape="round"
                  rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
                  className="gap-1 font-semibold min-w-[134px]"
                >
                  Next Page
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
