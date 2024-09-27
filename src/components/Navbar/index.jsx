import React, { useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Button, Input, Img, Heading, Text } from "..";
import { Link, useNavigate } from "react-router-dom";

const tab = [
  {
    text: "Home",
    href: "/"
  },
  {
    text: "Listing",
    href: "/listing"
  },
  {
    text: "Agents",
    href: "/agentlist"
  },
  {
    text: "Property",
    href: "/propertydetails"
  },
  {
    text: "Blog",
    href: "/blogpage"
  }
]

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const navigate = useNavigate();

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img src="images/img_real_estate_1.svg" alt="realestateone" className="h-[40px] w-[40px]" />
          <Text size="lg" as="p" className="mt-[5px] !text-orange-A700 !font-markoone">
            Relasto
          </Text>
        </div>
        <div className="flex flex-row sm:flex-col justify-between items-center w-[41%] md:w-full sm:gap-10">
          <div className="flex flex-row w-[64%] sm:w-full gap-10">
            {tab && tab.map((row, index) => (
              <div
                key={index}
                className="flex flex-row justify-start items-start w-[25%] gap-1.5"
              >
                <Heading as="h6">
                  <Link to={row.href}>{row.text}</Link>
                </Heading>
                {/* <Img src="images/img_arrow_down.svg" alt="home_two" className="h-[16px] w-[16px] mt-0.5" /> */}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-start items-center w-[19%] md:w-full gap-2.5">
          <Input
            size="xs"
            shape="square"
            name="search"
            placeholder="Search"
            value={searchBarValue1}
            onChange={(e) => setSearchBarValue1(e)}
            prefix={<Img src="images/img_icon_24px_search.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={
              searchBarValue1?.length > 0 ? (
                <CloseSVG onClick={() => setSearchBarValue1("")} height={24} width={24} fillColor="#191919ff" />
              ) : null
            }
            className="w-[55%] gap-2 text-gray-900 font-bold"
          />
          <Button size="lg" shape="round" className="sm:px-5 font-semibold min-w-[94px]" onClick={() => navigate("/login")}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
