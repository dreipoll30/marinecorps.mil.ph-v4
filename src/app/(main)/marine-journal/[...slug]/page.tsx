import { ArticleAuthor, ArticleAuthorAvatar, ArticleAuthorDetails, ArticleAuthorName, ArticleAuthorRole, ArticleHead, ArticleItemBlock, ArticleItemBody, ArticleItemDate, ArticleItemImage, ArticleItemTitle, ArticleWrapper } from "@/app/components/article";
import { Content, ContentWrapper } from "@/app/components/content";
import { fetchJournalBySlug, journals } from "@/app/components/data/journal";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import { Breadcrumbs, BreadcrumbsItem, Section } from "@/app/components/section";
import { formatDate } from "@/app/libs/formatDate";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
    params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const resolvedParams = await params;
    const currentSlug = resolvedParams.slug[0];

    const article = journals.find((journal) => journal.slug === currentSlug);
    return {
        title: article?.title || "Journal not found"
    }
}

export default async function JournalBySlug({ params }: Props) {

    const resolvedParams = await params;
    const currentSlug = resolvedParams.slug[0];

    const article = await fetchJournalBySlug(currentSlug);
    if (!article) {
        return <div className="p-8 text-center">Article not found.</div>;
    }
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
                        <ArticleWrapper>
                            <ArticleHead>
                                <Breadcrumbs>
                                    <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                                    <BreadcrumbsItem href="/marine-journal">Marine Journals</BreadcrumbsItem>
                                </Breadcrumbs>
                                <ArticleItemDate>{formatDate(article.date_posted, 'LLLL')}</ArticleItemDate>
                                <ArticleItemTitle>{article.title}</ArticleItemTitle>
                                <ArticleAuthor>
                                    <ArticleAuthorAvatar>
                                        <img src="/static/avatar-m.jpg" alt={article.date_posted}
                                            className="w-full h-auto block" />
                                    </ArticleAuthorAvatar>
                                    <ArticleAuthorDetails>
                                        <ArticleAuthorName>
                                            Posted by {article.posted_by}
                                        </ArticleAuthorName>
                                        <ArticleAuthorRole>
                                            Administrator
                                        </ArticleAuthorRole>
                                    </ArticleAuthorDetails>
                                </ArticleAuthor>
                            </ArticleHead>
                            <ArticleItemBody>
                                <ArticleItemImage src={article.cover_image} alt={article.cover_image_alt} />
                                <ArticleItemBlock>
                                    {article.content.map((content, index) => (
                                        <p key={index} className="text-justify">{content}</p>
                                    ))}
                                </ArticleItemBlock>
                            </ArticleItemBody>
                        </ArticleWrapper>

                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}