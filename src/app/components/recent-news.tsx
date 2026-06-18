import React, { ReactNode } from "react"
import { journals } from "./data/journal"
import Link from "next/link";
import Image from 'next/image';
import { SectionHeading } from "./section";
import { Button } from "./button";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function RecentNews() {
    return (
        <div className="flex flex-col flex-nowrap w-full h-auto p-0  lg:h-[700px]">
            <StoriesWrapper>
                <StoriesGrid>
                    {journals.map((journal, index) => {
                        const isFirst = index === 0;
                        return (
                            <StoriesGridItem
                                isFirst={isFirst}
                                key={journal.id}
                                href={`/`}
                            >
                                <div className={`z-20 w-full absolute top-0 left-0 ml-6 mt-3 flex flex-col justify-start items-start sm:ml-9 sm:mt-6 ${isFirst ? 'block' : 'hidden'}`}>
                                    <SectionHeading className="text-left mx-0! pt-9 text-white" title="Recent Stories" />
                                </div>
                                <StoriesDetails>
                                    <StoriesDate>{journal.date_posted}</StoriesDate>
                                    <StoriesTitle isFirst={isFirst}>{journal.title}</StoriesTitle>
                                    {isFirst && (
                                        <Button variant='ghost' href='/' className="py-8 my-3!">
                                            Continue Reading
                                            <IconArrowNarrowRight className="lg:w-6 lg:h-6 w-5 h-5 text-white" />
                                        </Button>
                                    )}
                                </StoriesDetails>
                                <StoriesImage>
                                    {journal.cover_image ? (
                                        <img
                                            src={journal.cover_image}
                                            alt={journal.alt || "Cover"}
                                            className="w-full h-full object-cover object-[center_top]"
                                        />
                                    ) : (
                                        <Image
                                            src={journal.cover_image}
                                            alt={journal.alt || "Cover"}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            className="object-[center_top]"
                                        />
                                    )}

                                    {/* Overlay: Pseudo ::before (Gradient base overlay scaling down on hover) */}
                                    <div className="absolute inset-0 z-20 w-full h-full bg-linear-to-t from-[#111827] to-transparent opacity-75 transition-all duration-200 ease-in-out group-hover:opacity-50 group-hover:from-[#111827] group-hover:via-transparent/0" />

                                    {/* Overlay: Pseudo ::after (Top down filter layer fading down slightly on hover) */}
                                    <div className="absolute inset-0 z-20 w-full h-full bg-linear-to-b from-[#111827] to-transparent opacity-25 transition-all duration-200 ease-in-out group-hover:opacity-20" />
                                </StoriesImage>

                            </StoriesGridItem>
                        )
                    })}
                </StoriesGrid>
            </StoriesWrapper>
        </div>
    )
}

export function StoriesWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full max-w-full h-full mx-auto p-0">{children}</div>
    )
}

export function StoriesGrid({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full sm:grid sm:grid-cols-[60%_40%] sm:grid-rows-[50%_50%] sm:grid-flow-col sm:gap-px sm:h-full sm:overflow-hidden">{children}</div>
    )
}

interface StoriesGridItemProps {
    href: string;
    className?: string;
    children: ReactNode;
    isFirst: boolean;
}

export function StoriesGridItem({ href, className, children, isFirst }: StoriesGridItemProps) {
    return (
        <div className={`group relative flex flex-col flex-nowrap justify-center items-center w-full bg-gray-300 overflow-hidden transition-all duration-200 ${isFirst ? 'h-[800px] min-[577px]:h-auto min-[577px]:col-start-1 min-[577px]:row-span-2' : 'h-50 border-b border-white min-[577px]:h-auto min-[577px]:border-none'}`} >{children}</div>
    )
}

export function StoriesDetails({ children }: { children: ReactNode }) {
    return (
        <div className={`z-20 absolute bottom-0 right-0 left-0 w-full p-6 min-[577px]:p-9 min-[1201px]:w-[70%] flex flex-col`}>{children}</div>
    )
}

export function StoriesDate({ children }: { children: ReactNode }) {
    return (
        <span className="text-md font-semibold text-primary-500 uppercase tracking-[2px] my-[12px]">{children}</span>
    )
}

export function StoriesTitle({ children, isFirst }: { children: ReactNode, isFirst: boolean }) {
    return (
        <div className={`font-normal mb-3 text-white font-heading no-underline leading-[1.3] transition-colors hover:text-white/80 ${isFirst ? 'text-[22px] min-[577px]:text-[26px] ' : 'text-[18px] min-[577px]:text-[22px]'}`}>
            {children}
        </div>
    )
}

export function StoriesImage({ children }: { children: ReactNode }) {
    return (
        <div className="absolute inset-0 z-10 block w-full h-full overflow-hidden transition-all duration-200 ease-in-out transform group-hover:scale-105">
            {children}
        </div>
    )
}
