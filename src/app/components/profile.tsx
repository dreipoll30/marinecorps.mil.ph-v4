import React, { ReactNode } from "react";

export function Profile({children}:{children: React.ReactNode}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] w-full">{children}</div>
    )
}

interface ProfileItemProps {
    children: React.ReactNode;
    className?: string;
}

export function ProfileItem({children, className}:ProfileItemProps) {
    return (
        <div className={`flex flex-col flex-nowrap w-full rounded-md first:lg:col-span-2 bg-gray-100 ${className}`}>{children}</div>
    )
}


export function ProfileCard({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-row flex-nowrap w-full h-full rounded-md overflow-hidden">{children}</div>
    )
}

interface ProfileImageProps {
    children?: ReactNode;
    src: string;
    alt: string;

}
export function ProfileCardImage({children, src, alt}:ProfileImageProps) {
    return (
        <div className="relative flex flex-col-nowrap justify-center shrink-0 w-35 items-center bg-gray-200">
            <img src={src} alt={alt} className="block w-full h-auto" />
        </div>
    )
}

export function ProfileCardDetails({children}:{children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap justify-center grow px-4.5 py-3">{children}</div>
    )
}



