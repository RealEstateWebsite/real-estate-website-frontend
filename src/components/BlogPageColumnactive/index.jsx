import React from "react";
import { Img, Heading, Button } from "..";
import { FaArrowRight } from "react-icons/fa";

export default function BlogPageColumnactive({
  category = "Business",
  title = "10 Delightful Dining Room Decor Trends for Spring",
  date = "July 20, 2022",
  readingTime = "7 min read",
  active = "Continue Reading",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full gap-3">
        <Img
          src="images/img_rectangle_5617_350x384.png"
          alt="image"
          className="w-full md:h-auto sm:w-full object-cover rounded-lg"
        />
        <div className="flex flex-col items-start justify-start w-full gap-2">
          <Button className="h-[38px] px-[13px] text-sm font-semibold border-blue-50 border border-solid min-w-[89px] rounded-[10px] sm:min-w-full text-white">
            {category}
          </Button>
          <div className="flex flex-col items-center justify-start w-full gap-[15px]">
            <Heading size="2xl" as="h5" className="tracking-[-0.48px]">
              {title}
            </Heading>
            <div className="flex flex-row justify-start w-full gap-6">
              <div className="flex flex-row justify-start items-start w-[50%] gap-1.5">
                <div className="h-[5px] w-[5px] mt-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading as="h6" className="text-gray-800">
                  {date}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center w-[50%] gap-1.5">
                <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading as="h6" className="text-gray-800">
                  {readingTime}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-2 ">
        <Heading as="h6" className="mt-0.5 text-gray-700 font-bold hover:text-black ">
          {active}
        </Heading>
        <FaArrowRight size={24} color={"grey"} />
      </div>
    </div>
  );
}
