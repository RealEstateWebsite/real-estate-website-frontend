import React from "react";
import { Img, Heading, Button } from "..";

export default function BlogPageColumnactive({
  business = "Business",
  p10delightful = "10 Delightful Dining Room Decor Trends for Spring",
  july202022 = "July 20, 2022",
  time = "7 min read",
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
          <Button className="h-[38px] px-[13px] text-gray-900 text-sm font-semibold border-blue_gray-100_01 border border-solid min-w-[89px] rounded-[10px] sm:min-w-full">
            {business}
          </Button>
          <div className="flex flex-col items-center justify-start w-full gap-[15px]">
            <Heading size="2xl" as="h1" className="tracking-[-0.48px]">
              {p10delightful}
            </Heading>
            <div className="flex flex-row justify-start w-full gap-6">
              <div className="flex flex-row justify-start items-start w-[23%] gap-1.5">
                <div className="h-[5px] w-[5px] mt-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading size="xs" as="h2" className="!text-gray-600_02">
                  {july202022}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center w-[23%] gap-1.5">
                <div className="h-[5px] w-[5px] bg-blue_gray-100_01 rounded-sm" />
                <Heading size="xs" as="h3" className="!text-gray-600_02">
                  {time}
                </Heading>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full gap-2">
        <Heading size="md" as="h2" className="mt-0.5 !text-gray-600_02 !font-bold">
          {active}
        </Heading>
        <Img src="images/img_icon_24px_v_gray_600_02.svg" alt="icon24pxv_one" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
