import { Content, ContentWrapper } from "@/app/components/content";
import { citemars } from "@/app/components/data/citemars";
import { HeaderImage, HeaderInside, HeaderInsideWrapper } from "@/app/components/header";
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from "@/app/components/section";
import { ShelfCollection, ShelfItem, ShelfSlide, ShelfSlideDetails, ShelfSlideDownloadButton, ShelfSlideImage } from "@/app/components/shelf";
import Image from "next/image";

export default function Citemar6() {
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
                            <SectionHeading title="CITEMAR6" />
                            <Breadcrumbs>
                            <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                        </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ShelfCollection>
                            {citemars.map((citemar, index) => (
                                <ShelfSlide key={index} className="col-span-6 sm:col-span-3 md:col-span-2 xl:col-span-2 " >
                                    <ShelfSlideImage src={citemar.image.url} alt={citemar.image.altText}/>
                                    <ShelfSlideDetails title={citemar.title}  className="px-12 py-[24px]">
                                        <ShelfSlideDownloadButton href={citemar.src} className="mb-0!"/>
                                    </ShelfSlideDetails>
                                </ShelfSlide>
                            ))}
                        </ShelfCollection>
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}