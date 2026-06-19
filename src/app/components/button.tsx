import { IconArrowNarrowRight, IconArrowRight, IconPlayerPlay } from "@tabler/icons-react";
import Link from "next/link";
import React, { Children } from "react";

interface ButtonProps {
    href: string;
    variant?: string;
    className?: string;
    children?: React.ReactNode;

}
export function Button({ href, variant, className, children }: ButtonProps) {
    return (
        <>
            <Link href={href} className={`gap-3 w-fit py-4 px-4 mb-5 text-white flex flex-row border justify-center items-center align-middle h-9.5 font-body font-medium hover:bg-primary-500 hover:border-primary-500 ${className}
        ${variant === "primary" ? "bg-accent-500 text-white font-semibold hover:bg-accent-300"
                    : variant === "ghost" ? "lg:h-15 h-12 px-8 lg:text-[14px] text-[12px] uppercase tracking-[1px] decorate-none border border-white-7 bg-white-1 transition-all duration-300 ease-in-out "
                        : variant === "profile" ?
                            "lg:h-9 px-4 h-6 text-[g] mt-3 w-auto bg-primary-600 font-normal mr-auto"
                            : variant === "secondary" ? "bg-none border-1 border-secondary-600 text-secondary-600! font-normal" : ""
                }`}>
                {children}
            </Link>
        </>
    )
}

export function ButtonArrow({ href, variant, className, children }: ButtonProps) {
    return (
        <>
            <Link href={href} className={`gap-2 w-fit py-4 px-4 text-white flex flex-row border justify-center items-center align-middle mt-3 h-9.5 font-body font-medium hover:text-white! ${className}
        ${variant === "primary" ? "bg-accent-500 text-white font-semibold hover:bg-accent-300"
                    : variant === "ghost" ? "lg:h-15 h-12 px-8 lg:text-[14px] text-[12px] uppercase tracking-[1px] decorate-none border border-white-7 bg-white-1 transition-all duration-300 ease-in-out "
                            : variant === "secondary" ? "bg-none border-1 border-secondary-600 text-secondary-500! font-normal hover:bg-secondary-500 hover:border-secondary-500 hover:text-white! " : ""
                }`}>
                {children}
                 <IconArrowNarrowRight className={` lg:w-6 lg:h-6 w-5 h-5 stroke-[1.5px]
                 `} />
            </Link>
        </>
    )
}