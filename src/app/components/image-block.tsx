import React from "react"

interface ImageBlockProps {
    children: React.ReactNode;
    className?:string;
}
export function ImageBlock ({children, className}:ImageBlockProps) {
    return (
        <div className="relative w-full bg-gray-100 rounded-md h-auto flex p-8 mb-5">
            {children}
        </div>
    )
}

export function LogoImageItem ({children}: {children:React.ReactNode}) {
    return (
        <div className="w-full flex justify-center ">
            {children}
        </div>
    )
}