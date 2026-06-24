import { ArticleItem, ArticleImage, ArticleIDetails, ArticleTitle, Articles } from "@/app/components/articles";
import { Content, ContentWrapper } from "@/app/components/content";
import Footer from "@/app/components/footer";
import { Gallery } from "@/app/components/gad-gallery";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import Image from "next/image";

interface ContentItem {
    id: number;
    heading: string;
    description: React.ReactNode[];
}

export default function GAD() {
    const content: ContentItem[] = [
        {
            id: 1,
            heading: "Among the line-up of activities that are part of the ongoing GAD initiatives includes:",
            description: [
                "Gender Sensitivity Training.",
                "Seminar-Workshops on Gender Analysis.",
                "GAD Executive Briefing to Senior Officials/Top Level Management.",
                "Lectures on GAD-related laws and mandates.",
                "Active participation in national and international mandated GAD-related advocacies such as the Campaign to End Violence against Women.",

            ]
        },

    ]
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
                            <SectionHeading title="Gender and Development" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <h3>Breaking Boundaries, Building Capabilities</h3>
                        <p>Throughout history, society and culture have established gender stereotypes that confine men and women to predetermined roles that limit their personal growth and capacities. That is why the Philippine Marine Corps is taking extra steps to break down boundaries and promote an environment that is responsive and empowering for everybody.</p>
                        <h3>Dismantling the Glass Ceiling</h3>
                        <p>Even though women have a long history of marching on the frontlines alongside their male counterparts, it has only been in today's time where they have been recognized as official military members.
                        </p>
                        <p>The Philippine Marine Corps opened the doors for Female Marines in 2009. Since then, the PMC Gender and Development (GAD) was created that aims to foster gender-sensitive personnel through inclusive decision-making, equal access to resources and opportunities, respect for human rights, and encourage self-improvement between all Marines.</p>
                        <p>
                            <strong className="text-black">"As long as there are no gender biases in our organization, for the AFP as a whole, men and women can work together with respect and enthusiasm."
                            </strong>
                            {" "}- Colonel Leodevic Guinid.
                        </p>
                        <h3>Given High Regards; With Same Standards</h3>
                        <p>Female and Male qualified marines endured rigorous training and even got as far as going bald in the past—proving their unfaltering spirit to join the
                            <strong className="text-black">few and the proud.
                            </strong>
                            There may have been some slight changes, but definitely no compromise in the standard by which they produce their warriors.
                        </p>
                        <p>
                            <strong className="text-black">"There is a little adjustment in the level of difficulty in training — maybe by ONE PERCENT" </strong>
                            - PMC Commandant, Major General Juancho Sabban, 2009
                        </p>
                        <p>Based on the 2021 PMC statistics, approximately 30% of Marine officers and 4% of Marine personnel are female. In fact, Col. Esperanza R. Casiao PN(M)(GSC) is the highest-ranking active female Marine officer. Likewise, the highest-ranking reservist woman in the Reserve is BGen. Rodylyn T. Manzano PN(M)(RES).</p>
                        <p>As such, the organization is committed to entail harmonious professional relationships among the workforce through actively implementing strategic policy reforms and integrating the Marine Corps education, training, programs, and advocacies to support gender equality.</p>
                        <h3>Among the line-up of activities that are part of the ongoing GAD initiatives includes:</h3>
                        <ol>
                            <li>Gender Sensitivity Training.</li>
                            <li>Seminar-Workshops on Gender Analysis.</li>
                            <li>GAD Executive Briefing to Senior Officials/Top Level Management.</li>
                            <li>Lectures on GAD-related laws and mandates.</li>
                            <li>Active participation in national and international mandated GAD-related advocacies such as the Campaign to End Violence against Women.</li>
                        </ol>
                        <h3>Activities:</h3>
                        <Gallery />
                    </Section>
                </ContentWrapper>
            </Content>
            <Invitation />
            <LogoWall />
            <Footer />
        </>
    )
}