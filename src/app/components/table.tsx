import React from "react"

export function Table({ children }: { children: React.ReactNode }) {
    return (
        <div className="block w-full overflow-x-auto">
            <table className="table-auto w-full border-collapse min-w-5xl">
                {children}
            </table>
        </div>
    )
}

export function TableRow({ children }: { children: React.ReactNode }) {
    return (
        <tr className="border-b last:border-none">
            {children}
        </tr>
    )
}

interface TableSectionRowProps {
    children: React.ReactNode;
    colSpan: number; 
    className?: string;
}
export function TableSectionRow({ children, colSpan, className }: TableSectionRowProps) {
    return (
        <tr className="bg-gray-100 border-y border-slate-200 sticky top-0 backdrop-blur-md z-10">
            <td colSpan={colSpan} className={`py-2.5 font-heading px-3 text-left text-[14px] text-slate-800 ${className}`}>
                {children}
            </td>
        </tr>
    )
}

interface TableHeaderProps {
    children: string;
    className?: string;
}

export function TableHeader({ children, className }: TableHeaderProps) {
    return (
        <th className={`px-3 py-2 text-left text-[12px] whitespace-nowrap font-bold uppercase text-slate-400 border-b tracking-wide border-gray-100  ${className}`}>
            {children}
        </th>
    )
}

interface TableDataProps {
    children: React.ReactNode;
    className?: string;
    rowSpan?: number;
}
export function TableData({ children, className, rowSpan }: TableDataProps) {
    return (
        <td rowSpan={rowSpan} className={`py-2 px-3 text-left text-md font-normal text-gray-600 ${className}`}>
            <p className="mb-0">{children}</p>
        </td>
    )
}

export function TableHead({ children, className}: { children: React.ReactNode, className?: string }) {
    return (
        <thead className={` ${className}`}>
            {children}
        </thead>
    )
}

export function TableBody({ children }: { children: React.ReactNode }) {
    return (
        <tbody className="divide-y divide-gray-100">
            {children}
        </tbody>
    )
}

