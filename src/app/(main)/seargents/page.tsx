import { Content, ContentWrapper } from "@/app/components/content";
import { lineageCommandants } from "@/app/components/data/lineage-commandants";
import { sergeantsMajor } from "@/app/components/data/sergeants";
import Footer from "@/app/components/footer";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Profile, ProfileCard, ProfileCardDetails, ProfileCardImage, ProfileItem } from "@/app/components/profile";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { VerticalDataGroup, DataStrong, Data } from "@/app/components/data-group";


import Image from 'next/image';

export default function Seargeants() {
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
                            <SectionHeading title="Sergeants Major" className="mb-0" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <Section>
                            <Profile>
                                {sergeantsMajor.map((commandant) => (
                                    <ProfileItem key={commandant.id} className="first:lg:col-span-1!">
                                        <ProfileCard>
                                            <ProfileCardImage src="/static/avatar.jpg" alt="Marine Corps Philippines" />
                                            <ProfileCardDetails>
                                                <VerticalDataGroup className="leading-4">
                                                    <DataStrong>{commandant.rank} {commandant.name}</DataStrong>
                                                    <Data>
                                                        {commandant.term}
                                                    </Data>
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