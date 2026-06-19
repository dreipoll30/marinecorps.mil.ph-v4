import { Alert } from "@/app/components/alert";
import { Button, ButtonArrow } from "@/app/components/button";
import { Content, ContentPanel, ContentPanelBlock, ContentWrapper, ImageCaption, JoinImageCaption } from "@/app/components/content";
import { joinMarineCorps } from "@/app/components/data/join/marines";
import { FAQsDisclosure } from "@/app/components/disclosure";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function JoinMarines() {
    return (
        <>
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
                            <SectionHeading title="Join the Civilian Workforce" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ContentPanel className="mb-14">
                            <ContentPanelBlock >
                                <p>
                                    Every progress made by the Marine Corps is owed to its active civilian workers. They work alongside the Marines to maintain high standards of command capabilities.
                                </p>

                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Ready to make a Difference
                                    </h3>
                                </JoinImageCaption>
                                <Image
                                    src="/static/careers-cat1-image1.jpg" alt='Marine candidate grabing a rope'
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                        <ContentPanel reverse>
                            <ContentPanelBlock>
                                <p>
                                    Civilian employees play a vital role in the continued operation of the Philippine Marine Corps to secure the nation's interests. They serve as the backbone and institutional memory of the Corps' legacy. The civilian workforce also provides technical, operational, and management capabilities to assist the troops, demonstrating their expertise and making a significant contribution to every mission. Civilian personnel are essential in maintaining the operational pace in the country for more than seven decades.
                                </p>
                                <p>
                                    Opportunities for tough, rewarding work in support of our nation's Marines can be found here:
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                       Institutional Memory of the Corps
                                    </h3>
                                </JoinImageCaption>
                                <Image
                                    src="/static/careers-cat1-image2.jpg" alt='Marine candidate grabing a rope'
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                    </Section>
                    <Section>
                        <h3>
                            Volunteer as a Marine
                        </h3>
                        <p>
                            There is nothing more fulfilling than living a life of service to our beloved country, and the best place for you is to cultivate your patriotism with the most-ready force <strong> – The Philippine Marine Corps.</strong>
                        </p>
                        <p>
                            The Philippine Marine Corps, or Hukbong Kawal Pandagat ng Pilipinas, is a naval amphibious force under the Philippine Navy's command as extension of its naval power in land through the conduct of amphibious and special operations missions.
                        </p>
                        <p>
                            The Recruitment Office of the Philippine Marine Corps opens applications for those interested to join the force.
                        </p>
                    </Section>
                    <Section>
                        <h3>{joinMarineCorps.benefits.title}</h3>
                        <ul>
                            {joinMarineCorps.benefits.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Section>
                    {joinMarineCorps.programs.map((program) => (
                        <Section key={program.id}>
                            <h3>{program.title}</h3>
                            <h4>Qualifications:</h4>
                            <ul>
                                {program.qualifications.map((qualification, index) => (
                                    <li key={index}>{qualification}</li>
                                ))}
                            </ul>
                            <h4>Initial Requirements:</h4>
                            <Alert message={program.requirementsNote} />
                            <ul>
                                {program.requirements.map((requirement, index) => (
                                    <li key={index}>{requirement}</li>
                                ))}
                            </ul>
                        </Section>
                    ))}

                    <Section>
                        <h3>Frequently Asked Questions</h3>
                        <FAQsDisclosure />
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}