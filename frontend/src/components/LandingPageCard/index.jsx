import React from "react";
import { Heading, Button, Img } from "./..";

export default function LandingPageCard({
  imageOne = "images/img_image_260x384.png",
  p286162ndave = "2861 62nd Ave, Oakland, CA 94605",
  p3bedroom = "3 Bed Room",
  bathcounter = "1 Bath",
  sqftcounter = "1,032 sqft",
  p1bath = "Family",
  viewDetails = "View Details",
  price = "$649,900",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src={imageOne}
        alt="image_one"
        className="w-full md:h-auto sm:w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
      />
      <div className="flex flex-row justify-center w-full p-[19px] rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[25px] my-2.5 md:px-5 max-w-[344px]">
          <div className="flex flex-row justify-start items-center w-full gap-3">
            <Img src="images/img_icon_map_2.svg" alt="image_two" className="h-[24px] w-[24px]" />
            <Heading as="h1">{p286162ndave}</Heading>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <Img src="images/img_icon_gray_700.svg" alt="3_bed_room_one" className="h-[20px] w-[20px]" />
                <Heading as="h2" className="!text-gray-700">
                  {p3bedroom}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Img src="images/img_icon_gray_700_20x20.svg" alt="1_bath_one" className="h-[20px] w-[20px]" />
                <Heading as="h3" className="!text-gray-700">
                  {bathcounter}
                </Heading>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <Img src="images/img_icon_20x20.svg" alt="1032_sqft_one" className="h-[20px] w-[20px]" />
                <Heading as="h4" className="!text-gray-700">
                  {sqftcounter}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Img src="images/img_iocn_menu.svg" alt="family_one" className="h-[20px] w-[20px]" />
                <Heading as="h5" className="!text-gray-700">
                  {p1bath}
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full pr-[47px] md:pr-5">
            <Button className="h-[48px] px-[31px] sm:px-5 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]">
              {viewDetails}
            </Button>
            <Heading size="2xl" as="h6" className="tracking-[-0.48px]">
              {price}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
