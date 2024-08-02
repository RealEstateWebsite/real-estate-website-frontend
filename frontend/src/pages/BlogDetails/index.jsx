import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import BlogPageColumnactive from "../../components/BlogPageColumnactive";
import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";

const tableData = [
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
  {
    fullname: "Zakir Hossen",
    title: "UI, UX Designer",
    emailaddress: "uxdesigner@gmail.com",
    phonenumber: "+88 222 5554 444",
  },
];

export default function BlogDetailsPage() {
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("fullname", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Full Name
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("title", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Title
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("emailaddress", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Email Address
          </Heading>
        ),
        meta: { width: "234px" },
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Heading as="h6" className="!text-gray-600_02">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="xs" as="p" className="py-[11px]">
            Phone Number
          </Heading>
        ),
        meta: { width: "214px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>food-website</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[110px] bg-gray-50_01">
        <Header className="flex justify-center items-center w-full md:h-auto p-[19px] bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full gap-[111px]">
          <div className="flex flex-col items-start justify-start w-full pl-[120px] pr-14 md:px-5">
            <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-[34px] mx-auto max-w-[1135px]">
              <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                10 Delightful Dining Room Decor Trends for Spring
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[84px]">
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-4 md:gap-5">
                  <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-6">
                    <Img
                      src="images/img_rectangle_5618_550x996.png"
                      alt="image"
                      className="w-full md:h-[550px] object-cover rounded-[10px]"
                    />
                    <Text as="p">
                      <>
                        What a time we are living in! A lot of things are coming back, bringing back nostalgia.
                        Wondering why I am talking about nostalgia and all? Especially when it is supposed to be an
                        article on websites! Well, because some old famous website technology is coming back too. Yes, I
                        am talking about static websites.
                        <br />
                        Long ago, almost all websites were used to be static sites during the early days of the
                        internet. Then dynamic sites came and blew the space. A lot of websites shifted to it. Obviously
                        dynamic sites have their advantages. But static sites are making a comeback. And it’s coming
                        stronger than before. In this article, you will cover the basics of static websites like what is
                        a static website, what are the advantages, and when you should use a static website. Let’s kick
                        things off.
                      </>
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[11%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full gap-4">
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[32px] w-[32px]" />
                      <div className="flex flex-row justify-start items-center w-full gap-1">
                        <Img src="images/img_linkedin.svg" alt="linkedin_one" className="h-[32px] w-[32px]" />
                        <div className="flex flex-row justify-start w-[71%]">
                          <div className="flex flex-row justify-start w-full">
                            <div className="h-[25px] w-full sm:w-full relative">
                              <Img
                                src="images/img_union.svg"
                                alt="union_one"
                                className="justify-center h-[25px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <Heading
                                size="xs"
                                as="h2"
                                className="justify-center w-max left-0 bottom-0 right-0 top-0 m-auto absolute"
                              >
                                Share this
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img src="images/img_twitte.svg" alt="twitte_one" className="h-[32px] w-[32px]" />
                      <Img src="images/img_reddit.svg" alt="reddit_one" className="h-[32px] w-[32px]" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-12">
                  <div className="flex flex-col items-start justify-center w-full gap-[17px]">
                    <Heading size="3xl" as="h3" className="mt-0.5 tracking-[-0.56px]">
                      Blockquotes
                    </Heading>
                    <Text as="p">
                      Blockquotes can be nested. Add a &gt;&gt; in front of the paragraph you want to nest.
                    </Text>
                  </div>
                  <div className="flex flex-col w-full gap-12">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-start justify-center w-full gap-4 p-7 sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                        <Heading size="lg" as="h4" className="mt-1 tracking-[-0.40px]">
                          Performance: Faster Loading Speed
                        </Heading>
                        <div className="flex flex-col items-center justify-start md:w-full gap-[19px]">
                          <Text as="p">
                            Static websites are way faster than dynamic ones. As they don’t have a back-end system,
                            there is no time loss due to database connection. Instead, the lightweight, pre-rendered
                            HTML files load incredibly fast.
                          </Text>
                          <Text as="p">
                            But why fast loading is important? According to Neil Patel, 47% of people on the internet
                            expect a web page to load in less than 2 seconds.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-col items-center justify-start w-full gap-10 p-[38px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                        <div className="flex flex-col items-start justify-start w-[98%] md:w-full pt-[3px] gap-4">
                          <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                            Performance: Faster Loading Speed
                          </Heading>
                          <div className="flex flex-col items-center justify-start gap-[19px]">
                            <Text as="p">
                              Static websites are way faster than dynamic ones. As they don’t have a back-end system,
                              there is no time loss due to database connection. Instead, the lightweight, pre-rendered
                              HTML files load incredibly fast.
                            </Text>
                            <Text as="p">
                              But why fast loading is important? According to Neil Patel, 47% of people on the internet
                              expect a web page to load in less than 2 seconds.
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-[98%] md:w-full pt-[3px] gap-4">
                          <Heading size="lg" as="h6" className="tracking-[-0.40px]">
                            Performance: Faster Loading Speed
                          </Heading>
                          <div className="flex flex-col items-center justify-start pt-1.5 gap-5">
                            <Text as="p">
                              Dynamic site CMS like WordPress has a greater dependency. They require an operating system
                              like Linux
                            </Text>
                            <Text as="p">
                              Unlike dynamic websites, you don’t have to depend on plugins to add functionalities to
                              your static site. Instead, you can create or include features directly into files. Or, you
                              can insert widgets using a snippet.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-6">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                      Images
                    </Heading>
                    <Text as="p">
                      Being a fast loading and more secure website, you can choose a static website for beginner to
                      medium level workload. Hopefully, you have got the answer to what is a static website and why
                      should you use it. Decide carefully does static sites are enough for your need.
                    </Text>
                  </div>
                  <Img
                    src="images/img_rectangle_5619_532x996.png"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-[60px]">
                  <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                    <div className="flex flex-col items-start justify-start w-full gap-3.5">
                      <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                        Lists
                      </Heading>
                      <Text as="p">
                        Being a fast loading and more secure website, you can choose a static website for beginner to
                        medium level workload. Hopefully, you have got the answer to what is a static website and why
                        should you use it. Decide carefully does static sites are enough for your need.
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
                      <div className="flex flex-row justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Performance: Faster Loading Speed
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Less Server-side Dependencies
                        </Heading>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] sm:mt-0 !text-gray-600_02">
                          Flexibility: More Freedom to Develop Websites
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] !text-gray-600_02">
                          Security: A More Secure Website
                        </Heading>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] sm:mt-0 !text-gray-600_02">
                          Scalability: Capability to Handle Massive Traffic
                        </Heading>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-3 sm:gap-3">
                        <div className="h-[10px] w-[10px] bg-gray-600_02 rounded-[50%]" />
                        <Heading size="md" as="h6" className="mt-[5px] sm:mt-0 !text-gray-600_02">
                          Hosting and Pricing: Saves Your Budget For Good
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <div className="flex flex-row justify-start w-full gap-[15px] sm:gap-[15px]">
                      <Heading size="md" as="h6" className="h-[25px] mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        01.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Performance: Faster Loading Speed
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-[13px] sm:gap-[13px]">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        02.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Less Server-side Dependencies
                      </Heading>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start w-full gap-3 sm:gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 sm:mt-0 !text-gray-600_02 !font-bold">
                        03.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Flexibility: More Freedom to Develop Websites
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start w-full gap-3 sm:gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 !text-gray-600_02 !font-bold">
                        04.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Security: A More Secure Website
                      </Heading>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start w-full gap-3 sm:gap-3">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 sm:mt-0 !text-gray-600_02 !font-bold">
                        05.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Scalability: Capability to Handle Massive Traffic
                      </Heading>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start w-full gap-[11px] sm:gap-[11px]">
                      <Heading size="md" as="h6" className="mt-[3px] mb-0.5 sm:mt-0 !text-gray-600_02 !font-bold">
                        06.
                      </Heading>
                      <Heading size="md" as="h6" className="!text-gray-600_02">
                        Hosting and Pricing: Saves Your Budget For Good
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-3.5">
                  <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                    Link
                  </Heading>
                  <Text as="p">
                    <>
                      Yes, a static website may have all its benefits, but is it suitable for you? That’s a big
                      question. It depends on why you are going to build a website, what purpose it will serve. That’s
                      why you must when you should use a static website.
                      <br />
                      The followings are the common applications where using the static website is the best choice. -
                      Blog sites- - Small business websites - Websites Under-Development - Personal Portfolio sites -
                      Websites that contain basic information
                    </>
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-[39px]">
                  <div className="flex flex-col items-start justify-start w-full gap-3.5">
                    <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                      Tables
                    </Heading>
                    <Text as="p">
                      The followings are the common applications where using the static website is the best choice. -
                      Blog sites- - Small business websites.
                    </Text>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[39px] sm:p-5 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                    <ReactTable
                      size="xs"
                      bodyProps={{ className: "md:flex-col" }}
                      headerProps={{ className: "md:flex-col md:gap-5" }}
                      rowDataProps={{
                        className: "border-blue_gray-100_01 border-b border-dashed md:flex-col md:gap-5",
                      }}
                      className="w-[916px] my-2.5"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[88%] md:w-full pt-0.5 gap-5">
                  <Heading size="2xl" as="h4" className="tracking-[-0.48px]">
                    Writen by
                  </Heading>
                  <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                    <Img
                      src="images/img_profile_picture.png"
                      alt="profilepicture"
                      className="h-[100px] w-[100px] md:h-auto rounded-[50%]"
                    />
                    <div className="flex flex-col items-center justify-start w-[17%] sm:w-full gap-1">
                      <Heading size="2xl" as="h4" className="tracking-[-0.48px]">
                        Kristin Watson
                      </Heading>
                      <Heading as="h6" className="!text-gray-600_02">
                        Co-founder and CDO
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[12%] sm:w-full gap-1.5">
                      <div className="h-[8px] w-[8px] bg-blue_gray-100_01 rounded-[50%]" />
                      <Heading as="h6" className="mt-[5px] !text-gray-600_02">
                        July 20, 2022
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full gap-[38px] md:px-5 max-w-[1200px]">
              <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                Recent News
              </Heading>
              <div className="flex flex-row md:flex-col w-full gap-6">
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6" />
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6" />
                <BlogPageColumnactive className="flex flex-col items-center justify-start w-[32%] md:w-full gap-6" />
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full pl-[74px] pr-14 gap-[115px] py-[74px] md:p-5 bg-white-A700" />
      </div>
    </>
  );
}
