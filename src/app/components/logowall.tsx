import Link from "next/link";
import Image from "next/image";

export default function LogoWall() {
    return (
        <div className="bg-gray-100 w-full grid grid-cols-5 m-auto items-center justify-center py-[72px]  sm:flex sm:flex-row">
            <LogoWallItems href="/" src="/static/logowall-official-gazette.png" />
            <LogoWallItems href="/" src="/static/logowall-dnd.png" />
            <LogoWallItems href="/" src="/static/logowall-afp.png" />
            <LogoWallItems href="/" src="/static/logowall-navy.png" className="col-start-1"/>
            <LogoWallItems href="/" src="/static/logowall-transparency-seal.png" />
        </div>
    )
}

interface LogoWallItemProps {
    src: string;
    href: string;
    className?: string;
}
export function LogoWallItems({ href, src, className }: LogoWallItemProps) {

    return (
        <Link className={`flex outline-none border-none transition-transform duration-300 ease-in-out justify-center hover:-translate-y-2 md:p-4.5 p-3 col-span-1 ${className}`} href={href}>
            <div className="relative h-24 w-24">
                <Image
                    src={src}
                    alt="Philippine Marine Corps"
                    fill
                    className="object-contain" />
            </div>
        </Link>
    )
}




