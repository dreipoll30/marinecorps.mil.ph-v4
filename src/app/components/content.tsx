import React from "react";

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

export function ContentPanel({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full grid grid-cols-1 gap-14  md:grid-cols-2">
            {children}
        </div>
    )

}

export function ContentPanelBlock({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col col-span-1 justify-center w-full h-full my-3 last:mb-0">
            {children}
        </div>
    )

}

export function ImageCaption({ children }: { children: React.ReactNode }) {
    return (
        <div className="z-2 absolute top-130 -left-10 w-75 p-6 h-auto uppercase text-white bg-secondary-500 border-b-2 border-white">{children}</div>
    )
}