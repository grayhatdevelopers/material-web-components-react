"use client";
import React, { ReactNode, useState } from "react";

import Button from "../button/index.js";
import Icon from "../icon/index.js";
import IconButton from "../icon-button/index.js";

import { ToastOptions, toast } from "react-hot-toast";
import { useSwipeable } from "react-swipeable";
import { twMerge } from "tailwind-merge";

import { Toaster, ToasterProps } from "react-hot-toast";

export type SnackbarProviderProps = ToasterProps
export const SnackbarProvider = (props: SnackbarProviderProps) => {
    return (
        <>
            <Toaster {...props} />
            {props.children}
        </>
    )
}

export type SnackbarProps = {
  icon?: React.ReactNode;
  variant?: string;
  children: React.ReactNode;
  showClose?: boolean;
  onAction?: () => void;
  onClose?: () => void;
  actionText?: string;
};

export const Snackbar = ({
  icon,
  variant,
  children,
  showClose,
  onAction,
  onClose,
  actionText,
}: SnackbarProps) => {
  const [translateX, setTranslateX] = useState(0);
  const [isSwiped, setIsSwiped] = useState(false);

  // Handle swipe
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setTranslateX(eventData.deltaX); // Update the translateX value dynamically
      if (Math.abs(eventData.deltaX) > 100) {
        setIsSwiped(true); // Swipe threshold for dismissing
      } else {
        setIsSwiped(false); // Swipe threshold for dismissing
      }
    },
    onSwiped: (eventData) => {
      if (Math.abs(eventData.deltaX) > 100) {
        setIsSwiped(true); // Swipe threshold for dismissing
        setTimeout(() => {
          onClose?.();
        }, 300); // Delay to allow animation to complete
      } else {
        setTranslateX(0); // Reset if swipe is not sufficient
        setIsSwiped(false); // Swipe threshold for dismissing
      }
    },
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  const _showClose = showClose || !actionText;
  const _variant = variant
    ? variant
    : (actionText?.length ?? 0) > 10 || actionText?.includes(" ")
    ? "extended"
    : "standard";
  const useLongerAction = _variant === "extended";

  return (
    <div
      {...handlers}
      style={{
        transform: `translateX(${translateX}px)`, // Dynamically apply the translation
        opacity: isSwiped ? 1 - Math.abs(translateX / (384 / 2)) : 1, // Fade out when dismissed
        transition:
          translateX === 0
            ? "all 0.5s"
            : "transform 0.02s linear, opacity 0.1s linear",
      }}
      className={twMerge(
        "relative font-regular flex items-start gap-x-5 justify-evenly rounded-md bg-[#313033] py-4 pl-5 pr-3 text-[#F4EFF4] shadow-lg text-sm min-w-80 sm:min-w-96 max-w-96 w-screen transition-all",
        useLongerAction ? "flex-col" : "flex-row",
        isSwiped ? "opacity-0" : "opacity-100"
      )}
    >
      {icon && <span className="text-white">{icon}</span>}
      <span
        className={twMerge("flex flex-1 flex-wrap", useLongerAction && "pr-10")}
      >
        {children}
      </span>
      <div
        className={twMerge(
          useLongerAction ? "w-full flex-1" : "w-fit",
          "flex flex-row justify-end items-center gap-3"
        )}
      >
        {actionText && (
          <Button
            onClick={() => {
              onAction?.();
              onClose?.();
            }}
            variant="text"
            id="action"
          >
            {actionText}
          </Button>
        )}
      </div>
      {_showClose && (
        <IconButton
          className={twMerge(useLongerAction && "absolute top-2 right-2")}
          onClick={onClose}
        >
          <Icon>close</Icon>
        </IconButton>
      )}
    </div>
  );
};

const showSnackbar = (
  message: string | ReactNode,
  options?: ToastOptions & Partial<SnackbarProps>
) => {
  const _options = options;
  const { icon, style = {}, ...toastOptions } = _options || {};
  const toastId = toast(
    <Snackbar
      showClose={_options?.showClose}
      onClose={() => {
        toast.dismiss(toastId);
      }}
      {...toastOptions}
    >
      {message}
    </Snackbar>,
    {
      position: "bottom-center",
      style: {
        padding: "0rem 1rem",
        margin: 0,
        boxShadow: "none",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...style,
      },
      icon,
      ...toastOptions,
    }
  );

  return toastId;
};

// @ts-expect-error
const snackbar: typeof toast & {
  show: (
    // eslint-disable-next-line no-unused-vars
    message: string | ReactNode,
    // eslint-disable-next-line no-unused-vars
    options?: ToastOptions & Partial<SnackbarProps>
  ) => void;
} = toast;
snackbar.show = showSnackbar;

export { snackbar };
