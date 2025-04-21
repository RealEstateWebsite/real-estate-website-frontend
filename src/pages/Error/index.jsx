import React from "react";
import { CloseSVG } from "../../assets/images";
import Navbar from '../../components/Navbar/index';
import { Button, Img, Heading, Input, Text } from "../../components";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate  = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full md:h-auto pb-[195px] gap-[116px] md:pb-5 bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-[34%] md:w-full mt-12">
          <div className="flex flex-col items-center justify-start w-full gap-[30px]">
            <Img src="images/img_frame_1000001686.svg" alt="image" className="h-[360px]" />
            <div className="flex flex-col items-center justify-center w-[54%] md:w-full gap-[19px]">
              <Heading as="h2" className="mt-px tracking-[-0.56px] text-center">
                Something wrong!
              </Heading>
              <Button
                color="gray_600_02"
                size="4xl"
                variant="outline"
                shape="round"
                rightIcon={<Img src="images/img_icon_16px_arrow_right.svg" alt="icon / 24px / arrow-right" />}
                className="gap-2.5 font-bold min-w-[157px] sm:min-w-full"
                onClick={()=> navigate("/")}
              >
                Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
