import React from "react";
import { Drawer } from "vaul";
import { twMerge } from "tailwind-merge";
import { findSlotProp, removeSlotProps } from "../utils";

type BottomSheetProps = {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange: (open: boolean) => void;
  showHandle?: boolean;
  variant?: "standard" | "modal";
  children: React.ReactNode;
};

export const BottomSheet: React.FC<BottomSheetProps> = ({
  showHandle = null,
  variant = "standard",
  children,
  ...props
}) => {
  const _titleElement = findSlotProp(children, "title");
  const _contentElements = findSlotProp(children, "content", true);
  const remainingElements = removeSlotProps(children, ["title", "content"]);

  const _showHandle = showHandle
    ? showHandle
    : variant === "modal"
      ? true
      : false;

  return (
    <Drawer.Root {...props}>
      <Drawer.Portal>
        <Drawer.Overlay
          className={twMerge(
            variant === "modal" ? "fixed inset-0 bg-black/40" : "",
            "!z-[999999]"
          )}
        />
        <Drawer.Content
          className={`fixed inset-x-0 bottom-0 m-auto mt-24 flex w-full flex-col overflow-hidden !rounded-t-[2rem] bg-zinc-100 px-6 sm:max-w-screen-sm sm:px-14`}
        >
          {_showHandle && (
            <div className="w-12 h-1.5 rounded-full bg-zinc-300 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center mx-auto mt-6 mb-2" />
          )}
          {_contentElements?.length || _titleElement ? (
            <div className={twMerge("p-4 flex-1", !_showHandle && "pt-8")}>
              <div className="max-w-md mx-auto">
                {_titleElement && <Drawer.Title>{_titleElement}</Drawer.Title>}
                {_contentElements}
              </div>
            </div>
          ) : (
            <></>
          )}
          {remainingElements}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
