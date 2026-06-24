import { Alert } from "@/app/components/alert";
import { Button, ButtonArrow } from "@/app/components/button";
import { Content, ContentPanel, ContentPanelBlock, ContentWrapper, ImageCaption, JoinImageCaption } from "@/app/components/content";
import { joinMarineCorps } from "@/app/components/data/join/marines";
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
                            <SectionHeading title="Volunteer as a Marine" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ContentPanel className="mb-14">
                            <ContentPanelBlock >
                                <p>
                                    It takes a special breed of men and women to join the Philippine Marine Corps. Forged in fire and honed in combat, each Marine is the cutting edge of the Armed Forces of the Philippines. The first to charge in every fight. The representatives of the best in soldiery.
                                </p>
                                <p>
                                    Join the few, the proud: The Philippine Marine Corps!
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Unified by Excellence
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
                                <p className="font-heading text-[24px] text-black-8">
                                    The task of training these young men into Marines is vested upon us. Today, as we start training them, we will be striking the first hammer blow in forging the "cutting edge" of the Armed Forces.
                                </p>
                                <p>
                                    — LTSG Manuel Gomez's <br />
                                    On the formation of the Philippine Marine Corps 1950
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Cutting Edge of the Armed Forces
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
                        <ContentPanel>
                            <ContentPanelBlock>
                                <p>
                                    Wondering if you are making significance with your life? The Marines do not have that problem. Join the Corps and spend a lifetime filled with Honor, Duty and Valor.
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Form A Bond Like No Other
                                    </h3>
                                </JoinImageCaption>
                                <Image
                                    src="/static/careers-cat1-image3.jpg" alt='Marine candidate grabing a rope'
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
                            <Invitation />
                            <LogoWall />
                            <Footer />
        </>
    )
}