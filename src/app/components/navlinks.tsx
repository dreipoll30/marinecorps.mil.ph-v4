import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

export function NavContainer({ children }: { children: ReactNode }) {
    return (
        <div className="flex gap-4">
            {children}
        </div>
    )
}


export function Navitem({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row mx-2.5 first:ml-0 last:mr-0 lg:gap-4 gap-2">
            {children}
        </div>
    )
}

interface NavLinksProps {
    href: string,
    children: ReactNode,
    scrolled?: boolean;
    className?: string
    secondary?: boolean;
}

export function NavLink({ href, children, scrolled, className, secondary }: NavLinksProps) {

    return (
        <Link
            href={href}
            className={`relative flex items-center justify-center h-full py-3.5
             ${secondary ? "pt-2 mt-[-1.5px] border-transparent border-t-3 hover:border-primary-500" : ""}
                ${className}
      `}
        >
            {children}
        </Link>
    )
}

interface DropdownItem {
    label: string;
    href: string;
}

interface NavDropdownProps {
    href: string;
    title: string;
    items: DropdownItem[];
    secondary?: boolean;
}

export function NavDropdown({ href, title, items, secondary = true }: NavDropdownProps) {
    return (
        <div className="relative group inline-block">
            <NavLink href={href} secondary={secondary}>
                {title}
                <IconChevronDown size={14} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </NavLink>
            <div className="absolute left-0 top-full hidden group-hover:block min-w-55 bg-white shadow-md shadow-t-md border border-gray-100 text-slate-800 overflow-hidden  pt-1 pb-1 text-left normal-case tracking-normal rounded-sm ">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block px-3 py-1 text-[15px] text-gray-700 font-medium font-body hover:bg-primary-500 hover:text-white transition-colors duration-150 border-b border-gray-50 last:border-0"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}