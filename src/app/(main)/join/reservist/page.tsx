import { ButtonArrow } from "@/app/components/button";
import { ContentWrapper, ContentPanel, ContentPanelBlock, JoinImageCaption, Content } from "@/app/components/content";
import { reservistData } from "@/app/components/data/join/reservist";
import { FAQsDisclosure } from "@/app/components/faq-disclosure";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import Image from "next/image";

export default function () {
    return (
        <> <HeaderInside>
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
                            <SectionHeading title="Volunteer as Reservist" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ContentPanel className="mb-14">
                            <ContentPanelBlock >
                                <p>
                                    Aspiring to serve the country but unable to commit full-time in the military. Being in the reserve force is just as noble as being in the active-duty force. They provide support during emergencies, and initiates humanitarian causes in the community. When active-duty Marines are stretched thin, Marine reservists are ready to overcome any adversaries.
                                </p>
                                <p>
                                    Start pursuing your military dream and enlist as a Marine Corps reservist.
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Crucial to the Whole Force
                                    </h3>
                                </JoinImageCaption>
                                <Image
                                    src="/static/careers-cat3-image1.jpg" alt='Marine candidate grabing a rope'
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                        <ContentPanel reverse>
                            <ContentPanelBlock>
                                <p>
                                    Marine Corps Reserve differs from active-duty Marines as the former work only in part-time positions. Reservists have more flexibility and serve one weekend a month and two weeks a year. They also enjoy the same privileges as any other civilian, such as living at home, attending university, and more. Meanwhile, active duty life is challenging due to the rigors of being on call and ready, especially during wartime when active duty personnel are generally the first to deploy.
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Flexible Yet Capable Reserve
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
                        <ContentPanel>
                            <ContentPanelBlock>
                                <p>
                                    Marines in the Reserve continue to operate in the civilian sector but are prepared to assist the Corps during national or international crises. As Marines, they are held to the same standards as those on active duty. Marine Reservists go through the same 13 weeks of recruit training as their active-duty counterparts, serve in the same military occupational specialties, and must fulfill almost similar qualifying criteria. Each meticulous training sharpens their ability to manage and command small unit operations within a larger force.
                                </p>
                                <ButtonArrow variant="secondary" href="">
                                    Continue Application
                                </ButtonArrow>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <JoinImageCaption>
                                    <h3 className="mb-0">
                                        Adeptly Trained as their Counterparts
                                    </h3>
                                </JoinImageCaption>
                                <Image
                                    src="/static/careers-cat3-image3.jpg" alt='Marine candidate grabing a rope'
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                    </Section>
                    {reservistData.map((reservist, index) => (
                        <Section key={index}>
                        <h3>{reservist.header}</h3>
                            {reservist.sections?.map((section, index) => (
                                <div key={index}>
                                    {section.title && (
                                        <h4>{section.title}</h4>
                                    )}
                                    <ul key={index}>
                                        {section.content.map((content) => (
                                            <li key={content}>{content}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
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