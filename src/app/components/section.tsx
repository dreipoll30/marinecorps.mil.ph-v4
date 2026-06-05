import React, { ReactNode } from "react";

interface SectionHeadingProps {
    children?: ReactNode;
    title: string;
    className?: string

}
export function SectionHeading({ children, title, className }: SectionHeadingProps) {
    return (
        <div className="w-full relative flex flex-col flex-nowrap justify-center items-center pt-9  m-auto before:content-[''] before:absolute before:-top-1 before:left-1/2 before:-translate-x-1/2 before:w-22.5 before:h-1.5 before:bg-primary-500">
            <h1 className={"text-center mb-9 mx-32"}>{title}</h1>
            {children && (
                <Breadcrumbs>{children}</Breadcrumbs>
            )}
        </div>
    )
}

export function Breadcrumbs ({children}: {children:ReactNode}) {
    return (
        <div className="flex justify-center mt-2.5">{children}</div>
    )
}