import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

function findSlotProp(
  children: React.ReactNode,
  slotName: string,
  findAll = false
) {
  const foundElements: React.ReactNode[] = [];

  // @ts-ignore
  function searchChildren(childrenArray: React.ReactNode) {
    for (let child of React.Children.toArray(childrenArray)) {
      // @ts-ignore
      if (child.props && child.props.slot === slotName) {
        if (!findAll) {
          return child; // Return the first found instance immediately
        }
        foundElements.push(child);
      }
      // @ts-ignore
      if (child.props && child.props.children) {
        // @ts-ignore
        const found = searchChildren(child.props.children);
        if (found && !findAll) {
          return found; // Return immediately if the first instance is found
        }
      }
    }
    return null; // Return null if no instance is found
  }

  const result = searchChildren(children);
  return findAll ? foundElements : result;
}

const AppBar = ({
  className,
  variant = null,
  leadingElements,
  headlineElement,
  headlineExpandedElement,
  trailingElements,
  children,
}: {
  className?: string;
  variant?: null | "center-aligned" | "small" | "medium" | "large";
  leadingElements?: any;
  headlineElement?: any;
  headlineExpandedElement?: any;
  trailingElements?: any;
  children?: React.ReactNode;
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

  console.log("showExpandedHeadline && isHeadlineExpandedVisible", showExpandedHeadline && isHeadlineExpandedVisible);

  useEffect(() => {
    let observer: IntersectionObserver;
    if (headlineExpandedRef?.current) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setIsHeadlineExpandedVisible(entry.isIntersecting);
          console.log("entry.isIntersecting", entry.isIntersecting);
        });
      });
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
          "w-full px-2 flex flex-row justify-between items-center gap-2 left-0 bg-background transition-all",
          showExpandedHeadline && isHeadlineExpandedVisible
            ? "pt-3 pb-0"
            : "py-3",
          className
        )}
      >
        <div
          id="leading-actions"
          className="flex flex-row justify-center items-center gap-2"
        >
          {_leadingElements}
        </div>

        <div
          id="headline"
          className={twMerge(
            "flex flex-row flex-1 w-full h-full items-center gap-2 text-lg transition-all",
            _variant === "center-aligned" && "justify-center text-center",
            (_variant === "small" || _variant === "medium") &&
              "justify-start text-left",
            showExpandedHeadline && isHeadlineExpandedVisible
              ? "opacity-0"
              : "opacity-100"
          )}
          style={{
            opacity: showExpandedHeadline && isHeadlineExpandedVisible
              ? "opacity-0"
              : "opacity-100"
          }}
        >
          {_headlineElement}
        </div>

        <div
          id="trailing-actions"
          className="flex flex-row justify-center items-center gap-2"
        >
          {_trailingElements}
        </div>
      </div>
      {showExpandedHeadline && (
        <div
          id="headline-expanded"
          // @ts-ignore
          ref={headlineExpandedRef}
          className={twMerge(
            "flex flex-row text-left w-full px-4 pb-5 bg-red-200",
            _variant === "medium" && "text-xl pt-1",
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
