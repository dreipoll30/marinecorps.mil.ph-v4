import Link from "next/link";
import Image from "next/image";

export default function LogoWall() {
    return (
        <div className="bg-gray-100 w-full flex flex-row flex-nowrap justify-center py-18 m-auto">
            <LogoWallItems href="/" src="/static/logowall-official-gazette.png" />
            <LogoWallItems href="/" src="/static/logowall-dnd.png" />
            <LogoWallItems href="/" src="/static/logowall-afp.png" />
            <LogoWallItems href="/" src="/static/logowall-navy.png" />
            <LogoWallItems href="/" src="/static/logowall-transparency-seal.png" />
        </div>
    )
}

interface LogoWallItemProps {
    src: string;
    href: string;
}
export function LogoWallItems({ href, src }: LogoWallItemProps) {

    return (
        <Link className="inline-flex outline-none border-none transition-transform duration-300 ease-in-out hover:-translate-y-2 p-6" href={href}>
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




