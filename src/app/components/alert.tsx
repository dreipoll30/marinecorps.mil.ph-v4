import { ReactNode } from "react"

interface AlertProps {
    children?: ReactNode;
    message: string;
}

export function Alert ({children, message}:AlertProps) {
    return (
        <div className="w-full p-6 mb-5 bg-secondary-50/90 text-secondary-500 text-[18px]">
            <span className="font-medium ">Note: </span>{message}
        </div>
    )
}