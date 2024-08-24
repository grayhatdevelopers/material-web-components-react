import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { findSlotProp, removeSlotProps } from "../utils/index.js";

const AppBar = ({
  className,
  variant = null,
  leadingElements,
  headlineElement,
  headlineExpandedElement,
  trailingElements,
  children,
  onExpansionChange,
  ...props
}: {
  className?: string;
  variant?: null | "center-aligned" | "small" | "medium" | "large";
  leadingElements?: any;
  headlineElement?: any;
  headlineExpandedElement?: any;
  trailingElements?: any;
  children?: React.ReactNode;
  // eslint-disable-next-line no-unused-vars
  onExpansionChange?: (expanded: boolean) => void;
}) => {
  const _leadingElements = leadingElements
    ? leadingElements
    : children
      ? findSlotProp(children, "leading", true)
      : null;
  const _headlineElement = headlineElement
    ? headlineElement
    : children
      ? findSlotProp(children, "headline")
      : null;

  const hasHeadlineExpandedElement = findSlotProp(
    children,
    "headline-expanded"
  );
  const _headlineExpandedElement = headlineExpandedElement
    ? headlineExpandedElement
    : children
      ? hasHeadlineExpandedElement
      : _headlineElement;
  const _trailingElements = trailingElements
    ? trailingElements
    : children
      ? findSlotProp(children, "trailing", true)
      : null;

  const remainingElements = removeSlotProps(children, [
    "leading",
    "headline",
    "headline-expanded",
    "trailing",
  ]);

  const _variant = variant
    ? variant
    : _trailingElements?.length > 1 || _leadingElements?.length === 0
      ? hasHeadlineExpandedElement
        ? "medium"
        : "small"
      : "center-aligned";

  const showExpandedHeadline = _variant === "medium" || _variant === "large";

  const headlineExpandedRef = useRef<HTMLDivElement | undefined>();

  const [isHeadlineExpandedVisible, setIsHeadlineExpandedVisible] =
    useState(showExpandedHeadline);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (headlineExpandedRef?.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setIsHeadlineExpandedVisible(entry.isIntersecting);
          onExpansionChange?.(!entry.isIntersecting);
        });
      },
      {
        rootMargin: "-20px 0px",
        threshold: 0,
      }
    );
      observer.observe(headlineExpandedRef.current);
    }
    return () => {
      observer?.disconnect();
    };
  }, [headlineExpandedRef]);

  return (
    <>
      <div
        className={twMerge(
          "w-full px-2 flex flex-row justify-between items-center gap-2 left-0 bg-background transition-all relative", // Added 'relative' here
          showExpandedHeadline && isHeadlineExpandedVisible
            ? "pt-3 pb-0"
            : "py-3",
          className
        )}
        {...props}
      >
        <div
          id="leading-actions"
          className={twMerge(
            "flex flex-row justify-center items-center gap-2",
            _variant === "center-aligned" && "flex-1 justify-start"
          )}
        >
          {_leadingElements}
        </div>

        <div
          id="headline"
          className={twMerge(
            "flex items-center gap-2 text-lg transition-all", // Changed this line
            _variant === "center-aligned" && "text-center",
            (_variant === "small" ||
              _variant === "medium" ||
              _variant === "large") &&
              "justify-start text-left w-full",
            showExpandedHeadline && isHeadlineExpandedVisible
              ? "opacity-0"
              : "opacity-100"
          )}
        >
          {_headlineElement}
        </div>

        <div
          id="trailing-actions"
          className={twMerge(
            "flex flex-row justify-center items-center gap-2",
            _variant === "center-aligned" && "flex-1 justify-end"
          )}
        >
          {_trailingElements}
        </div>

        {remainingElements}
      </div>
      {showExpandedHeadline && (
        <div
          id="headline-expanded"
          // @ts-ignore
          ref={headlineExpandedRef}
          className={twMerge(
            "flex flex-row text-left w-full px-4 pb-5",
            _variant === "medium" && "text-xl pt-2",
            _variant === "large" && "text-2xl pt-4"
          )}
        >
          {_headlineExpandedElement}
        </div>
      )}
    </>
  );
};

export default AppBar;
