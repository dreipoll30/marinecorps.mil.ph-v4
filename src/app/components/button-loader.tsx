interface ButtonLoaderProps {
    title?: string;
    className?: string;
}

export function ButtonLoader({ title, className }: ButtonLoaderProps) {
    return (
        <svg
            height="16"
            width="16"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            className={`${className} fill-current`}
        >
            <title>{title}</title>
            <g className="animate-[spin_0.5s_linear_infinite] origin-center " >
                <path
                    d="M32 62a30 30 0 1 1 30-30 30.034 30.034 0 0 1-30 30zm0-55a25 25 0 1 0 25 25A25.028 25.028 0 0 0 32 7z"
                    className="opacity-40"
                />
                <path d="M62 32h-5A25.028 25.028 0 0 0 32 7V2a30.034 30.034 0 0 1 30 30z" />
            </g>
        </svg>
    )
}