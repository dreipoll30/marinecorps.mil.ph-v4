import { Content, ContentWrapper } from "@/app/components/content";
import { reports, transparencyData, TransparencyReport } from "@/app/components/data/transparency";
import DisclosureComponent from "@/app/components/disclosure";
import { Drilldown, DrilldownBody, DrilldownHeading } from "@/app/components/drilldown";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import { ImageBlock, LogoImageItem } from "@/app/components/image-block";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow, TableSectionRow } from "@/app/components/table";
import Image from "next/image";
import React from "react";

export default function TransparencySeal() {
    function toRoman(num: number): string {
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const literals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

        let result = '';
        for (let i = 0; i < values.length; i++) {
            while (num >= values[i]) {
                result += literals[i];
                num -= values[i];
            }
        }
        return result;
    }

    const budgetItems = {
        items: [
            "the agency's mandates and functions, names of its officials with their position and designation, and contact information;",
            "annual reports, as required under National Budget Circular Nos. 507 and 507-A dated January 31, 2007 and June 12, 2007, respectively, for the last three (3) years;",
            "their respective approved budgets and corresponding targets immediately upon approval of this Act;",
            "major programs and projects categorized in accordance with the five key results areas under E.O. No. 43, s. 2011;",
            "the program/projects beneficiaries as identified in the applicable special provisions;",
            "status of implementation and program/project evaluation and/or assessment reports; and",
            "annual procurement plan, contracts awarded and the name of contractors/suppliers/consultants. The respective heads of the agencies shall be responsible for ensuring compliance with this section."
        ]
    }

    const columns = [
        "rank/name/afpsn/bos",
        "designation"
    ]

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
                            <SectionHeading title="Transparency Seal" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ImageBlock>
                            <LogoImageItem>
                                <img src="/static/logowall-transparency-seal.png" alt="" />
                            </LogoImageItem>
                        </ImageBlock>
                        <h3>
                            National Budget Circular 542
                        </h3>
                        <p>
                            National Budget Circular 542, issued by the Department of Budget and Management on August 29, 2012, reiterates compliance with Section 93 of the General Appropriations Act of FY 2012. Section 93 is the Transparency Seal provision, to wit:
                        </p>
                        <p>
                            Sec. 93. Transparency Seal. To enhance transparency and enforce accountability, all national government agencies shall maintain a transparency seal on their official websites. The transparency seal shall contain the following information:
                        </p>
                        <ul>
                            {budgetItems.items.map((budget, index) => (
                                <React.Fragment key={index}>
                                    <li>{budget}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <p>
                            A Transparency Seal, prominently displayed on the main page of the website of a particular government agency, is a certificate that it has complied with the requirements of Section 93. This Seal links to a page within the agency's website which contains an index of downloadable items of each of the above-mentioned documents.
                        </p>
                        <h3>Symbolism</h3>
                        <p>
                            A pearl buried inside a tightly-shut shell is practically worthless. Government information is a pearl, meant to be shared with the public in order to maximize its inherent value.
                        </p>
                        <p>
                            The Transparency Seal, depicted by a pearl shining out of an open shell, is a symbol of a policy shift towards openness in access to government information. On the one hand, it hopes to inspire Filipinos in the civil service to be more open to citizen engagement; on the other, to invite the Filipino citizenry to exercise their right to participate in governance.
                        </p>
                        <p>
                            This initiative is envisioned as a step in the right direction towards solidifying the position of the Philippines as the Pearl of the Orient - a shining example for democratic virtue in the region.
                        </p>
                        <h3>I. Agency's mandate, vision, mission and list of officials</h3>
                        <p>Mission</p>
                        <p>"To provide multi-capable Marine Operating Forces for Archipelagic Coastal Defense and other operations in support to the mission of the Philippine Navy."</p>
                        <p>Vision</p>
                        <p>"By 2028: The Philippine Marine Corps shall be our Maritime Nation's Highly Capable Amphibious Force-in-Readiness for Archipelagic Defense that brings lasting pride and inspiration to our people."</p>
                        <p>PMC Key Personnel as of (06 Sept 23)</p>
                        <h4>PMC Key Personnel as of (06 Sept 23)</h4>
                        <Drilldown>
                            <DrilldownBody>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((col: string) => (
                                                <TableHeader key={col}>{col}</TableHeader>

                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {transparencyData.categories.map((category, index: number) => (
                                            <React.Fragment key={index}>
                                                <TableSectionRow colSpan={5}>
                                                    {category.heading}
                                                </TableSectionRow>
                                                {category.members.map((member) => (
                                                    <TableRow key={member.id}>
                                                        <TableData>{member.rank}{" "}{member.name}{" "}{member.afpsn}{" "}{member.branchOfService} </TableData>
                                                        <TableData>
                                                            {member.designation}
                                                        </TableData>
                                                    </TableRow>
                                                ))}
                                            </React.Fragment>
                                        ))}
                                    </TableBody>
                                </Table>
                            </DrilldownBody>
                        </Drilldown>
                        {reports.map((report, index: number) => (
                            <React.Fragment key={index}>
                                <h3>{toRoman(index + 1)}. {report.categoryName}</h3>
                                <DisclosureComponent items={report.items} />
                            </React.Fragment>
                        ))}
                    </Section>
                </ContentWrapper>
            </Content>
        </>
    )
}