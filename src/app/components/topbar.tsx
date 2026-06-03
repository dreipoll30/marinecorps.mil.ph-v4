"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";


interface TopbarMenuProps {
    toggleMenu: () => void;
}


export default function Topbar({ toggleMenu }: TopbarMenuProps) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`w-full text-center z-50 fixed top-0 right-0 flex h-auto transition-all ease-in duration-100  ${scrolled ? "bg-white shadow-md py-4 lg:pl-9 md:pl-8 pl-8" : "bg-transparent py-9 lg:pl-8.5 md:pl-8 pl-8 "} `}>
            <TopbarWrapper>
                <TopbarHeaderWrapper>
                    <TopbarBrand
                        src={scrolled ? "/static/pmc-logo.png" : "/static/pmc-logo-large.png"}
                        href="/"
                        alt="DOTr-MRT3_Logo"
                    />
                    <TopbarHeading scrolled={scrolled}>
                        Philippine Marine Corps
                    </TopbarHeading>
                </TopbarHeaderWrapper>

                <TopbarPanels>
                    <TopbarPanel variant="primary" scrolled={scrolled}>
                        <NavContainer>
                            <Navitem>
                                <NavLink href="/contact-us">Contact Us</NavLink>
                                <NavLink href="/careers" >Credits</NavLink>
                            </Navitem>
                        </NavContainer>
                    </TopbarPanel>
                    <TopbarPanel variant="secondary" scrolled={scrolled}>
                        <NavContainer>
                            <Navitem>
                                <NavLink href="/transparency" secondary={true}>Home</NavLink>
                                <NavLink href="/bids-and-awards" secondary={true}>Explore Marines
                                    <IconChevronDown size={14} className="ml-1" />
                                </NavLink>
                                <NavLink href="/citizen-charter" secondary={true}>News
                                    <IconChevronDown size={14} className="ml-1" />
                                </NavLink>
                                <NavLink href="/gad" secondary={true}>Join the Marine Corps
                                    <IconChevronDown size={14} className="ml-1" /></NavLink>
                                <NavLink href="/lost-and-found" secondary={true}>Transparency Seal</NavLink>
                            </Navitem>
                        </NavContainer>
                    </TopbarPanel>
                </TopbarPanels>
                <button
                    onClick={toggleMenu}
                    className={`block sm:hidden cursor-pointer p-2 transition-colors duration-150 rounded focus:outline-none ${scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"
                        }`}
                    aria-label="Open Menu"
                >
                    <IconMenu2 size={30} />
                </button>
            </TopbarWrapper>
        </div>
    )
}

export function TopbarWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row justify-between items-center w-full h-full ">
            {children}
        </div>
    )
}

interface TopbarHeadingProps {
    children: ReactNode;
    scrolled: boolean;
}

export function TopbarHeaderWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="w-full gap-2 flex flex-row items-center">
            {children}
        </div>
    )
}

export function TopbarHeading({ children, scrolled }: TopbarHeadingProps) {
    return (
        <h1 className={`flex items-center text-3xl mb-0 font-medium ${scrolled ? "text-slate-800" : "text-white"}`} >
            {children}
        </h1>
    )
}

interface TopbarBrandProps {
    src: string;
    href: string;
    alt?: string; // Optional, defaults to "Logo"

}


export function TopbarBrand({ src, href, alt }: TopbarBrandProps) {
    return (
        <div className="lg:w-33 md:w-25 w-15 h-full   ">
            <Link href={href}>
                <Image
                    src={src}
                    alt={alt || "Logo"}
                    width={214}
                    height={310}
                    className="block w-full"
                />
            </Link>
        </div>
    )
}

export function TopbarPanels({ children }: { children: ReactNode }) {
    return (
        <div className="hidden sm:flex flex-col flex-nowrap shrink-0 grow">
            {children}
        </div>
    )
}

interface TopbarPanelProps {
    children: ReactNode;
    variant: string;
    scrolled: boolean;
}

export function TopbarPanel({ children, variant, scrolled }: TopbarPanelProps) {
    const base = "w-full flex items-center justify-end  border-white/20 pr-[36px]";

    const primaryStyles = scrolled
        ? "py-3"
        : "text-white py-3";

    const secondaryStyles = scrolled
        ? "border-t border-t-gray-200 "
        : "border-t-[0.5px] border-t-gray-300 text-white";
    return (
        <div
            className={`
                ${base}
                ${variant === "primary" ? `${primaryStyles} font-body shrink-0 lg:text-[16px] text-sm font-normal  text-slate-600 ` : ""}
                ${variant === "secondary" ? `${secondaryStyles} font-heading shrink-0 tracking-[1.1px] text-[11px]  md:text-[13px]! lg:text-[18px]! font-medium text-black-8` : ""}
            `}
        >
            {children}
        </div>
    )
}

export function NavContainer({ children }: { children: ReactNode }) {
    return (
        <div className="flex">
            {children}
        </div>
    )
}


export function Navitem({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row mx-2.5 first:ml-0 last:mr-0 lg:gap-6 gap-4">
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
            className={`relative flex items-center justify-center h-full p-0 
             ${secondary ? "pt-2 mt-[-1.5px] border-transparent border-t-3 hover:border-primary-500" : ""}
                }
                ${className}
      `}
        >
            {children}
        </Link>
    )
}

// export function MobileMenuButton () {
//     return(
//         <div className="inline-flex">

//         </div>
//     )
// }