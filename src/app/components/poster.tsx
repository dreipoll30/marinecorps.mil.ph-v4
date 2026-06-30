import { ReactNode } from "react";

interface PosterProps {
    className?: string;
    children: ReactNode;
    gradientClass?: string;
    variant?: 'symposium' | 'contest' | 'others';
}

export function Poster({ className, children, variant }: PosterProps) {

    return (
        <div className={`w-full min-h-screen flex flex-col p-5 bg-bottom sm:p-12.5 bg-fixed bg-no-repeat bg-cover
        `}>
            <div className="fixed inset-0 z-5 pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,1)_25%,rgba(0,0,0,0)_100%)]" />
            <div className={`fixed inset-0 z-10 opacity-85 pointer-events-none
        ${variant === "symposium" ? " bg-[linear-gradient(146deg,rgba(220,38,38,1)_0%,rgba(251,146,60,1)_50%,rgba(253,224,71,1)_100%)]" :
                    variant === "contest" ? "bg-[linear-gradient(145deg,rgba(13,39,81,1)_0%,rgba(0,89,179,1)_45%,rgba(102,178,255,1)_100%)]" :
                        variant === "others" ? "bg-[linear-gradient(145deg,rgba(0,51,34,1)_0%,rgba(0,128,55,1)_45%,rgba(144,238,144,1)_100%)]" :
                            ""
                }
      `} />
            {children}
        </div>
    )
}

export function PosterWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="z-20 flex flex-col w-full max-w-300 m-auto">
            {children}
        </div>
    )
}

export function PosterSponsor({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-center w-auto p-7.5 gap-5 bg-poster">
            {children}
        </div>
    )
}

export function PosterSponsorHeader({ children }: { children: ReactNode }) {
    return (
        <span className="text-[12px] uppercase tracking-[3px] text-white">{children}</span>
    )
}

export function PosterSponsorList({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row w-auto gap-5">{children}</div>
    )
}

interface PosterSponsorItemProps {
    src: string;
    alt?: string;
    children?: ReactNode
}
export function PosterSponsorItem({
    children,
    src,
    alt = "Philippine Marine Corps",
}: PosterSponsorItemProps) {
    return (
        <div className="flex justify-center items-center h-20 sm:h-25">
            <img src={src} alt={alt} className="w-auto h-full block" />
        </div>
    )
}

export function PosterHeader({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col md:flex-row gap-10 border-y border-white/50">
            {children}
        </div>
    )
}

export function PosterHeading({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full pt-7.5 pb-2.5 md:w-[60%] md:py-7.5">
            <h1 className="text-white font-body mb-0 text-[40px] leading-none font-bold md:text-[60px]">
                {children}
            </h1>
        </div>
    )
}

export function PosterSubheading({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col justify-center pb-7.5 gap-2.5 md:w-[40%] pl-7.5 pt-7.5 border-l border-white/50">
            {children}
        </div>
    )
}

export function PosterBody({ children }: { children: ReactNode }) {
    return (
        <div className=" mt-5 w-full flex flex-col m-auto">
            {children}
        </div>
    )
}

export function PosterBodyParagraph({ children }: { children: ReactNode }) {
    return (
        <p className="text-[16px] text-gray-200 mb-0 first:mt-0 mt-5">
            {children}
        </p>
    )
}

export function PosterImage({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col h-auto border border-gray-300/80 bg-poster rounded-xl md:p-5 md:mt-10">
            {children}
        </div>
    )
}

export function PosterImageWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-row justify-center items-center overflow-hidden w-full h-full border-none bg-none align-bottom aspect-15/8 rounded-xl">
            {children}
        </div>
    )
}

export function PosterVideo({ children }: { children: ReactNode }) {
    return (
        <div className="w-full flex flex-col h-auto border border-white/50 bg-poster rounded-xl md:p-5 md:mt-10">
            {children}
        </div>
    )
}

export function PosterVideoWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="block align-bottom w-full rounded-xl overflow-hidden bg-black">
            {children}
        </div>
    )
}

export function Timeline({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full max-w-200 m-auto mt-10">
            {children}
        </div>
    )
}

export function TimelineSegmentGroup({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full mb-7.5">
            {children}
        </div>
    )
}

export function TimelineSegmentHead({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row w-full pl-16 mb-2.5 ">
            {children}
        </div>
    )
}

export function TimelineDate({ children }: { children: ReactNode }) {
    return (
        <span className="flex text-[12px] px-3 py-1.5 rounded-[20px] uppercase tracking-[1px] font-semibold text-white bg-white/15">
            {children}
        </span>
    )
}

export function TimelineSegment({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row w-full">
            {children}
        </div>
    )
}


export function TimelineSegmentTime({ children }: { children?: ReactNode }) {
    return (
        <div className="flex w-25 py-4 ">
            <span className="flex text-[16px] font-semibold text-white">{children}</span>
        </div> 
    )
}

export function TimelineDetails({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col w-full border-l border-white/50 ">
            {children}
        </div> 
    )
}

export function TimelineTitle({ children }: { children: ReactNode }) {
    return (
        <span className=" flex text-[18px] font-semibold text-white mb-1 before:content-[''] before:absolute before:top-5 before:-left-[7px] before:w-3.5 before:h-3.5 before:rounded-full before:bg-white">
            {children}
        </span> 
    )
}

export function HostGroup({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col md:flex-row w-full gap-4 ">
            {children}
        </div> 
    )
}

export function Host ({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row items-center gap-1.25">
            {children}
        </div> 
    )
}

export function HostAvatar ({ children }: { children: ReactNode }) {
    return (
        <div className="flex shrink-0 w-[38px] h-[38px] rounded-full bg-white border-2 border-white overflow-hidden">
            {children}
        </div> 
    )
}

export function HostDetails ({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-[2px] opacity-[0.7] leading-4">
            {children}
        </div> 
    )
}

export function HostName ({ children }: { children: ReactNode }) {
    return (
        <span className="flex text-[14px] w-auto text-white">
            {children}
        </span> 
    )
}







