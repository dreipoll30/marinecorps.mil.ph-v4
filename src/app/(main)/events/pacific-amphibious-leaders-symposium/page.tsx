import { Poster, PosterWrapper, PosterSponsor, PosterSponsorHeader, PosterSponsorList, PosterSponsorItem, PosterHeader, PosterHeading, PosterSubheading, PosterBody, PosterBodyParagraph, PosterImage, PosterImageWrapper, PosterVideo, PosterVideoWrapper } from "@/app/components/poster";
import Image from "next/image";

export default function PacificAmphibiousLeadersSymposium() {
    return (
        <Poster variant="symposium">
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
                        Pacific Amphibious Leaders Symposium 2025
                    </PosterHeading>
                    <PosterSubheading>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Monday
                            <br />
                            7 Jul 2025
                        </h2>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">-</h2>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Monday,
                            <br />
                            11 Jul 2025
                        </h2>
                    </PosterSubheading>
                </PosterHeader>
                <PosterBody>
                    <PosterBodyParagraph>
                        The Philippine Marine Corps with the United States Marine Corps, will co-host the conduct of the Pacific Amphibious Leaders Symposium (PALS) 2025. This has significant events focusing in strengthening the relationship and cooperation towards common interests that promote interoperability and stability in the Indo-Pacific Region.
                    </PosterBodyParagraph>
                    <PosterVideo>
                        <PosterVideoWrapper>
                            <video
                                poster="/events/2025-07-07/pacific-symposium-cover.png"
                                autoPlay={false}
                                playsInline
                                muted={true}
                                loop
                                controls>
                                <source
                                    src="/events/2025-07-07/july-event.mp4"
                                    type="video/mp4; codecs='av01.0.05M.08'; profiles='isom,av01,iso2,mp41'"
                                />
                                <source
                                    src="/events/2025-07-07/july-event.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </PosterVideoWrapper>
                    </PosterVideo>
                </PosterBody>
            </PosterWrapper>
        </Poster>
    )
}