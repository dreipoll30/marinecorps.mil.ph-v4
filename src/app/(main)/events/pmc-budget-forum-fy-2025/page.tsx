import { budgetDetails } from "@/app/components/data/budgetForum";
import { Host, HostAvatar, HostDetails, HostGroup, HostName, Poster, PosterBody, PosterBodyParagraph, PosterHeader, PosterHeading, PosterSponsor, PosterSponsorHeader, PosterSponsorItem, PosterSponsorList, PosterSubheading, PosterWrapper, Timeline, TimelineDate, TimelineDetails, TimelineSegment, TimelineSegmentGroup, TimelineSegmentHead, TimelineSegmentTime, TimelineTitle } from "@/app/components/poster";
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
                        Philippine Marine Corps Budget Forum FY 2025
                    </PosterHeading>
                    <PosterSubheading>
                        <h2 className="font-semibold text-[28px] m-0 leading-[1.1] font-body text-white">
                            Wednesday,
                            <br />
                            27 Feb 2024, 0900H
                        </h2>
                        <h3 className="text-[20px] leaing-[1.2] m-0 font-body opacity-[0.7] text-white">
                            Headquarters Philippine Marine Corps Conference Room
                        </h3>
                    </PosterSubheading>
                </PosterHeader>
                <PosterBody>
                    <PosterBodyParagraph>
                        The office of Assistant Chief of Marine Staff for Financial Management, MC10 intends to conduct a two (2) day blended scheme Budget Forum on 27 - 28 February 2024. This forum will serve as ground for personnel who are engaged in Financial Management operations to refresh themselves on the three-year budget cycle calendar. The identified attendees of the Budget Forum will be key officers of Marine units who are involved in the formulation, planning, programming and implementation of the budget for the year. This activity will also set the tone to guide the PMC in the execution of the current year APB as well as in the preparation of FY2025 budget proposal.
                    </PosterBodyParagraph>
                    <Timeline>
                        {budgetDetails.map((detail, index) => (
                            <TimelineSegmentGroup key={index}>
                                <TimelineSegmentHead>
                                    <TimelineDate>{detail.date}</TimelineDate>
                                </TimelineSegmentHead>
                                {detail.timeline.map((timeline, index) => (
                                    <TimelineSegment key={index}>
                                        <TimelineSegmentTime>
                                            {timeline.time}
                                        </TimelineSegmentTime>
                                        <TimelineDetails>
                                            {timeline.items.map((item, index) => (

                                                <div className="w-full py-[15px] pl-4 sm:pl-10" key={index}>
                                                    <TimelineTitle>{item.title}</TimelineTitle>
                                                    <HostGroup>
                                                        {item.personnel.map((person, index) => (
                                                            <Host key={index}>
                                                                <HostAvatar>
                                                                    <Image
                                                                        src={person.src}
                                                                        alt="Philippine Marine Corps"
                                                                        width="100"
                                                                        height="100"
                                                                    />
                                                                </HostAvatar>
                                                                <HostDetails>
                                                                    <HostName>
                                                                        {person.name}
                                                                    </HostName>
                                                                    <HostName>
                                                                        {person.role}
                                                                    </HostName>
                                                                </HostDetails>

                                                            </Host>
                                                        ))}
                                                    </HostGroup>
                                                </div >
                                            ))}

                                    </TimelineDetails>
                                    </TimelineSegment>
                        ))}

                    </TimelineSegmentGroup>
                        ))}

                </Timeline>
            </PosterBody>
        </PosterWrapper>
        </Poster >
    )
}

{/* <TimelineSegmentGroup>
    <TimelineSegmentHead>
        <TimelineDate>Day 1 - 27 Feb 2024</TimelineDate>
    </TimelineSegmentHead>
    <TimelineSegment>
        <TimelineSegmentTime>
            0900H
        </TimelineSegmentTime>
        <TimelineDetails>
            <TimelineTitle>Overview of DSOM</TimelineTitle>
            <HostGroup>
                <Host>
                    <HostAvatar>
                        <Image
                            src="/events/2024-02-27/avatar-rudelyn.png"
                            alt="Philippine Marine Corps"
                            width="100"
                            height="100"
                        />
                    </HostAvatar>
                    <HostDetails>
                        <HostName>
                            Ms. Rudelyn S. Yaon
                        </HostName>
                        <HostName>
                            O/ASPP, DND
                        </HostName>
                    </HostDetails>
                </Host>
            </HostGroup>
        </TimelineDetails>
    </TimelineSegment>
    <TimelineSegment>
        <TimelineSegmentTime />
        <TimelineDetails>
            <TimelineTitle>Planning and Programming (PP) Phase of DRMS
            </TimelineTitle>
            <HostGroup>
                <Host>
                    <HostAvatar>
                        <Image
                            src="/events/2024-02-27/avatar-jeremy.png"
                            alt="Philippine Marine Corps"
                            width="100"
                            height="100"
                        />
                    </HostAvatar>
                    <HostDetails>
                        <HostName>
                            Ms. Jeremy Marie G. Lorenzo
                        </HostName>
                        <HostName>
                            O/ASPP, DND
                        </HostName>
                    </HostDetails>
                </Host>
            </HostGroup>
        </TimelineDetails>
    </TimelineSegment>
</TimelineSegmentGroup> */}