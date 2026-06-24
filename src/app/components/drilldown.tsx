import React from "react"

interface DrilldownProps {
    children: React.ReactNode,
    className?:string
}

export function Drilldown({ children, className }: DrilldownProps) {
    return (
        <div className={` flex flex-col flex-nowrap rounded-sm overflow-hidden w-full border border-gray-200 mb-[28px] ${className}`}>
            {children}
        </div>
    )
}

export function DrilldownHeading({ children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`flex flex-nowrap w-full py-3 px-4 bg-gray-50 ${className}`}>
            <h4 className="text-black-8 text-md mb-0 w-full">{children}</h4>
        </div>

    )
}

export function DrilldownBody ({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col flex-nowrap w-full">
            {children}
        </div>
    )
}

interface DrilldownListProps {
    children: React.ReactNode,
    className?:string
}

export function DrilldownList ({children, className}: DrilldownListProps) {
    return (
        <div className="w-full flex flex-col flex-nowrap">
            {children}
        </div>
    )
}


export function DrillDownListItem ({children}: {children: React.ReactNode}) {
    return (
        <div className=" w-full border-b border-gray-100 p-3 last:border-none">
            {children}
        </div>
    )
}