import { Avatar } from "@/app/components/avatar";
import { Content, ContentWrapper } from "@/app/components/content";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { Valor, ValorCard, ValorCardImage, ValorCardItem, ValorImage, ValorItem } from "@/app/components/valor";
import Image from 'next/image';
import { ValorCards, ValorHero, ValorTopbar } from "./valor-hero";
import { valors } from "@/app/components/data/heroes";

export default function WallOfHeroes() {
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
                            <SectionHeading title="Wall of Heroes" className="mb-0" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ValorHero />
                    </Section>
                    <Section>
                        <ValorTopbar/>
                        <ValorCards/>
                    </Section>
                </ContentWrapper>
            </Content>

        </>
    )
}