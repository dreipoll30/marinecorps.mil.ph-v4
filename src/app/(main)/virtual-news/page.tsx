import { Content, ContentWrapper } from "@/app/components/content";
import Footer from "@/app/components/footer";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import Image from "next/image";

export default function VirtualNews() {
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
                            <SectionHeading title="Virtual News" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                </ContentWrapper>
            </Content>
                            <Invitation />
                            <LogoWall />
                            <Footer />
        </>
    )
}