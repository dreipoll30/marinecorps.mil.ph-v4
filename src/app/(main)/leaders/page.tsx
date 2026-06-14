import { Button } from "@/app/components/button";
import { Content, ContentWrapper } from "@/app/components/content";
import { brigadeCommanders } from "@/app/components/data/brigade-leaders";
import { commandants } from "@/app/components/data/commandants";
import { leaders } from "@/app/components/data/leaders";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import LeadersChart from "@/app/components/leaders-chart";
import { Profile, ProfileCard, ProfileCardDetails, ProfileCardImage, ProfileItem } from "@/app/components/profile";
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import { Data, DataStrong, VerticalDataGroup } from "@/app/components/vertical-group";
import { IconChevronRight, IconChevronRightFilled } from "@tabler/icons-react";


import Image from 'next/image';

export default function LeadersCorner() {
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
                            <SectionHeading title="Leader&apos;s Corner" className="mb-0" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <LeadersChart />
                    </Section>
                    <Section>
                        <h3>Commandant</h3>
                        <Profile>
                            <ProfileItem>
                                <ProfileCard>
                                    <ProfileCardImage src="/static/leaders-cms.jpg" alt="Marine Corps Philippines" />
                                    <ProfileCardDetails>
                                        <VerticalDataGroup className="leading-4">
                                            <DataStrong>MGEN VICENTE MAP BLANCO III O-10496 PN(M)</DataStrong>
                                            <Data>
                                                Commandant, PMC
                                            </Data>
                                            <Button variant="profile" href=""
                                                className="justify-start gap-1! mb-auto">
                                                Biography
                                                <IconChevronRight stroke={3} className="h-3 w-3 text-white" />
                                            </Button>
                                        </VerticalDataGroup>
                                    </ProfileCardDetails>
                                </ProfileCard>
                            </ProfileItem>
                        </Profile>
                    </Section>
                    <Section>
                        <h3>Deputy Commandmant</h3>
                        <Profile>
                            <ProfileItem>
                                <ProfileCard>
                                    <ProfileCardImage src="/static/avatar.jpg" alt="Marine Corps Philippines" />
                                    <ProfileCardDetails>
                                        <VerticalDataGroup className="leading-4">
                                            <DataStrong>BGEN GIERAM R ARAGONES PN(M)</DataStrong>
                                            <Data className="uppercase">
                                                DEPUTY COMMANDANT
                                            </Data>
                                        </VerticalDataGroup>
                                    </ProfileCardDetails>
                                </ProfileCard>
                            </ProfileItem>
                        </Profile>
                    </Section>
                    <Section>
                        <h3>Command Sergeant Major</h3>
                        <Profile>
                            <ProfileItem>
                                <ProfileCard>
                                    <ProfileCardImage src="/static/leaders-csm.jpg" alt="Marine Corps Philippines" />
                                    <ProfileCardDetails>
                                        <VerticalDataGroup className="leading-4">
                                            <DataStrong>SMS ROMMEL V CARBON PN(M)</DataStrong>
                                            <Data>
                                                Command Sergeant Major, PMC
                                            </Data>
                                        </VerticalDataGroup>
                                    </ProfileCardDetails>
                                </ProfileCard>
                            </ProfileItem>
                        </Profile>
                    </Section>
                    <Section>
                        <h3>Marine Corps Staff</h3>
                        <Profile>
                            {commandants.map((commandant) => (
                                <ProfileItem key={commandant.id}>
                                    <ProfileCard>
                                        <ProfileCardImage src="/static/avatar.jpg" alt="Marine Corps Philippines" />
                                        <ProfileCardDetails>
                                            <VerticalDataGroup className="leading-4">
                                                <DataStrong>{commandant.rank} {commandant.name}</DataStrong>
                                                <Data>
                                                   {commandant.department}
                                                </Data>
                                            </VerticalDataGroup>
                                        </ProfileCardDetails>
                                    </ProfileCard>
                                </ProfileItem>
                            ))}
                        </Profile>
                    </Section>
                    <Section>
                        <h3>Brigade Commanders</h3>
                        <Profile>
                            {brigadeCommanders.map((commander) => (
                                <ProfileItem key={commander.id} className="col-span-1 first:lg:col-span-1!">
                                    <ProfileCard>
                                        <ProfileCardImage src="/static/avatar.jpg" alt="Marine Corps Philippines" />
                                        <ProfileCardDetails>
                                            <VerticalDataGroup className="leading-4">
                                                <DataStrong>{commander.rank} {commander.name}</DataStrong>
                                                <Data>
                                                   {commander.department}
                                                </Data>
                                            </VerticalDataGroup>
                                        </ProfileCardDetails>
                                    </ProfileCard>
                                </ProfileItem>
                            ))}
                        </Profile>
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}