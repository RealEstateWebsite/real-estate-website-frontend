import React from "react";
// import { CloseSVG } from "../../assets/images";
import { Button, Img, Heading, SelectBox, Input } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import {GoX, GoSearch} from 'react-icons/go'
import { FaAngleDown } from "react-icons/fa";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function BlogPagePage() {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[68px]">
          <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
          <div className="flex flex-col items-center justify-start w-full mt-10">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] md:px-5 max-w-[1200px]">
              <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[18px]">
                <Heading size="4xl" as="h3" className="tracking-[-0.72px]">
                  Real Estate News & Blogs
                </Heading>
                <div className="flex flex-row md:flex-col justify-start sm:w-full w-[80%] gap-4 md:gap-5">
                  <Input
                    shape="round"
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <GoX size={30}  onClick={() => {setSearchBarValue("")}} className="hover:cursor-pointer"/>
                      ) : (
                        // <Img
                        //   src="images/img_icon_24px_search_gray_600_02.svg"
                        //   alt="icon / 24px / search"
                        //   className="cursor-pointer"
                        // />
                        <GoSearch size={30} />
                      )
                    }
                    className="w-[50%] md:w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                    inputClassName="placeholder:text-[15px]"
                  />
                  <SelectBox
                    shape="round"
                    indicator={<FaAngleDown size={28} />}
                    name="active"
                    placeholder="Category"
                    options={dropDownOptions}
                    className="w-[33%] md:w-full gap-px !text-gray-600_02 border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    indicator={<FaAngleDown size={28} />}
                    name="active"
                    placeholder="Popular"
                    options={dropDownOptions}
                    className="w-[33%] md:w-full gap-px !text-gray-600_02 border-blue_gray-100_01 border border-solid"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="justify-center w-full gap-6 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <BlogPageColumnactive className="flex flex-col items-center justify-start w-full gap-6" />
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
        {/* <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" /> */}
      </div>
    </>
  );
}
