import Link from "next/link"
import React, { ReactNode } from "react"

export function Social({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col lg:flex-row flex-nowrap justify-between">
            {children}
        </div>
    )
}

export function SocialMenu({ children }: { children: ReactNode }) {
    return (
        <div className="inline-flex flex-row shrink-0 grow-0 w-auto m-0 items-center">
            {children}
        </div>
    )
}

interface SocialMenuItemProps {
    href: string;
    label: string;
     className?: string;
}

export function SocialMenuItem({ href, label, className}: SocialMenuItemProps) {
    return (
        <Link className="flex h-11 w-11 mr-4.5 last:mr-0 bg-secondary-100/80 items-center justify-center rounded-full "
            href={href}
            target="_blank"
            aria-label={label}
        >
            <i className={`text-lg! text-red-600! ${className}`}/>
        </Link>
    )
}

interface TopbarSocialMenuItemProps {
    href: string;
    label: string;
    className?: string;
    scrolled?: boolean;
}


export function TopbarSocialMenuItem({ href, label, className, scrolled}: TopbarSocialMenuItemProps) {
    return (
        <Link className={`flex h-6.5 w-6.5 mr-2.5 last:mr-0 justify-center items-center rounded-full ${scrolled ? "bg-secondary-100" : "bg-gray-100/20"} `}
            href={href}
            target="_blank"
            aria-label={label}
        >
            <i className={`text-sm! ${scrolled ? "text-secondary-500!":"text-white!"} ${className}`}/>
        </Link>
    )
}
