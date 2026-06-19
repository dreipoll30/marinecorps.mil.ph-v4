'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { FAQs, frequentQuestions } from './data/join/disclosure';

export function FAQsDisclosure() {
    return (
        <div className="flex flex-col w-full border border-gray-300 rounded-sm">
            {/* How to apply */}
            <Disclosure as={DisclosureItem} >
                {({ open }) => (
                    <>
                        <Disclosure.Button className={` flex flex-row rounded-t-sm justify-between items-center w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                            <DisclosureTitle>How to Apply?</DisclosureTitle>
                            <DisclosureIcon>
                                <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
                            </DisclosureIcon>

                        </Disclosure.Button>
                        <Disclosure.Panel className="flex flex-col w-full px-4.5 py-3 ">
                            <ul>
                                <li>
                                    You may apply or proceed to:
                                    <br />
                                    Address: Philippine Marine Corps, Recruitment Office, Marine Barracks Rudiardo Brown, Fort Bonifacio,
                                    Taguig City.
                                    <br />
                                    Note: There are mobile recruitments available in certain regions.
                                </li>
                                <li>Take the AFP Qualifying Examination and IQ Test as scheduled</li>
                                <li>After passing the exams, take the Physical Exam Test</li>
                                <li>Monitor the schedule and deliberation and release of results</li>
                                <li>Prepare accordingly for the rigor training.</li>
                            </ul>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            {/* faqs */}
            {frequentQuestions.faqs.map((faq) => (
                <Disclosure as={DisclosureItem} key={faq.id} >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={` flex flex-row justify-between items-center w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 last:hover:rounded-b-sm ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                                <DisclosureTitle>{faq.question}</DisclosureTitle>
                                <DisclosureIcon>
                                    <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
                                </DisclosureIcon>

                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col w-full px-4.5 py-3 ">
                                <p className='mb-0'>{faq.answer}</p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}

            {/* How to become a Philippine Marine Corps */}
            {frequentQuestions.overview.map((o, index) => (
                <Disclosure as={DisclosureItem} key={index} >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={` flex flex-row justify-between items-center w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 last:hover:rounded-b-sm ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                                <DisclosureTitle>{o.title}</DisclosureTitle>
                                <DisclosureIcon>
                                    <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
                                </DisclosureIcon>

                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col w-full px-4.5 py-3 ">
                                {o.description.map((description, index) => (
                                    <p key={index} className='last:mb-0'>{description}</p>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}

            {/* candidates */}
            {frequentQuestions.candidates.map((question) => (
                <Disclosure as={DisclosureItem} key={question.id} >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={` flex flex-row justify-between items-center w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 last:hover:rounded-b-sm ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                                <DisclosureTitle>{question.title}</DisclosureTitle>
                                <DisclosureIcon>
                                    <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
                                </DisclosureIcon>

                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col w-full px-4.5 py-3 ">
                                {question.qualifications.map((qualification, index) => (
                                    <ul className='mb-0' key={index}>
                                        <li className='last:mb-0'>{qualification} </li>
                                    </ul>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
            {frequentQuestions.reservist.map((question, index) => (
                <Disclosure as={DisclosureItem} key={index} >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={` flex flex-row justify-between items-center w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 last:hover:rounded-b-sm ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                                <DisclosureTitle>{question.title}</DisclosureTitle>
                                <DisclosureIcon>
                                    <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`} />
                                </DisclosureIcon>

                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col w-full px-4.5 py-3 ">
                                {question.steps.map((steps, index) => (
                                    <ul className='mb-0' key={index}>
                                        <li className='last:mb-0'>{steps} </li>
                                    </ul>
                                ))}
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </div >

    )
}


export function DisclosureWrapper({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col w-full border border-gray-300 rounded-sm'>{children}</div>
    )
}

export function DisclosureItem({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col w-full border-b border-gray-300 overflow-hidden last:border-b-0'>{children}</div>
    )
}

export function DisclosureHead({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-row justify-between items-start w-full px-4.5 py-3 border-none bg-white font-medium cursor-pointer hover:bg-gray-100 active:bg-gray-100'>{children}</div>
    )
}

export function DisclosureBody({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-col w-full px-4.5 py-3 '>{children}</div>
    )
}

export function DisclosureTitle({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-row grow shrink w-auto text-left font-normal text-neutral text-[18px] '>{children}</div>
    )
}

export function DisclosureIcon({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-row items-center text-[22px]'>
            {children}
        </div>
    )
}