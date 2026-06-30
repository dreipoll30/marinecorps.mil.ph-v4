import { Avatar } from "@/app/components/avatar";
import { valors } from "@/app/components/data/heroes";
import MedalIcon from "@/app/components/icons/medal-icon";
import { Valor, ValorBadge, ValorCard, ValorCardDetails, ValorCardImage, ValorCardItem, ValorImage, ValorItem, ValorMini } from "@/app/components/valor";
import { DataStrong, VerticalDataGroup } from "@/app/components/data-group";

export function ValorHero() {
    return (
        <Valor>
            {valors.map((valor) => (
                <a href={`#${valor.slug}`} key={valor.id} className="cursor-pointer">
                    <ValorItem>
                        <ValorImage>
                            <ValorBadge>
                                <MedalIcon size={18} color="#ffffff" stroke={3} />
                            </ValorBadge>
                            <Avatar src={valor?.src ? valor.src : "/static/avatar.jpg"} variant="circle" className="border-3 w-11 h-11 sm:w-18 sm:h-18 md:h-27 md:w-27 border-red-500"
                            />
                        </ValorImage>
                        <VerticalDataGroup className="md:flex">
                            <DataStrong className="relative text-slate-600 text-center text-[12px] font-bold uppercase max-w-full">
                                {valor.name}
                            </DataStrong>
                        </VerticalDataGroup>
                    </ValorItem>
                </a>
            ))}

        </Valor>
    )
}

export function ValorCards() {
    return (
        <ValorCard>
            {valors.map((valor) => (
                <ValorCardItem key={valor.id} id={valor.slug} >
                    <ValorCardImage src={valor.src} />
                    <ValorCardDetails>
                        <h4 className="uppercase text-[18px] text-slate-800 mb-0">
                            {valor.name}<br />{valor.branch}
                        </h4>
                        {valor.stories?.map((v, index) => (
                            <p className="text-[18px] text-slate-600 mb-0" key={index}>{v}</p>
                        ))}
                    </ValorCardDetails>
                </ValorCardItem>
            ))}
        </ValorCard>
    )
}

interface ValorTopbarProps {
    scrolled?: boolean;
}
export function ValorTopbar({ scrolled }: ValorTopbarProps) {
    return (
        <ValorMini>
            <Valor className="w-full! max-w-full! m-0! py-3! mb-0!">
                {valors.map((valor) => (
                    <a key={valor.id} href={`#${valor.slug}`} className="cursor-pointer">
                        <ValorItem
                            className="w-auto! p-0 mx-1! sm:p-0! cursor-pointer! hover:translate-y-0!">
                            <ValorImage
                                className="w-9! h-9! transition-none! border-2! m-0! translate-0 sm:w-16! sm:h-16! sm:mb-0! cursor-pointer">
                                <Avatar
                                    src={valor.src ? valor.src : "/static/avatar.jpg"}
                                    variant="circle"
                                    className="border-2! w-8 h-8! sm:w-14! sm:h-14! border-red-500"
                                />
                            </ValorImage>
                        </ValorItem>
                    </a>
                ))}
            </Valor>
        </ValorMini>
    )
}