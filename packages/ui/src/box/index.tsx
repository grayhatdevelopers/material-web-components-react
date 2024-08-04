import React, { Ref } from "react";
import { twMerge } from "tailwind-merge";

const Box = React.forwardRef(
  (
    {
      component: Component = "div",
      className,
      ...props
    }: { component: string } & HTMLElement,
    ref: Ref<any>,
  ) => {
    return (
      <Component
        // @ts-ignore
        ref={ref}
        className={twMerge("flex", className)}
        {...props}
      />
    );
  },
);

export default Box;
