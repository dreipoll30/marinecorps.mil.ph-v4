import React, { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Social, SocialMenu, SocialMenuItem } from "./socials"
import { IconBrandFacebook } from "@tabler/icons-react"

export const navigationData = [
    {
        id: 1,
        heading: "About",
        links: [
            {
                id: 1,
                title: "History",
                href: "/about/history",
            },
            {
                id: 2,
                title: "Leader's Corner",
                href: "/about/leaders-corner",
            },
            {
                id: 3,
                title: "The Commandants",
                href: "/about/the-commandants",
            },
            {
                id: 4,
                title: "Marine Generals",
                href: "/about/marine-generals",
            },
            {
                id: 5,
                title: "Sergeants Major",
                href: "/about/sergeants-major",
            },
            {
                id: 6,
                title: "Wall of Heroes",
                href: "/about/wall-of-heroes",
            },
            {
                id: 7,
                title: "Ranks and Insignia",
                href: "/about/ranks-and-insignia",
            },
            {
                id: 8,
                title: "Marine Forces",
                href: "/about/marine-forces",
            },
        ],
    },
    {
        id: 2,
        heading: "News",
        links: [
            {
                id: 1,
                title: "Marine Journal",
                href: "/news/marine-journal",
            },
            {
                id: 2,
                title: "Events",
                href: "/news/events",
            },
            {
                id: 3,
                title: "CITEMAR6",
                href: "/news/citemar6",
            },
            {
                id: 4,
                title: "Gender and Development",
                href: "/news/gender-and-development",
            },
        ],
    },
    {
        id: 3,
        heading: "Join the Marine Corps",
        links: [
            {
                id: 1,
                title: "Volunteer as a Marine",
                href: "/join/volunteer-as-a-marine",
            },
            {
                id: 2,
                title: "Join Civilian Workforce",
                href: "/join/civilian-workforce",
            },
            {
                id: 3,
                title: "Volunteer as Reservist",
                href: "/join/volunteer-as-reservist",
            },
        ],
    },
];

export default function Footer() {
    return (
        <div className="relative w-full flex flex-col flex-nowrap h-auto py-9  md:py-18 bg-svg-pattern">
            <FooterWrapper>
                <FooterGridContainer>
                    <FooterGridItem className="lg:col-span-6 md:col-span-4">
                        <FooterBrandItems>
                            <FooterBrand src="/static/pmc-logo.png" href="" alt="" />
                            <h2 className="text-secondary-600 lg:text-[28px] text-[22px] mb-0">Philippine Marine Corps</h2>
                        </FooterBrandItems>
                    </FooterGridItem>
                    <FooterGridItem className="lg:col-span-6 md:col-span-8">
                        <FooterBlock className="border-b">
                            <Social>
                                <h3 className="text-[22px] mb-0 text-center">Stay Connected</h3>
                                <SocialMenu>
                                    <SocialMenuItem href="" label="Visit" className="icon icon-logo-facebook" />
                                    <SocialMenuItem href="" label="Visit" className="icon icon-logo-twitter" />
                                    <SocialMenuItem href="" label="Visit" className="icon icon-logo-youtube" />
                                </SocialMenu>
                            </Social>
                        </FooterBlock>
                        <FooterBlock className="pt-9 border-b">
                            <FooterMenu>
                                {navigationData.map((nav) => (
                                    <FooterMenuGroup key={nav.id}>
                                        <FooterMenuGroupHeading >
                                            {nav.heading}
                                        </FooterMenuGroupHeading>
                                        <Navlinks>
                                            {nav.links.map((n) => (
                                                <NavlinksItem key={n.id} >
                                                    <NavlinksLink href={n.href}>{n.title}</NavlinksLink>
                                                </NavlinksItem>
                                            ))}
                                        </Navlinks>
                                    </FooterMenuGroup>
                                ))}
                            </FooterMenu>
                        </FooterBlock>
                        <FooterBlock className="pt-9 pb-0!">
                            <p className="lg:text-left text-center mb-0! text-lg text-gray-600">© 2025 Official Philippine Marine Corps Website</p>
                        </FooterBlock>
                    </FooterGridItem>
                </FooterGridContainer>
            </FooterWrapper>
        </div>
    )
}

export function FooterWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="relative lg:pl-9 px-[24px] w-full">
            {children}
        </div>
    )
}

export function FooterGridContainer({ children }: { children: ReactNode }) {
    return (
        <div className="relative w-full grid grid-cols-12 gap-6">
            {children}
        </div>
    )
}

export function FooterGridItem({ children, className }: { children: ReactNode, className?:string }) {
    return (
        <div className={`relative lg:col-span-6 col-span-12 ${className}`}>
            {children}
        </div>
    )
}

export function FooterBlock({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <div className={`lg:col-span-6 col-span-12 relative flex flex-col flex-nowrap lg:pr-9 pb-9 border-gray-200 ${className}`}>
            {children}
        </div>
    )
}

export function FooterBrandItems({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col lg:flex-row gap-2 flex-nowrap  justify-center items-center text-center lg:justify-normal">
            {children}
        </div>
    )
}

interface FooterBrandProps {
    children?: React.ReactNode;
    href: string;
    alt: string;
    src: string;

}

export function FooterBrand({ children, href, alt, src }: FooterBrandProps) {
    return (
        <Link href={href}>
            <div className="relative md:w-33 w-28 h-31 flex items-center">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>
        </Link>
    )
}

export function FooterMenu({ children }: { children: ReactNode }) {
    return (
        <div className="sm:grid sm:grid-cols-6 gap-6 flex flex-col py-3 ">
            {children}
        </div>
    )
}

export function FooterMenuGroup({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full flex-nowrap sm:col-span-3 md:col-span-2  ">
            {children}
        </div>
    )
}

export function FooterMenuGroupHeading({ children }: { children: ReactNode }) {
    return (
        <h2 className="text-[20px] sm:text-left text-center block mb-0 w-full">
            {children}
        </h2>
    )
}

export function Navlinks({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col nowrap w-full mt-3">
            {children}
        </div>
    )
}

export function NavlinksItem({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex items-center py-0.75">
            {children}
        </div>
    )
}

interface NavlinksLinkProps {
    children: React.ReactNode;
    href: string;
}
export function NavlinksLink({ children, href }: NavlinksLinkProps) {
    return (
        <Link className="block w-full m-0 text-gray-500 decoration-0 text-center sm:text-left text-[18px] hover:text-secondary-500" href={href}>
            {children}
        </Link>
    )
}


