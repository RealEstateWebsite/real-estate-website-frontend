import React, { useState } from "react";
import { Heading, Button, Img, CheckBox, Input } from "../../components";
import { default as ModalProvider } from "react-modal";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaRegUser,
  FaIdCardAlt,
  FaEnvelope,
} from "react-icons/fa";
import { PiKeyhole, PiIdentificationCard, PiEnvelope } from "react-icons/pi";
import {
  validateEmail,
  validatePassword1,
  validatePassword2,
  validatePassword3,
} from "utilities/common";

export default function CreateAccount({ isOpen, ...props }) {
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);
  //to store the form data and be used for client side validation
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //handling the password toggle
  const handlePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateInputs = () => {
    //retrieving the values from the document
    setFormData({
      firstname: document.getElementById("firstname").value,
      lastname: document.getElementById("lastname").value,
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });
    console.log(formData);
    let { firstname, lastname, username, email, password } = formData;
    //to check and alert for any empty field
    if (!firstname || !lastname || !username || !email) {
      //no longer need to check the password here
      alert("Please fill in all fields.");
      return false;
    }

    //checks the email validity
    if (!validateEmail(email)) {
      alert("Please input a valid email");
    }

    //ensures the password isn't null and checks for spaces in the password
    if (!validatePassword1(password) || password.includes(" ")) {
      alert("Please input a valid password");
    }

    //checks for a special char but doesn't include a lot of characters
    if (!validatePassword2(password)) {
      alert("Your password needs a special character or number");
    }
    //not sure if there's a need for validatePass3 because of the minlength property
    //update: it doesn't work for some reason, perheps because of the component passing and all
    if (!validatePassword3(password)) {
      alert("Your password length is below 8 letters");
    }

    if (!agreed) {
      alert(
        "You must have agreed to our terms and conditions before signing up!"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validateInputs()) return;

    fetch("https://estateapi-2t2c.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response.status);
        if (response.ok) {
          return response.json();
        } else {
          // Handle non-OK responses
          return response.json().then((errorData) => {
            // Assuming errorData is an array of objects with messages
            // errorData.forEach((error) => {
            //   if (error.message) {
            //     console.log(`Error: ${error.message}`); // Log each error message
            //   } else {
            //     console.log('Error:', error); // Fallback if no message property
            //   }
            // });
            //errorData.detail is an array of objects with number keys and a msg inside
            console.log(errorData.detail);
            //     errorData.detail.forEach((error) => {
            //       console.log(`Error message: ${error.msg}` )
            // }) this is for displaying each error that is returned
          });
        }
      })
      .catch((error) => {
        console.error("Error: " + error.message);
      });

    console.log("You have signed up successfully");
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[480px] h-full max-w-[1000px] bg-white my-[3%] opacity-[85%] border-[#000000a6] border-[1.5px] rounded-md"
      overlayClassName="overflow-y-auto bg-[#d4dae4]"
    >
      <div className="flex flex-row justify-center w-full  gap-2 sm:p-5 bg-white-A700">
        <div className=" flex-1 bg-[#f4f4f4] flex items-center justify-center text-center">
            <div className="flex w-full h-full p-0">
              <img src="images/img_image_3.png" className="object-center max-h-[900px] max-w-[600px]" />
              {/* <img src="images/img_image_3.png" />
              <img src="images/img_image_4.png" /> */}
            </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-[15px] w-full mt-2.5 mb-[7px] gap-[29px]">
          <div className="flex flex-col items-start justify-start w-full gap-[15px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="4xl" as="h4" className="tracking-[-0.72px]">
                  Create Account
                </Heading>
                <Button
                  size="sm"
                  shape="square"
                  className="w-[30px] hbg-[#605c4e]  text-[#bbc9aa] hover:bg-[#363020]  duration-100 transition-all focus-visible:border-[#605ce4]"
                  onClick={() => navigate("/")}
                >
                  <FaTimes className="rounded-sm " />
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-center w-full gap-5">
                <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-5">
                  <Input
                    shape="round"
                    type="text"
                    name="First Name"
                    placeholder="First Name"
                    id="firstname"
                    prefix={<FaRegUser size={24} color={"gray"} />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid text-black"
                    onChange={handleInputChange}
                  />
                  <Input
                    shape="round"
                    type="text"
                    name="Last Name"
                    id="lastname"
                    placeholder="Last Name"
                    onChange={handleInputChange}
                    prefix={<FaRegUser size={24} color={"gray"} />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid text-black"
                  />
                  <Input
                    shape="round"
                    type="text"
                    name="User Name"
                    id="username"
                    placeholder="User Name"
                    onChange={handleInputChange}
                    prefix={<PiIdentificationCard size={28} color={"gray"} />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid text-black "
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    prefix={<PiEnvelope size={28} color={"gray"} />}
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid text-black"
                    onChange={handleInputChange}
                  />
                  <Input
                    shape="round"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    id="password"
                    prefix={<PiKeyhole size={32} color={"gray"} />}
                    suffix={
                      <span
                        onClick={handlePasswordVisibility}
                        className="cursor-pointer"
                      >
                        {passwordVisible ? (
                          <FaEyeSlash color={"gray"} />
                        ) : (
                          <FaEye color={"gray"} />
                        )}
                      </span>
                    }
                    className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid focus:outline-none text-black"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <CheckBox
              shape="round"
              name="check_list"
              label={<div>
                I Agree to the <a href="/terms-and-conditions" className="underline">Terms and Conditions</a>
              </div>}
              id="checklist"
              className="gap-2 !text-gray-600_02 text-left font-bold my-2 mx-auto"
              onClick={() => setAgreed(!agreed)}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-[60%] gap-[18px]">
            <Button
              size="4xl"
              shape="round"
              className="w-full sm:px-5 font-bold bg-[#bbc9aa] text-[#353434]"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
            <Button
              color="white_A700"
              size="4xl"
              shape="round"
              leftIcon={
                <Img
                  src="images/img_icon_20px_google.svg"
                  alt="icon / 20px / google"
                />
              }
              className="w-full gap-2.5 sm:px-5 text-gray-900 font-bold border-gray-600_02 border border-solid"
            >
              Create Account with Google
            </Button>
          </div>
          <div className="h-px w-full border-t-[2.5px] border-t-[#dadae4] font-candara" />
          <div className="flex flex-row justify-center w-full">
            <p className="font-semibold">
              Have an account?
            </p>
            <a href="#" className="pl-2 underline">
                <Link to="/login">Log in</Link>
            </a>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
