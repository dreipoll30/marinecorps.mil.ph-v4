import { Avatar } from "@/app/components/avatar";
import { Content, ContentWrapper } from "@/app/components/content";
import { credits } from "@/app/components/data/credits";
import { Drilldown, DrilldownBody, DrillDownListItem } from "@/app/components/drilldown";
import Footer from "@/app/components/footer";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import { HorizontalDataGroup, VerticalDataGroup } from "@/app/components/vertical-group";
import Image from "next/image";

export default function Credits() {
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
                            <SectionHeading title="Credits" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    {credits.map((credit) => (
                        <Section>
                            <h3>{credit.category}</h3>
                            <Drilldown className="mb-0!">
                                <DrilldownBody>
                                    {credit.items.map((item) => (
                                        <DrillDownListItem>
                                            <HorizontalDataGroup className="justify-normal!">
                                                <Avatar variant="circle" src={item.image}
                                                    className="w-12! h-12! mr-4" />
                                                <VerticalDataGroup className="items-start">
                                                    <p className="mb-0">{item.name}</p>
                                                    <span className="mb-0 text-[14px] text-slate-400 tracking-wider">{item.role}</span>
                                                </VerticalDataGroup>
                                            </HorizontalDataGroup>
                                        </DrillDownListItem>
                                    ))}
                                </DrilldownBody>
                            </Drilldown>
                        </Section>
                    ))}
                </ContentWrapper>
            </Content>
            <Invitation />
            <LogoWall />
            <Footer />

        </>
    )
}