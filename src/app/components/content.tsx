import React, { ReactNode } from "react";

export function Content({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full py-9 sm:py-12 md:py-18">{children}</div>
    )
}

export function ContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full max-w-300 mx-auto px-9">{children}</div>
    )
}

interface ContentPanelProps {
    children: ReactNode;
    className?: string;
    reverse?: boolean;
}

export function ContentPanel({ children, className, reverse}: ContentPanelProps) {
    return (
        <div className={`w-full grid grid-cols-1 gap-11 md:gap-18 mb-16 md:grid-cols-2 ${reverse ? "[&>*:first-child]:order-2 [&>*:last-child]:order-1" : ''} ${className}`}>
            {children}
        </div>
    )
}

export function ContentPanelBlock({ children, className }: { children: React.ReactNode, className?: string}) {
    return (
        <div className={`relative flex flex-col col-span-1 justify-center w-full h-full my-3 last:mb-0 ${className}`}>
            {children}
        </div>
    )
}

export function ImageCaption({ children }: { children: React.ReactNode }) {
    return (
        <div className="z-2 absolute bottom-8 -left-6 w-75 p-6 h-auto uppercase text-white bg-secondary-500 border-b-2 border-white">{children}</div>
    )
}

export function JoinImageCaption({ children }: { children: React.ReactNode }) {
    return (
        <div className="z-2 absolute bottom-10 -left-6 w-80 p-6 h-auto  text-white bg-secondary-500 border-b-2 border-white">{children}</div>
    )
}