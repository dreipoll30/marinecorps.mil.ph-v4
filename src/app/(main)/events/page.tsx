import { Content, ContentWrapper } from "@/app/components/content";
import { events } from "@/app/components/data/events";
import { EventDate, EventDetails, EventImage, EventItem, EventStatus, EventsWrapper, EventTitle } from "@/app/components/events";
import Footer from "@/app/components/footer";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import Image from "next/image";

export default function Events() {


    return (
        <>
            <NavigationBar />
            <HeaderInside>
                <HeaderInsideWrapper>
                    <HeaderImage>
                        <Image
                            fill
                            src="/static/header-inside-leaders.jpg"
                            alt="Marine Corps Image"
                            className="object-cover"
                        />
                    </HeaderImage>
                </HeaderInsideWrapper>
            </HeaderInside>
            <Content>
                <ContentWrapper>
                    <Section>
                        <SectionHeadingWrapper>
                            <SectionHeading title="Events" />
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <EventsWrapper>
                            {events.map((event) => (
                                <EventItem key={event.id} gradientClass={event.gradient} href={event.href}>
                                    <EventStatus status={event.status} />
                                    <EventDetails>
                                        <EventDate>
                                            {event.date}
                                        </EventDate>
                                        <EventTitle>
                                            {event.name}
                                        </EventTitle>
                                    </EventDetails>
                                </EventItem>
                            ))}

                        </EventsWrapper>
                    </Section>
                </ContentWrapper>
            </Content>
            <Invitation />
            <LogoWall />
            <Footer />
        </>
    )
}