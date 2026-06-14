import React from "react";

export function Content ({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap w-full py-9 xs:py-[48px] sm:py-[72px]">{children}</div>
    )
}

export function ContentWrapper ({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap w-full max-w-300 mx-auto">{children}</div>
    )
}