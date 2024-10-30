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
    <header {...props} className="bg-[#363020] w-full">
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
            className="mt-[5px] text-[#a49966] !font-markoone"
          >
            Seraphim
          </Text>
        </div>
        {isMobile == false && (
          <div className="flex flex-row gap-10 md:justify-between w-[60%]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-[75%] md:w-full sm:gap-10">
              <div className="flex flex-row w-[64%] sm:w-full gap-10">
                {tab &&
                  tab.map((row, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-start w-[25%] gap-1.5 text-[#d4dae4]"
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
              <FaBars size={24} onClick={() => setOpenModal(!openModal)} color={"#605c4e"} />
              {openModal && (
                <div className="">
                  <div className="relative right-2 top-2 ">
                    <div className="absolute bg-[#665b3e] -left-10 ">
                      <ul className="px-4 py-3 flex flex-col gap-3 text-[#d4dae4]  ">
                        <li className="pb-3 font-semibold hover:text-[#98b377] transition-all">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/listing">Listing</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/agentlist">Agents</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/propertydetails">Property</Link>
                        </li>
                        <li className="font-semibold pb-3">
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
  const navigate = useNavigate();

  return (
    <header {...props} className="bg-[#363020] w-full fixed z-50 ">
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
            className="mt-[5px] text-[#a49966] font-reemkufi"
          >
            Seraphim
          </Text>
        </div>
        {isMobile == false && (
          <div className="flex flex-row gap-10 md:justify-between w-[60%]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-[75%] md:w-full sm:gap-10">
              <div className="flex flex-row w-[64%] sm:w-full gap-10">
                {tab &&
                  tab.map((row, index) => (
                    <div
                      key={index}
                      className="flex flex-row justify-start items-start w-[25%] gap-1.5 text-[#d4dae4] font-reemkufi font-normal"
                    >
                      <Heading as="h6" className="text-[#d4dae4]">
                        <Link to={row.href}>{row.text}</Link>
                      </Heading>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-[25%] md:w-full gap-2.5">
              <Button
                size="md"
                shape="round"
                className="sm:px-5 font-semibold min-w-[94px] bg-[#d4dae4] text-[#2b2b2c] text-[0.92rem]"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
            </div>
          </div>)
        }
        {
          isMobile == true && (
            <div className="">
              <FaBars size={24} onClick={() => setOpenModal(!openModal)} color={"#605c4e"} />
              {openModal && (
                <div className="">
                  <div className="relative right-2 top-2 ">
                  <div className="absolute bg-[#665b3e] -left-16 top-[0.8px] border-[0.75px] border-t-0 border-[#aaaaaa98] ">
                      <ul className="px-4 py-3 flex flex-col gap-3 text-[#d4dae4] font-reemkufi font-normal">
                        <li className="pb-3 font-semibold hover:text-[#98b377] transition-all duration-500">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/listing">Listing</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/agentlist">Agents</Link>
                        </li>
                        <li className="pb-3 font-semibold">
                          <Link to="/propertydetails">Property</Link>
                        </li>
                        <li className="font-semibold pb-3">
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
