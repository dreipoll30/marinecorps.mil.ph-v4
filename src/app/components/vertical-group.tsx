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

export function HorizontalDataGroup ({children, className}:VerticalDataGroupProps) {
    return (
        <div className={`flex flex-row items-center justify-center ${className}`}>{children}</div>
    )
}




interface DataStrongProps {
    children: ReactNode;
    className?: string;
}

export function DataStrong({children, className}:DataStrongProps) {
    return (
        <span className={`font-bold text-lg text-black justify-start w-full ${className}`}>{children}</span>
    )
}

export function Data({children, className}:{children: React.ReactNode, className?: string}) {
    return (
        <span className={`font-normal text-[18px] text-slate-500 justify-start w-full ${className}`}>{children}</span>
    )
}