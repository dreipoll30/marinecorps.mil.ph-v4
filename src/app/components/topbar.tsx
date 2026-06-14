"use client"

import Link from "next/link"
import { ReactNode, useEffect, useState } from "react"
import Image from "next/image";
import { IconMenu2 } from "@tabler/icons-react";
import { SocialMenu, TopbarSocialMenuItem } from "./socials";
import { NavContainer, Navitem, NavLink, NavDropdown } from "./navlinks";


interface TopbarMenuProps {
    toggleMenu: () => void;
}

export default function Topbar({ toggleMenu }: TopbarMenuProps) {

    const exploreMarinesItems = [
        {
            label: "History",
            href: "/explore/history"
        },
        {
            label: "Leader's Corner",
            href: "/leaders"
        },
        {
            label: "Marine Generals",
            href: "/explore/bases"
        },
        {
            label: "Sergeant Major",
            href: "/explore/bases"
        },
        {
            label: "Marine Heroes",
            href: "/explore/bases"
        },
        {
            label: "Ransk and Insignia",
            href: "/explore/bases"
        },
        {
            label: "Marine Forces",
            href: "/explore/bases"
        },

    ];

    const newsItems = [
        {
            label: "Marine Journal",
            href: "/news/latest"

        },
        {
            label: "Events",
            href: "/Gender and Development"

        },
        {
            label: "CITEMAR6",
            href: "/news/gallery"

        },
        {
            label: "Virtual Information",
            href: "/news/gallery"

        },
    ];

    const joinItems = [
        {
            label: "Volunteer as a Marine",
            href: "/careers/officers"

        },
        {
            label: "Join the Civilian Workforce",
            href: "/careers/enlisted"

        },
        {
            label: "Volunteer as Reservist",
            href: "/careers/enlisted"

        },
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className={`w-full text-center z-50 fixed top-0 right-0 flex h-auto transition-all ease-in duration-100  ${scrolled ? "bg-white shadow-md py-3 lg:pl-9 md:pl-8 pl-8" : "bg-transparent py-9 lg:pl-8.5 md:pl-8 pl-8 "} `}>
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
                            <SocialMenu>
                                <TopbarSocialMenuItem className="icon icon-logo-facebook" href="" label="" scrolled={scrolled} />
                                <TopbarSocialMenuItem className="icon icon-logo-twitter" href="" label="" scrolled={scrolled} />
                                <TopbarSocialMenuItem className="icon icon-logo-youtube" href="" label="" scrolled={scrolled} />
                            </SocialMenu>
                        </NavContainer>
                    </TopbarPanel>
                    <TopbarPanel variant="secondary" scrolled={scrolled}>
                        <NavContainer>
                            <Navitem>
                                <NavLink href="/" secondary={true}>Home</NavLink>
                                <NavDropdown
                                    title="Explore Marines"
                                    href="/"
                                    items={exploreMarinesItems}
                                />
                                <NavDropdown
                                    title="News"
                                    href="/citizen-charter"
                                    items={newsItems}
                                />
                                <NavDropdown
                                    title="Join the Marine Corps"
                                    href="/gad"
                                    items={joinItems}
                                />
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
        <h1 className={`flex items-center text-[28px] mb-0 font-medium ${scrolled ? "text-slate-800" : "text-white"}`} >
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
        ? ""
        : "text-white";

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



// export function MobileMenuButton () {
//     return(
//         <div className="inline-flex">

//         </div>
//     )
// }