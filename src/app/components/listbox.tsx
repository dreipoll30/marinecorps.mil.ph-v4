import { ReactNode } from "react";
import { HorizontalDataGroup } from "./data-group";

export function ListboxWrapper ({children, className}:{children: ReactNode, clasName?:string}) {
    return (
        <div className={`w-full flex flex-col m-0 p-0 rounded-sm border-1 border-gray-300 bg-white mb-6 last:mb-0 ${className}`}>
            {children}
        </div>
    )
}

export function ListboxItem ({children}:{children: ReactNode}) {
    return (
        <div className="flex w-full p-4.5 border-b border-gray-200 last:border-none ">
            {children}
        </div>
    )
}

export function ListboxImage ({children}:{children: ReactNode}) {
    return (
        <div className="flex justify-start shrink-0 w-25 h-auto mr-4.5 sm:mb-0">
            {children}
        </div>
    )
}

export function ListboxHeading ({children}:{children: ReactNode}) {
    return (
        <span className="w-full text-left font-medium text-[18px]">
            {children}
        </span>
    )
}