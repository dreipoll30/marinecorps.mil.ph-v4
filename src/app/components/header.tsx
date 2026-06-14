import { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col flex-nowrap w-full h-screen lg:h-215 p-0 bg-gray-100 transition-all ease-in-out duration-200">
            <HeaderWrapper>
                {children}
            </HeaderWrapper>
        </div>
    )
}

export function HeaderWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full max-w-full h-full m-auto p-0 overflow-hidden min-w-0">
            {children}
        </div>
    )
}

export function HeaderSlides({ children }: { children: ReactNode }) {
    return (
        <div className="relative block w-full h-full overflow-hidden min-w-0">
            {children}
        </div>
    )
}

interface HeaderContextProps {
    className?: string;
    children: React.ReactNode;
}
export function HeaderContext({ className, children }: HeaderContextProps) {
    return (
        <div className={`absolute bottom-0 left-0 z-8 flex flex-col flex-nowrap justify-end w-full h-full p-6 sm:p-9 lg:w-[45%] md:w-[50%] lg:p-[62px] ${className}`}>
            {children}
        </div>
    );
}

export function HeaderImage({ children }: { children: ReactNode }) {
    return (
        /* Replicating the double-scrim dark gradient background from your SCSS */
        <div className="z-1 relative block w-full h-full overflow-hidden transition-all duration-200 ease-in-out
                        before:content-[''] before:absolute before:inset-0 before:z-2 before:w-full before:h-full before:bg-linear-to-b before:from-[#101419] before:via-transparent before:to-[#1f2937]
                        after:content-[''] after:absolute after:inset-0 after:z-3 after:w-full after:h-full after:bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%27 height=%27199%27 viewBox=%270 0 100 199%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.03%27%3E%3Cpath d=%27M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z%27%3E%3C/path%3E%3C/g%3E%3C/svg%3E')]">
            {children}
        </div>
    )
}

export function HeaderInfo({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full mb-15 lg:max-w-150 *:my-1.5 md:*:my-3 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {children}
        </div>
    )
}

/* FIX: Absolute thumbnail frame matching container limits */
export function HeaderThumbnail({ children }: { children: ReactNode }) {
    return (
        <div className="hidden absolute top-auto right-0 bottom-0 left-auto h-55 lg:flex lg:flex-col flex-nowrap lg:w-[40%] lg:max-w-180 lg:right-9 lg:bottom-9 xl:right-15.5 xl:bottom-15.5">
            {children}
        </div>
    )
}

export function HeaderThumbnailTitle({ children }: { children: ReactNode }) {
    return (
        <div className="absolute -top-7.5 xl:-top-10 z-3 left-0 right-0 w-full">
            <h3 className="text-[16px] xl:text-[20px] uppercase text-white tracking-[1px] word-spacing-[3px]">
                {children}
            </h3>
        </div>
    )
}

export function HeaderThumbnailInfo({ children }: { children: ReactNode }) {
    return (

        <div className="z-3 absolute top-auto right-0 left-0 bottom-0 flex justify-end w-full p-3 transition-all duration-200 ease-in-out overflow-hidden
                        before:content-[''] before:absolute before:top-5 before:right-12 before:w-full before:h-px before:bg-white/30">
            <h3 className="text-[20px] text-white font-medium leading-none mb-0">
                {children}
            </h3>
        </div>
    )
}

export function HeaderThumbnailImage({ children }: { children: ReactNode }) {
    return (
        /* Replicating the scale(2) photo override on the inner images layout elements from your scss code */
        <div className="z-1 relative block w-full h-full overflow-hidden transition-all duration-200 ease-in-out 
                        before:content-[''] before:absolute before:inset-0 before:z-2 before:bg-linear-to-t before:from-[#111827] before:to-transparent before:opacity-100" >
            {children}
        </div>
    )
}

export function HeaderInside({ children }: { children: ReactNode }) {
    return (
        <div className="relative h-[300px] overflow-hidden lg:h-[500px]">
            {children}
        </div>
    )
}

export function HeaderInsideWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="relative flex flex-col flex-nowrap h-full ">
            {children}
        </div>
    )
}

export function HeaderInsideImage({ children }: { children: ReactNode }) {
    return (
        <div className="z-1 before:content-[''] before:bg-gradient-to-b before:from-[#101419]/80 before:to-transparent after:hidden">
            {children}
        </div>
    )
}


