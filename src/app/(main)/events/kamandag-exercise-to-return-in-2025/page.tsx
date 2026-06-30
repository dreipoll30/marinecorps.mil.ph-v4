import { Poster, PosterWrapper, PosterSponsor, PosterSponsorHeader, PosterSponsorList, PosterSponsorItem, PosterHeader, PosterHeading, PosterSubheading, PosterBody, PosterBodyParagraph, PosterImage, PosterImageWrapper, PosterVideo, PosterVideoWrapper } from "@/app/components/poster";
import Image from "next/image";

export default function KamandagExercise() {
    return (
        <Poster variant="others">
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
                        Kamandag Exercise to Return in 2025
                    </PosterHeading>
                    <PosterSubheading>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Coming Soon
                            <br />
                            May 2025
                        </h2>
                    </PosterSubheading>
                </PosterHeader>
                <PosterBody>
                    <PosterBodyParagraph>
                        In a world where strength is forged through unity, two nations' marines stand firm, driven by purpose, bound by duty. This May 2025, the Kamandag exercise will return. Stay tuned, coming soon!
                    </PosterBodyParagraph>
                    <PosterVideo>
                        <PosterVideoWrapper>
                            <video
                                poster="/events/2025-05/kamandag-exercise-cover.png"
                                autoPlay={false}
                                playsInline
                                muted={true}
                                loop
                                controls>
                                <source
                                    src="/events/2025-05/kamandag-exercise.mp4"
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