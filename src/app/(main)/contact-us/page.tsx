"use client"

import { ContactDetails, ContactDetailsBlock, } from "@/app/components/contact";
import { ContactForm } from "@/app/components/contact-form";
import { Content, ContentPanel, ContentPanelBlock, ContentWrapper } from "@/app/components/content";
import Footer from "@/app/components/footer";
import { HeaderInside, HeaderInsideWrapper, HeaderImage } from "@/app/components/header";
import Invitation from "@/app/components/invitation";
import LogoWall from "@/app/components/logowall";
import NavigationBar from "@/app/components/navigation";
import { Section, SectionHeadingWrapper, SectionHeading, Breadcrumbs, BreadcrumbsItem } from "@/app/components/section";
import Image from "next/image";
import React from "react";

interface ContactItem {
    phone: string;
    email?: string;
}

interface ContactGroup {
    title: string;
    items: ContactItem[];
}


export default function ContactUs() {
    const contacts: ContactGroup[] = [
        {
            title: "Marine Corps Public Affairs Office",
            items: [
                {
                    phone: "+63917-532-3593",
                    email: "mcpao@marinecorps.mil.ph"
                }
            ]
        },
        {
            title: "Marine Corps Recruitment Office",
            items: [
                {
                    phone: "+63927-321-7620",
                    email: "philmar.recruitment@gmail.com"
                }
            ]
        },
        {
            title: "Office of the MC6",
            items: [
                {
                    phone: "+63917-823-7196",
                }
            ]
        },
        {
            title: "AC of MS for Personnel, MC1",
            items: [
                {
                    phone: "+63915-488-1054",
                    email: "pmc.mc1irb@gmail.com"
                }
            ]
        },
        {
            title: "AC of MS for Civil-Military Operations, MC7",
            items: [
                {
                    phone: "+63967-013-2741",
                    email: "emceeseven7@gmail.com"
                }
            ]
        },
        {
            title: "AC of MS for Reservist & Retirees Affairs, MC9",
            items: [
                {
                    phone: "+63917-119-6731",
                    email: "pmcrra.mc9@gmail.com"
                }
            ]
        },
    ]
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
                            <SectionHeading title="Contact Us" />
                            <Breadcrumbs>
                                <BreadcrumbsItem href="/">Home</BreadcrumbsItem>
                            </Breadcrumbs>
                        </SectionHeadingWrapper>
                    </Section>
                    <Section>
                        <ContactForm />

                    </Section>
                    {/* <Section>
                        <FormRow>
                            <div className="col-span-12">
                                <FormInput type="text" placeholder="" required name="Name" />
                            </div>
                            <div className="col-span-12">
                                <FormInput type="text" placeholder="" required name="Subject" />
                            </div>
                            <div className="col-span-6">
                                <FormInput type="text" placeholder="" name="Email" />
                            </div>
                            <div className="col-span-6">
                                <FormInput type="text" placeholder="" required name="Contact Number" />
                            </div>
                            <div className="col-span-12">
                                <FormInput type="textarea" placeholder="" required name="Message" />
                            </div>
                            <p className=" text-[12px] col-span-12 py-[6px]">
                                By clicking the "Submit Inquiry" button, you consent to the Philippine Marine Corps' collection, storage, and processing of your personal information. The data collected will only be used for the purpose indicated in the subject matter of your query and will only be accessed by duly authorized personnel.
                            </p>
                        </FormRow>
                    </Section> */}
                    <Section>
                        <h4 className="mb-3">
                            Headquarters
                        </h4>
                        <p className="my-3">
                            Headquarters Philippine Marine Corps, Marine Barracks Rudiardo Brown, Naval Station Jose Francisco,
                            Fort Bonifacio, Taguig City, Metro Manila, Philippines
                        </p>
                        <ContactDetails>
                            {contacts.map((contact, index) => (
                                <ContactDetailsBlock key={index}>
                                    <h4 className="mb-6">{contact.title}</h4>
                                    {contact.items.map((item, index) => (
                                        <React.Fragment key={index}>
                                            <p className="mb-0">Phone: {item.phone}</p>
                                            {item.email && (
                                                <p className="mb-0">{item.email}</p>
                                            )}
                                        </React.Fragment>

                                    ))}
                                </ContactDetailsBlock>
                            ))}

                        </ContactDetails>
                    </Section>
                </ContentWrapper>
            </Content>
            <Invitation />
            <LogoWall />
            <Footer />
        </>
    )
}