import React from "react";

export function Content ({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap w-full py-9 sm:py-12 md:py-18">{children}</div>
    )
}

export function ContentWrapper ({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap w-full max-w-300 mx-auto px-9">{children}</div>
    )
}