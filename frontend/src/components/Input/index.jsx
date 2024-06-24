import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-600_02",
    gray_50_02: "bg-gray-50_02 text-gray-700",
  },
};
const sizes = {
  sm: "h-[48px] pl-4 pr-[35px] text-sm",
  xs: "h-[25px] pr-[30px] text-lg",
  md: "h-[60px] px-4 text-lg",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      variant = "fill",
      size = "md",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["sm", "xs", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "gray_50_02"]),
};

export { Input };
