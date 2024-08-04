import React from "react";
import { twMerge } from "tailwind-merge";

const defaultVariantMapping = {
  h1: { component: "h1", className: "text-4xl font-bold" },
  h2: { component: "h2", className: "text-3xl font-bold" },
  h3: { component: "h3", className: "text-2xl font-bold" },
  h4: { component: "h4", className: "text-xl font-bold" },
  h5: { component: "h5", className: "text-lg font-bold" },
  h6: { component: "h6", className: "text-base font-bold" },
  subtitle1: { component: "h6", className: "text-base font-medium" },
  subtitle2: { component: "h6", className: "text-sm font-medium" },
  body1: { component: "p", className: "text-base" },
  body2: { component: "p", className: "text-sm" },
  button: { component: "span", className: "text-sm uppercase font-medium" },
  caption: { component: "span", className: "text-xs" },
  overline: { component: "span", className: "text-xs uppercase" },
  inherit: { component: "p", className: "" },
};

const alignClasses = {
  center: "text-center",
  justify: "text-justify",
  left: "text-left",
  right: "text-right",
  inherit: "",
};

const Typography = React.forwardRef(
  (
    {
      component: _Component,
      variant = "body1",
      align = "inherit",
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      className,
      variantMapping,
      ...props
    }: any,
    ref
  ) => {
    const _variantMapping = variantMapping || defaultVariantMapping

    const variantProps = (!paragraph && _variantMapping[variant]) || { component: _Component || "p", className: "" };

    const appliedClasses = twMerge(
      variantProps.className,
      alignClasses[align],
      gutterBottom && "mb-2",
      noWrap && "truncate line-clamp-1",
    //   paragraph && "mb-6",
      className
    );

    const Component = _Component || (variantProps.component || variantProps);

    return <Component ref={ref} className={appliedClasses} {...props}>{props.children}</Component>;
  }
);

export default Typography;
