import { Alert } from "@/app/components/alert";
import { Button, ButtonArrow } from "@/app/components/button";
import { Content, ContentPanel, ContentPanelBlock, ContentWrapper, ImageCaption, JoinImageCaption } from "@/app/components/content";
import { civilRequirements } from "@/app/components/data/join/civilian";

import { FAQsDisclosure } from "@/app/components/faq-disclosure";
import Footer from "@/app/components/footer";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

export default function JoinMarines() {
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
                                    src="/static/careers-cat2-image1.jpg" alt='Marine candidate grabing a rope'
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
                                    src="/static/careers-cat2-image2.jpg" alt='Marine candidate grabing a rope'
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                    </Section>
                    <Section>
                        <h3>Civilian Workforce</h3>
                        {civilRequirements.map((require) => (
                            <>
                                <h4>{require.title}</h4>
                                <ul className="last:mb-0">
                                    {require.requirements.map((requirement) => (
                                        <li>
                                            {requirement}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ))}
                    </Section>
                    <Section>
                        <h3>Frequently Asked Questions</h3>
                        <FAQsDisclosure />
                    </Section>
                </ContentWrapper>
            </Content>
                            <Invitation />
                            <LogoWall />
                            <Footer />
        </>
    )
}