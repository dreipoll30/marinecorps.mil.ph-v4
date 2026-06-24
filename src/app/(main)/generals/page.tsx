import { Content, ContentWrapper } from "@/app/components/content";
import { marineGenerals } from "@/app/components/data/generals";
import { lineageCommandants } from "@/app/components/data/lineage-commandants";
import { sergeantsMajor } from "@/app/components/data/sergeants";
import Footer from "@/app/components/footer";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Profile, ProfileCard, ProfileCardDetails, ProfileCardImage, ProfileItem } from "@/app/components/profile";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { VerticalDataGroup, DataStrong, Data } from "@/app/components/vertical-group";


import Image from 'next/image';

export default function Generals() {
    return (
        <>
        <NavigationBar/>
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
                            <SectionHeading title="Marine Generals" className="mb-0" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <Section>
                            <Profile>
                                {marineGenerals.map((general) => (
                                    <ProfileItem key={general.id} className="first:lg:col-span-1!">
                                        <ProfileCard>
                                            <ProfileCardImage src="/static/avatar.jpg" alt="Marine Corps Philippines" />
                                            <ProfileCardDetails>
                                                <VerticalDataGroup className="leading-5">
                                                    <DataStrong className="uppercase">{general.rank} {general.name} {general.department}</DataStrong>
                                                    {general.terms.map((term) => (
                                                        <Data key={term} className="leading-5.5">
                                                            {term}
                                                        </Data>
                                                    ))}

                                                </VerticalDataGroup>
                                            </ProfileCardDetails>
                                        </ProfileCard>
                                    </ProfileItem>
                                ))}
                            </Profile>
                        </Section>
                    </Section>
                </ContentWrapper>
            </Content>
                            <Invitation />
                            <LogoWall />
                            <Footer />
        </>
    )
}