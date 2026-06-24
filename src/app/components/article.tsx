import { ReactNode } from "react";


export function ArticleWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full">
            {children}
        </div>
    )
}

export function ArticleHead({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full gap-2.5 m-0">{children}</div>
    )
}

export function ArticleItemTitle({ children }: { children: ReactNode }) {
    return (
        <h3 className="font-body font-medium mb-0 text-dark text-[28px]">{children}</h3>
    )
}

export function ArticleItemDate({ children }: { children: ReactNode }) {
    return (
        <span className="uppercase text-[15px] font-medium text-yellow-600 tracking-wide leading-normal">{children}</span>
    )
}
export function ArticleAuthor({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row items-center w-auto gap-2.5">{children}</div>
    )
}

export function ArticleAuthorAvatar({ children }: { children: ReactNode }) {
    return (
        <div className={`flex w-11 h-11 overflow-hidden bg-gray-200 rounded-full `}>
            {children}
        </div>
    )
}

export function ArticleItemDetails({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full ">
            {children}
        </div>
    )
}

export function ArticleAuthorDetails({ children }: { children: ReactNode }) {
    return (
        <span className="flex flex-col w-full">
            {children}
        </span>
    )
}

export function ArticleAuthorName({ children }: { children: ReactNode }) {
    return (
        <span className="text-[16px] font-semibold text-dark ">
            {children}
        </span>
    )
}

export function ArticleAuthorRole({ children }: { children: ReactNode }) {
    return (
        <span className="text-[16px] text-slate-500 ">
            {children}
        </span>
    )
}

interface ArticleItemImage {
    src: string;
    alt: string;
}
export function ArticleItemImage({ src, alt }: ArticleItemImage) {
    return (
        <div className="relative w-full h-auto justify-center items-center bg-gray-200 rounded-sm">
            <img src={src} alt={alt} className="w-full h-auto block rounded-sm" />
        </div>
    )
}

export function ArticleItemBody({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full mt-6 ">
            {children}
        </div>
    )
}

export function ArticleItemBlock({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col w-full mt-9 p-0 sm:px-18 ">
            {children}
        </div>
    )
}






