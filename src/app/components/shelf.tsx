import { ReactNode } from "react";
import { Button } from "./button";
import Image from 'next/image';
import Link from "next/link";

export function Shelf({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full h-auto py-9 px-[24px] lg:py-18 md:py-12 bg-white bg-svg-pattern">
            {children}
        </div>
    )
}

export function ShelfWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap justify-center w-full max-w-full h-full m-auto items-center">
            {children}
        </div>
    )
}

export function ShelfBlock({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full max-w-350 bg-svg-pattern">
            {children}
        </div>
    )
}

export function ShelfSlides({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full ">
            {children}
        </div>
    )
}

export function ShelfSlide({ children, className }: { children: ReactNode, className?:string }) {
    return (
        <div className={`z-3 relative flex flex-col flex-nowrap w-full max-h-135 rounded-xl bg-none overflow-hidden shadow-[0_10px_20px_0_rgba(0,0,0,0.4)]  ${className}`}>
            {children}
        </div>
    )
}

export function ShelfSlideTag({ children }: { children: ReactNode }) {
    return (
        <Button variant="ghost" href="">
            {children}
        </Button>
    )
}

interface ShelfSlideImageProps {
    src: string;
    alt: string;

}

export function ShelfSlideImage({ src, alt }: ShelfSlideImageProps) {
    return (
        <div className="relative flex w-full h-auto  ">
            <Image src={src} alt={alt} width={1000} height={800} className="object-cover " />
        </div>
    )
}

interface ShelfSlideDetailsProps {
    title: string;
    issue?: string
    className?:string;
    children?: ReactNode;
}

export function ShelfSlideDetails({ title, issue, className, children }: ShelfSlideDetailsProps) {
    return (
        <div className={`absolute bottom-0 right-0 left-0 flex flex-col flex-nowrap items-center justify-end w-full h-full px-6 py-2 gap-6  bg-linear-to-b from-black/5  to-black ${className}`}>
            <h2 className="text-white text-center text-[20px] mb-0">
                {title}
            </h2>
            {issue && (
                <h3 className="text-[12px] uppercase text-primary-500 text-center">
                    {issue}
                </h3>
            )}
            {children}  
        </div>
    )
}

interface ShelfSlideDownloadButtonProps {
    href: string;
    className?: string;
    children?: React.ReactNode;

}
export function ShelfSlideDownloadButton({ href, className, children }: ShelfSlideDownloadButtonProps) {
    return (
        <Link
            target="_blank"
            href={href}
            className={`gap-3 w-fit mb-5 text-white flex flex-row border justify-center items-center align-middle  font-body font-medium h-12 px-6 text-[14px] uppercase tracking-[1px] decorate-none border-white-7 bg-white-1 transition-all duration-300 ease-in-out hover:bg-primary-500 hover:border-primary-500 leading-3.5 ${className}`}>
            Download PDF
        </Link>
    )
}


export function ShelfCollection ({ children }: { children: ReactNode }) {
    return (
        <div className="w-full grid grid-cols-6 gap-9">{children}</div>
    )
}

export function ShelfItem ({children}:{children: ReactNode}) {
    return (
        <div className="col-span-6 md:col-span-3 lg:col-span-2 shadow-xl"> {children}</div>
    )
}

