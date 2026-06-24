import { Content, ContentWrapper } from "@/app/components/content";
import { enlists, officers } from "@/app/components/data/ranks";
import Footer from "@/app/components/footer";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import { ListboxHeading, ListboxImage, ListboxItem, ListboxWrapper } from "@/app/components/listbox";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import { Data, HorizontalDataGroup, VerticalDataGroup } from "@/app/components/vertical-group";
import Image from 'next/image';

export default function Ranks() {
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
                            <SectionHeading title="Ranks and Insignia " />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <h3>Marine Corps Ranks</h3>
                        <p>The authority and duties of each Marine are defined by their rank in the Corps. Marines' annual salary gradually rises as they move up the ranks since each level has a corresponding pay grade. Understanding the different levels makes it easier to see how the Marine Corps perceives leadership and where each individual falls in the overall hierarchy.</p>
                        <h3>Officers</h3>
                        <p>Commissioned officers hold a college degree and have earned an appointment issued in the name of the President. These educated and decorated Marines hold the responsibility of being outstanding leaders for the Marines in their charge. Commissioned officer ranks are further subdivided into generals, field-grade officers, and company-grade officers.</p>
                        <ListboxWrapper>
                            {officers.map((officer) => (
                                <ListboxItem key={officer.id}>
                                    <HorizontalDataGroup>
                                        <ListboxImage>
                                            <img src={officer.insignia ? officer.insignia : "/static/avatar.jpg"} alt="w-full h-auto block" />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <ListboxHeading>{officer.title} {officer.paygrade}</ListboxHeading>
                                            <p className="mb-0 text-[18px]">{officer.description}</p>
                                        </VerticalDataGroup>
                                    </HorizontalDataGroup>
                                </ListboxItem>
                            ))}
                        </ListboxWrapper>
                        <h3>Enlisted</h3>
                        <p>Enlisted Marines are often referred to as the backbone of the Corps and carry distinct responsibilities that align with their military occupational specialties and their rank. Together, they are responsible to the commanding officer for the welfare, morale, discipline, and efficiency of the Marines in their charge.</p>
                        <ListboxWrapper>
                            {enlists.map((enlist) => (
                                <ListboxItem key={enlist.id}>
                                    <HorizontalDataGroup>
                                        <ListboxImage>
                                            <img src={enlist.insignia ? enlist.insignia : "/static/avatar.jpg"} alt="w-full h-auto block" />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <ListboxHeading>{enlist.title} {enlist.paygrade}</ListboxHeading>
                                            <p className="mb-0 text-[18px]">{enlist.description}</p>
                                        </VerticalDataGroup>
                                    </HorizontalDataGroup>
                                </ListboxItem>
                            ))}
                        </ListboxWrapper>
                    </Section>
                </ContentWrapper>
            </Content>
            <Invitation />
            <LogoWall />
            <Footer />
        </>
    )
}