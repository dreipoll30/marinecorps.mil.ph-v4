import { Content, ContentWrapper } from "@/app/components/content";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import Image from "next/image";

export default function VirtualNews() {
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
                            <SectionHeading title="Virtual News" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}