import React, { useState } from "react";
import { Button, Input, Img, Heading, Text } from "..";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

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
  const [isMobile, setIsMobile] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchBarValue2, setSearchBarValue2] = useState("");
  window.addEventListener("orientationchange", () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })
  window.addEventListener("load", () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })
  window.addEventListener("resize", () => {
    if (window.innerWidth < 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  })
  const [searchBarValue1, setSearchBarValue1] = useState("");
  const navigate = useNavigate();

  return (
    <header {...props}>
      <div className="flex justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1200px]">
        <div
          className="flex flex-row justify-start items-start gap-[11px] hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Img
            src="images/img_real_estate_1.svg"
            alt="realestateone"
            className="h-[40px] w-[40px]"
          />
          <Text
            size="lg"
            as="p"
            className="mt-[5px] !text-orange-A700 !font-markoone"
          >
            Relasto
          </Text>
        </div>
        {isMobile === true && (
          <Input
            size="md"
            shape="square"
            name="search"
            className="border-[1px] border-solid border-gray-200 pl-0 rounded-xl ml-4 cutshort flex flex-row justify-between"
            placeholder="Search"
            value={searchBarValue2}
            onChange={(e) => setSearchBarValue2(e.target.value)}
            prefix={<FaSearch className={"cursor-pointer w-[15vw] h-[4.75vh]"} color="#FD650B" />}
            suffix={
              searchBarValue2?.length > 0 ? (
                <FaTimes
                  onClick={() => setSearchBarValue2("")}
                  size={24}
                />
              ) : null
            }
          />
        )}
        {isMobile == false && (
          <div className="flex flex-row gap-10 md:justify-between w-[60%]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-[75%] md:w-full sm:gap-10">
              <div className="flex flex-row w-[64%] sm:w-full gap-10">
                {tab &&
                  tab.map((row, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-start w-[25%] gap-1.5"
                    >
                      <Heading as="h6">
                        <Link to={row.href}>{row.text}</Link>
                      </Heading>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-[25%] md:w-full gap-2.5">
              <Button
                size="lg"
                shape="round"
                className="sm:px-5 font-semibold min-w-[94px]"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
            </div>
          </div>)
        }
        {
          isMobile == true && (
            <div>
              <FaBars size={24} onClick={() => setOpenModal(!openModal)} />
              {openModal && (
                <div className="">
                  <div className="relative right-2 ">
                    <div className="absolute bg-white-A700 -left-10 border-[0.8px] border-black border-solid">
                      <ul className="px-4 py-3 flex flex-col gap-3 ">
                        <li className="border-b-2 border-solid border-b-black pb-3 font-semibold">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="border-b-2 border-solid border-b-black pb-3 font-semibold">
                          <Link to="/listing">Listing</Link>
                        </li>
                        <li className="border-b-2 border-solid border-b-black pb-3 font-semibold">
                          <Link to="/agentlist">Agents</Link>
                        </li>
                        <li className="border-b-2 border-solid border-b-black pb-3 font-semibold">
                          <Link to="/propertydetails">Property</Link>
                        </li>
                        <li className="font-semibold border-b-2 border-solid border-b-black pb-3">
                          <Link to="/blogpage">Blog</Link>
                        </li>
                        <li className="font-semibold">
                          <Link to="/login">Login</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>)

        }

      </div>
    </header>
  );
}
