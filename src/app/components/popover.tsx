"use client";

import { Popover as HeadlessPopover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

export default function Popover({
  title,
  children,
}: {
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <HeadlessPopover className="relative">
      <HeadlessPopover.Button
        className="
          flex
          items-center
          justify-center
          w-full
          h-full
          focus:outline-none
        "
      >
        {title}
      </HeadlessPopover.Button>

      <Transition
        as={Fragment}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <HeadlessPopover.Panel
          className="
            absolute
            left-1/2
            top-full
            z-10
            mt-2
            w-80
            -translate-x-1/2
          "
        >
          {children}
        </HeadlessPopover.Panel>
      </Transition>
    </HeadlessPopover>
  );
}