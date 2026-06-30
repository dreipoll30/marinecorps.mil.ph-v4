import React, { ReactNode } from "react";
import { VerticalDataGroup } from "./data-group";
import Link from "next/link";

export function EventsWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="w-full grid grid-cols-6 gap-6">
            {children}
        </div>
    )
}

interface EventItemProps {
    children?: ReactNode;
    gradientClass?: string;
    href: string;
}
export function EventItem({ children, gradientClass,href }: EventItemProps) {
    return (
        <Link href={href} className={`group relative col-span-6 w-full h-67.5 max-h-100 lg:col-span-3 bg-linear-to-br ${gradientClass} rounded-md overflow-hidden cursor-pointer `}>
            {children}
        </Link>
    )
}



export function EventDetails({ children }: { children: ReactNode }) {
    return (
        <div className="z-2 absolute bottom-0 right-0 left-0 w-full p-6">
            <VerticalDataGroup>
                {children}
            </VerticalDataGroup>
        </div>
    )
}

export function EventDate({ children }: { children: ReactNode }) {
    return (
        <span className="w-full text-[12px] font-medium uppercase tracking-[2px] text-primary-400">{children}</span>
    )
}

export function EventTitle({ children }: { children: ReactNode }) {
    return (
        <span className="w-full text-[18px] font-heading text-white mt-2 hover:text-white-8">{children}</span>
    )
}

export function EventImage ({ children }: { children: ReactNode }) {
    return (
        <div className="z-0 relative flex justify-center items-center w-full h-full duration-200 ease-in-out transforn group-hover:scale-105">
            {children}
             <div className={`absolute inset-0 z-20 w-full h-full bg-linear-to-t from-black/80 to-transparent opacity-100 transition-all duration-200 ease-in-out `} />
        </div>
    )
}

export function EventStatus ({children, status}: {children?: ReactNode, status: string}) {
    return (
        <span className="absolute top-6 left-6 right-0 py-1 px-2 text-[11px] uppercase text-white font-medium rounded-full w-fit bg-black tracking-widest">{status}</span>
    )
}