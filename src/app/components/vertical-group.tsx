import React, { ReactNode } from "react";

interface VerticalDataGroupProps {
    children: ReactNode;
    className?: string;
}
export function VerticalDataGroup ({children, className}:VerticalDataGroupProps) {
    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>{children}</div>
    )
}

export function DataStrong({children}:{children: React.ReactNode}) {
    return (
        <span className="font-bold text-lg text-black justify-start w-full">{children}</span>
    )
}

export function Data({children, className}:{children: React.ReactNode, className?: string}) {
    return (
        <span className={`font-normal text-[18px] text-slate-600 justify-start w-full ${className}`}>{children}</span>
    )
}