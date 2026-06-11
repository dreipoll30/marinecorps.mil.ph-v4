import Link from "next/link";
import Image from "next/image";

export default function LogoWall() {
    return (
        <div className="bg-gray-100 w-full lg:flex lg:flex-row lg:flex-nowrap grid grid-cols-6 lg:justify-center lg:p-18 py-9 px-6 m-auto">
            <LogoWallItems href="/" src="/static/logowall-official-gazette.png" />
            <LogoWallItems href="/" src="/static/logowall-dnd.png" />
            <LogoWallItems href="/" src="/static/logowall-afp.png" />
            <LogoWallItems href="/" src="/static/logowall-navy.png" className="col-start-2"/>
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
        <Link className={`col-span-2 inline-flex outline-none border-none transition-transform duration-300 ease-in-out justify-center hover:-translate-y-2 lg:p-6 p-3 ${className}`} href={href}>
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




