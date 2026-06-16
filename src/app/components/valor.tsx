"use client"

import { HTMLAttributes, ReactNode, useEffect, useState } from "react";

export function Valor({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`flex flex-row flex-wrap justify-center items-start w-full max-w-200 m-auto mb-6 transition-all ease-in-out duration-200 
        ${className}`}>
            {children}
        </div>
    )
}

interface ValorItem {
    children: ReactNode;
    className: string;
}

export function ValorItem({ children, className, ...props}: ValorItem) {
    return (
        <div className={`inline-flex flex-col justify-center items-center w-auto px-1 py-0.5 bg-none border-none cursor-pointer p-3 hover:-translate-y-2 transition sm:w-30 sm:p-3 md:w-40 ${className}`} {...props}>
            {children}
        </div>
    )
}

// interface ValorImageProps {
//     src: string;
//     href: string;
//     children?: ReactNode
// }

export function ValorImage({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`relative flex justify-center items-center w-13 h-13 rounded-full mb-0  bg-white transition-all ease-in-out duration-200 border-3 border-blue-700 sm:w-20 sm:h-20 sm:mb-4.5 md:w-30 md:h-30 ${className}`}>
            {children}
        </div>
    )
}

export function ValorBadge({ children }: { children: ReactNode }) {
    return (
        <div className="z-2 flex absolute justify-center items-center w-8 h-8 rounded-full bg-yellow-500 border-2 border-white -bottom-4 left-[50%] -translate-x-[50%] transition-all ease-in-out duration-200 sm:inline-flex">
            {children}
        </div>
    )
}

interface ValorCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function ValorCard({ children, ...props }: ValorCardProps) {
    return (
        <div className="flex flex-col flex-nowrap w-full" {...props}>
            {children}
        </div>
    )
}

interface ValorCardItemProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function ValorCardItem({ children, ...props }: ValorCardItemProps) {
    return (
        <div className="flex flex-col w-full p-6 border border-gray-200 rounded-sm last:mb-0 bg-gray-50 mb-6 sm:flex-row sm:p-9 scroll-mt-44 sm:scroll-mt-32 lg:scroll-mt-46" {...props}>
            {children}
        </div>
    )
}

interface ValorCardImageProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    src: string;
}
export function ValorCardImage({ children, src }: ValorCardImageProps) {
    return (
        <div className="inline-flex shrink-0 w-18 h-18 rounded-full bg-gray-300 mr-0 mb-6 overflow-hidden sm:mr-9">
            <img src={src} alt="Marine Corps Philippines" className="block w-full h-auto" width="200" height="200" />
        </div>
    )
}

export function ValorCardDetails({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col shrink grow w-full gap-5">
            {children}
        </div>
    )
}

export function ValorMini({ children }: { children: ReactNode }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 800);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`z-4 fixed top-40 left-0 right-0 flex justify-center w-full m-auto bg-white rounded-sm shadow-md transition-all ease-in-out duration-200 sm:top-28 sm:left-9 sm:right-9 lg:top-38 max-w-275 
        ${scrolled
                ? "opacity-100 visible -translate-y-5"
                : "opacity-0 invisible translate-y-"
            }`}>
            {children}
        </div>
    )
}

