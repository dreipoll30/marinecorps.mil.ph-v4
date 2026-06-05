import { ReactNode } from "react"
import { Button } from "./button"
import Image from "next/image"
import { IconArrowNarrowRight, IconArrowRight } from "@tabler/icons-react"

export default function Invitation() {
    return (
        <>
            <div className="relative flex flex-col flex-nowrap w-full h-auto bg-[#dc2626]">
                <div className="bg-svg-pattern absolute inset-0 opacity-10 pointer-events-none" />
                    <InvitationWrapper>
                        <InvitationContext>
                        <h1 className="text-center text-white mb-1! text-[37.5px]">MOST READY</h1>
                            <p className="text-[18px] text-white-8 text-center ">
                                <strong>M</strong>aritime Soul, <strong>O</strong>ccupational Health and Safety, <strong>S</strong>
                                pecialized Forces, <strong>T</strong>raining as a routine grind. <strong>R</strong>elevant and
                                Reliable, <strong>E</strong>thos and Enthusiasm, <strong>A</strong>daptive, <strong>D</strong>uty to
                                God Country and People, <strong>Y</strong>
                                ield to the interest of the Corps.
                            </p>
                            <Button variant="ghost" href={""} className="uppercase flex m-auto items-center mb-0!">
                                Join The Force
                                <IconArrowNarrowRight className="w-6 h-6 text-white" />
                            </Button>
                        </InvitationContext>
                    </InvitationWrapper>
                </div>

        </>
    )
}

export function InvitationWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex w-full max-w-full m-auto py-18">
            {children}
        </div>
    )
}


export function InvitationContext({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col flex-nowrap w-full max-w-190 m-auto px-6">
            {children}
        </div>
    )
}  