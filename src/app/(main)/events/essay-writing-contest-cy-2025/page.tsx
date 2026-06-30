import { Poster, PosterWrapper, PosterSponsor, PosterSponsorHeader, PosterSponsorList, PosterSponsorItem, PosterHeader, PosterHeading, PosterSubheading, PosterBody, PosterBodyParagraph, PosterImage, PosterImageWrapper } from "@/app/components/poster";
import Image from "next/image";

export default function EssayWritingContest() {
    return (
        <Poster variant="contest">
            <PosterWrapper>
                <PosterSponsor>
                    <PosterSponsorHeader>
                        Brought to you by
                    </PosterSponsorHeader>
                    <PosterSponsorList>
                        <PosterSponsorItem src="/events/2024-02-27/pmc-logo.png" />
                    </PosterSponsorList>
                </PosterSponsor>
                <PosterHeader>
                    <PosterHeading>
                        Essay Writing Contest CY 2025
                    </PosterHeading>
                    <PosterSubheading>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Until 30 May 2025,
                            <br />
                            Friday
                        </h2>
                    </PosterSubheading>
                </PosterHeader>
                <PosterBody>
                    <PosterBodyParagraph>
                        Get your pens ready as the Commandant’s Essay Writing Contest this CY 2025 is now officially open! This
                        year’s contest will revolve around the theme: “PMC L.E.A.D Mentoring Program: Inspiring Great Leaders, One
                        Marine at a Time”. This is an initiative designed to promote deeper understanding of the PMC L.E.A.D
                        Mentoring Program, and its role in shaping effective leadership within the organization.
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        This is open to all PMC Personnel, including Civilian Human Resources and Marine Reservists! This is your
                        chance to share your insights, experiences, and vision for leadership. Submit your entries not later than
                        30 May 2025 and stand a chance to win cash prizes!
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        Scan the QR code for the details.
                    </PosterBodyParagraph>
                    <PosterImage>
                        <PosterImageWrapper>
                            <Image
                                src="/events/2025-05-07/essay-contest-2025-cover.png"
                                alt="Philippine Marine Corps"
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />
                        </PosterImageWrapper>
                    </PosterImage>
                </PosterBody>
            </PosterWrapper>
        </Poster>
    )
}