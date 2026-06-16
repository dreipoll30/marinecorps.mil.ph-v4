import { ReactNode } from "react";

interface AvatarProps {
    src?: string;
    variant: string;
    children?: ReactNode;
    className?: string;
}

export function Avatar({ src, variant, children, className }: AvatarProps) {
    return (
        <div className={`relative flex shrink-0 items-center justify-center w-8 h-8 overflow-hidden text-sm font-medium uppercase decoration-0 text-white bg-gray-400  ${className}
        ${variant === "circle" ? "rounded-full" :
                variant === "xs" ? "w-4.5 h-4.5" : ""
            }
        `}>
            <img src={src} alt="" className="block w-full align-bottom" />
        </div>
    )
}