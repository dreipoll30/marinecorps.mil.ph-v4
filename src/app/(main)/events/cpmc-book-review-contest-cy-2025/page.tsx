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
                        CPMC’s Book Review Contest CY 2025
                    </PosterHeading>
                    <PosterSubheading>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Until 29 Aug 2025,
                            <br />
                            Friday
                        </h2>
                    </PosterSubheading>
                </PosterHeader>
                <PosterBody>
                    <PosterBodyParagraph>
                        Grab a book and let your words wander!
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        The Marine Corps Center for Leadership and Excellence (MCCLE) officially opens the CPMC’s Book Review
                        Contest this CY 2025. The books are set, and all that is missing is your review! Don’t miss the chance to
                        showcase your critical thinking and writing skills, and create your masterpiece.
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        This Book Review Contest is an auxiliary activity of the CPRL Program which aims to develop the
                        leadership, character, professional, and mental capacity of the PMC Personnel, CHR, and Marine Reservists,
                        equipping them with a mindset of being the MOST READY.
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        All PMC Personnel, including Civilian Human Resources and Marine reservists can join and may win cash
                        prizes! Submit your entries not later than 29 August 2025.{' '}
                    </PosterBodyParagraph>
                    <PosterBodyParagraph>
                        Scan the QR code for more details.
                    </PosterBodyParagraph>
                    <PosterImage>
                        <PosterImageWrapper>
                            <Image
                                src="/events/2025-08-29/book-review-contest-2025-cover.png"
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