import { Content, ContentPanel, ContentPanelBlock, ContentWrapper, ImageCaption } from '@/app/components/content';
import { combats, reserved, supports, sustainments } from '@/app/components/data/combat-forces';
import Footer from '@/app/components/footer';
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from '@/app/components/header';
import Invitation from '@/app/components/invitation';
import { ListboxWrapper, ListboxItem, ListboxImage, ListboxHeading } from '@/app/components/listbox';
import LogoWall from '@/app/components/logowall';
import NavigationBar from '@/app/components/navigation';
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from '@/app/components/section';
import { HorizontalDataGroup, VerticalDataGroup } from '@/app/components/vertical-group';
import Image from 'next/image';
import Link from 'next/link';


export default function MarineForces() {
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
                            <SectionHeading title='Marine Forces' />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ContentPanel>
                            <ContentPanelBlock>
                                <p> A unique unit of the Navy highly specialize in Amphibious Operations, capable of deployment anywhere
                                    in the country. It maximizes the use of combined arms. The unit are made up of some of the most battle
                                    tested soldiers of the AFP.{' '}</p>
                                <h4>Core Capabilities</h4>
                                <ul>
                                    <li>Amphibious operations</li>
                                    <li>Special operations/mission</li>
                                    <li>Humanitarian and Disaster Response Operations</li>
                                    <li>Day and night operations</li>
                                    <li>Rapidly deployable</li>
                                </ul>
                                <h4>Operations / Bases</h4>
                                <ul>
                                    <li>Central Mindanao</li>
                                    <li>Tawi-Tawi Province</li>
                                    <li>Palawan Province</li>
                                    <li>Northern Luzon</li>
                                </ul>
                            </ContentPanelBlock>
                            <ContentPanelBlock>
                                <ImageCaption>
                                    <h3 className='mb-0'>Most Ready</h3>
                                </ImageCaption>
                                <Image
                                    src="/static/mof-image1.jpg" alt=''
                                    className='w-full block h-auto'
                                    width="1000"
                                    height="1200"
                                />
                            </ContentPanelBlock>
                        </ContentPanel>
                    </Section>
                    <Section>
                        <h3>Combat Forces</h3>
                        <ListboxWrapper>
                            {combats.map((combat) => (
                                <ListboxItem key={combat.id}>
                                    <HorizontalDataGroup className='items-start'>
                                        <ListboxImage>
                                            <img src={combat.seal ? combat.seal : "/static/avatar.jpg"} alt="w-full h-auto block" />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <Link href={combat.link} target="_blank" rel="noreferrer" className="w-full text-left  text-lg text-blue-600 font-semibold">
                                                {combat.name}
                                            </Link>
                                            <ListboxHeading>{combat.alias} </ListboxHeading>
                                            <p className="mb-0 text-[18px]">{combat.description}</p>
                                        </VerticalDataGroup>
                                    </HorizontalDataGroup>
                                </ListboxItem>
                            ))}
                        </ListboxWrapper>
                    </Section>
                    <Section>
                        <h3>Combat & Service Support Forces</h3>
                        <ListboxWrapper>
                            {supports.map((support, index) => (
                                <ListboxItem key={index}>
                                    <HorizontalDataGroup className='items-start'>
                                        <ListboxImage>
                                            <img src={support.seal ? support.seal : "/static/avatar.jpg"} alt="w-full h-auto block" />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <ListboxHeading>{support.name}</ListboxHeading>
                                            <ListboxHeading>{support.alias} </ListboxHeading>
                                            <p className="text-left mb-0 text-[18px]">{support.description}</p>
                                        </VerticalDataGroup>
                                    </HorizontalDataGroup>
                                </ListboxItem>
                            ))}
                        </ListboxWrapper>
                    </Section>
                    <Section>
                        <h3>General Support & Sustainment Forces</h3>
                        <ListboxWrapper>
                            {sustainments.map((sustainment, index) => (
                                <ListboxItem key={index}>
                                    <HorizontalDataGroup className='items-start'>
                                        <ListboxImage>
                                            <img src={sustainment.seal ? sustainment.seal : "/static/avatar.jpg"} alt="w-full h-auto block" />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <ListboxHeading>{sustainment.name}</ListboxHeading>
                                            <ListboxHeading>{sustainment.alias} </ListboxHeading>
                                            <p className=" mb-0 text-[18px]">{sustainment.description}</p>
                                        </VerticalDataGroup>
                                    </HorizontalDataGroup>
                                </ListboxItem>
                            ))}
                        </ListboxWrapper>
                    </Section>
                    <Section>
                        <h3>Marine Reserve</h3>
                        <ListboxWrapper>
                            {reserved.map((reserve, index) => (
                                <ListboxItem key={index}>
                                    <HorizontalDataGroup>
                                        <ListboxImage>
                                            <img src={reserve.seal ? reserve.seal : "/static/avatar.jpg"} alt="w-full h-auto block " />
                                        </ListboxImage>
                                        <VerticalDataGroup className="text-left">
                                            <ListboxHeading>{reserve.name}</ListboxHeading>
                                            <ListboxHeading>{reserve.alias} </ListboxHeading>
                                            <p className=" mb-0 text-[18px]">{reserve.description}</p>
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