import React from "react";

const sizes = {
  xs: "text-sm font-normal leading-[150%]",
  lg: "text-xl font-normal leading-[180%]",
  s: "text-base font-medium leading-[180%]",
  md: "text-lg font-normal leading-[180%]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_02 font-manrope ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
