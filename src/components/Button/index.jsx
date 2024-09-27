import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-xs",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    gray_700: "border-gray-700 border border-solid text-gray-900",
    gray_600_02: "border-gray-600_02 border border-solid text-gray-900",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-700",
    blue_gray_100_01: "border-blue_gray-100_01 border border-solid text-gray-900",
    blue_gray_100_02: "border-blue_gray-100_02 border border-solid text-gray-900",
  },
};
const sizes = {
  "2xl": "h-[56px] px-[35px] text-base",
  xs: "h-[25px] text-lg",
  sm: "h-[30px]",
  "3xl": "h-[60px] px-3.5",
  md: "h-[36px] px-3.5 text-sm",
  lg: "h-[44px] px-4 text-base",
  "4xl": "h-[60px] px-[35px] text-lg",
  xl: "h-[48px] px-6 text-base",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "xl",
  color = "gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["2xl", "xs", "sm", "3xl", "md", "lg", "4xl", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "gray_900",
    "gray_700",
    "gray_600_02",
    "blue_gray_100",
    "blue_gray_100_01",
    "blue_gray_100_02",
  ]),
};

export { Button };
