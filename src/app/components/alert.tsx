import { ReactNode } from "react"

interface AlertProps {
    children?: ReactNode;
    message: string;
    color?: string;
}

export function Alert ({children, message, color}:AlertProps) {
    return (
        <div className="w-full p-6 mb-5 bg-secondary-50/90 text-secondary-500 text-[18px]">
            <span className="font-medium ">Note: </span>{message}
        </div>
    )
}

interface ContactAlertProps {
    children?: ReactNode;
    message: string;
    color?: string;
}

export function ContactAlert ({children, message, color}:AlertProps) {
    return (
        <div className={`relative flex flex-row items-start mb-6 p-6] bg-sky-50 
        ${color === "red" ? "bg-red-50 text-red-600" : ""}
        `}>
           {children}
        </div>
    )
}