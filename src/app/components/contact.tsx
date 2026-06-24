import { ReactNode } from "react";


interface ContentPanelProps {
    children: ReactNode;
    className?: string;
}

export function ContactDetails({ children, className }: ContentPanelProps) {
    return (
        <div className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11 mt-6 ${className}`}>
            {children}
        </div>
    )
}

export function ContactDetailsBlock({ children, className }: {children: ReactNode, className?: string} ) {
    return (
        <div className={`relative flex flex-col w-full col-span-1  ${className}`}>
            {children}
        </div>
    )
}