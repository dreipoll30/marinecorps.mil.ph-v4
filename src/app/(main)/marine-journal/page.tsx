import { ArticleDate, ArticleIDetails, ArticleImage, ArticleItem, Articles, ArticleTitle } from '@/app/components/articles'
import { Content, ContentWrapper } from '@/app/components/content'
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from '@/app/components/header'
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from '@/app/components/section'
import Image from 'next/image'

export default function MarineJournal() {
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
                            <SectionHeading title="Marines Journal" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">
                                    Home
                                </BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <Articles>
                            <ArticleItem>
                                <ArticleImage>
                                    <img src="/static/stories-placeholder-2.jpg" 
                                    className='block w-full h-auto'/>
                                </ArticleImage>
                                <ArticleIDetails>
                                    <ArticleDate>
                                        May 29, 2026
                                    </ArticleDate>
                                    <ArticleTitle>Philippine Marines and Japan Ground Self-Defense Force Conduct
                                    </ArticleTitle>
                                </ArticleIDetails>
                            </ArticleItem>
                        </Articles>
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}