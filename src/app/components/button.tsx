import { IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import React, { Children } from "react";

interface ButtonPops {
    href: string;
    variant?: string;
    className?: string;
    children?: React.ReactNode;

}
export function Button({ href, variant, className, children}: ButtonPops) {
    return (
        <Link href={href} className={`gap-3 w-fit py-4 px-4 mb-5 text-white flex flex-row border justify-center items-center align-middle h-9.5 font-body font-medium ${className}
        ${variant === "primary" || variant === "secondary" ? "bg-accent-500 text-white font-semibold hover:bg-accent-300"
                : variant === "ghost" ? "h-15 px-8 text-[14px] uppercase tracking-[1px] decorate-none border border-white-7 bg-white-1 transition-all duration-300 ease-in-out"
                    : ""}`}>
            {children}
        </Link>
    )
}