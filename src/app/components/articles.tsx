import { ReactNode } from "react";
import { VerticalDataGroup } from "./vertical-group";
import Link from "next/link";

export function Articles({ children }: { children: ReactNode }) {
    return (
        <div className="w-full grid grid-cols-6 gap-6">
            {children}
        </div>
    )
}

interface ArticleItemProps {
    children: ReactNode;
    className?: string;
    href:string;
}


export function ArticleItem({ children, className, href }:ArticleItemProps) {
    return (
        <Link className={`group relative col-span-6 w-full h-67.5 max-h-100 md:col-span-3 lg:col-span-2 bg-gray-400 rounded-md overflow-hidden cursor-pointer ${className}`} href={href} >
            {children}
        </Link>
    )
}


export function ArticleIDetails({ children }: { children: ReactNode }) {
    return (
        <div className="z-2 absolute bottom-0 right-0 left-0 w-full p-6">
            <VerticalDataGroup>
                {children}
            </VerticalDataGroup>
        </div>
    )
}

export function ArticleDate({ children }: { children: ReactNode }) {
    return (
        <span className="w-full text-[12px] font-medium uppercase tracking-[2px] text-primary-400">{children}</span>
    )
}

export function ArticleTitle({ children, className }: { children: ReactNode, className?:string }) {
    return (
        <span className="text-center w-full text-[18px] font-heading text-white mt-2 hover:text-white-8">{children}</span>
    )
}

export function ArticleImage ({ children }: { children: ReactNode }) {
    return (
        <div className="z-2 relative flex justify-center items-center w-full h-full duration-200 ease-in-out transforn group-hover:scale-105">
            {children}
             <div className={`absolute inset-0 z-20 w-full h-full bg-linear-to-t from-black/80 to-transparent opacity-100 transition-all duration-200 ease-in-out `} />
        </div>
    )
}

export function GalleryImage ({ children, className }: { children: ReactNode, className?:string }) {
    return (
        <div className={`z-1 relative flex justify-center items-center w-full h-auto duration-200 ease-in-out transforn group-hover:scale-105 ${className}`}>
            {children}
             <div className={`absolute inset-0 z-20 w-full h-full bg-linear-to-t from-slate-900/90 to-slate-900/20 opacity-100 transition-all duration-200 ease-in-out `} />
        </div>
    )
}

interface GalleryItemProps {
    children: ReactNode;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}


export function GalleryItem({ children, className, onClick }:GalleryItemProps) {
    return (
        <div className={`group relative col-span-6 w-full h-67.5 max-h-100 md:col-span-3 lg:col-span-2 bg-gray-400 rounded-md overflow-hidden cursor-pointer ${className}`} onClick={onClick}>
            {children}
        </div>
    )
}