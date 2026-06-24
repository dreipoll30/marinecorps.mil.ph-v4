import { ArticleDate, ArticleIDetails, ArticleImage, ArticleItem, Articles, ArticleTitle } from '@/app/components/articles'
import { Content, ContentWrapper } from '@/app/components/content'
import { journals } from '@/app/components/data/journal'
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from '@/app/components/header'
import { Breadcrumbs, BreadcrumbsItem, Section, SectionHeading, SectionHeadingWrapper } from '@/app/components/section'
import Image from 'next/image'
import Link from 'next/link'

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
                            {journals.map((journal) => (
                                    <ArticleItem key={journal.id} href={`/marine-journal/${journal.slug}`}>
                                        <ArticleImage>
                                            <img src={journal.cover_image}
                                                className='block w-full h-auto' />
                                        </ArticleImage>
                                        <ArticleIDetails>
                                            <ArticleDate>
                                                {journal.date_posted}
                                            </ArticleDate>
                                            <ArticleTitle>{journal.title}
                                            </ArticleTitle>
                                        </ArticleIDetails>
                                    </ArticleItem>
                            ))}

                        </Articles>
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}