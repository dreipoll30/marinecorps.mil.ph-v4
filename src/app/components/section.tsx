import React, { ReactNode } from "react";

interface SectionHeadingWrapperProps {
    children?: ReactNode;
    className?: string

}
export function SectionHeadingWrapper({ children, className }: SectionHeadingWrapperProps) {
    return (
        <div className={`w-full relative flex flex-col flex-nowrap justify-center items-center pt-9 m-auto before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-22.5 before:h-1.5 before:bg-primary-500  ${className}`}>
            {children}
        </div>
    )
}

interface SectionHeadingProps {
    children?: ReactNode;
    className?: string;
    title: string;

}
export function SectionHeading({ children, className, title }: SectionHeadingProps) {
    return (
        <>
            <h1 className={`text-center mx-32 lg:text-[38px] text-[32px] w-full ${className}`}>{title}</h1>
            {children && (
                <Breadcrumbs>{children}</Breadcrumbs>
            )}
        </>
    )
}

export function Breadcrumbs({ children }: { children: ReactNode }) {
    return (
        <div className="flex justify-center mt-2.5">{children}</div>
    )
}

