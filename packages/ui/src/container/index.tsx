import React from "react";
import { twMerge } from "tailwind-merge";
const Container = React.forwardRef(
  (
    {
      component: Component = "div",
      disableGutters = false,
      fixed = false,
      maxWidth = "lg",
      className,
      ...props
    }: any,
    ref
  ) => {
    const maxWidthClasses = {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      false: "",
    };

    return (
      <Component
        ref={ref}
        className={twMerge(
          "container",
          disableGutters && "px-0",
          !disableGutters && "mx-auto",
          !fixed && maxWidth && [maxWidthClasses[maxWidth]],
          fixed && "w-full",
          className
        )}
        {...props}
      >
        {props.children}
      </Component>
    );
  }
);

export default Container;
