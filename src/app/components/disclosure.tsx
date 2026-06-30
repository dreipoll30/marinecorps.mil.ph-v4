'use client';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons-react'
import { ReactNode } from 'react'
import { DisclosureIcon, DisclosureItem, DisclosureTitle } from './faq-disclosure';
import { Data, VerticalDataGroup } from './data-group';
import Link from 'next/link';
import { formatDate } from '../libs/formatDate';
import { formatSize } from '../libs/fortmatSize';

interface DisclosureProps {
    items: {
        title: string;
        files: {
            name: string;
            createdAt: string;
            size: number;
            path: string;
        }[];
    }[];
}


export default function DisclosureComponent({ items }: DisclosureProps) {
    return (
        <div className="flex flex-col w-full border border-gray-300 rounded-sm mb-7">
            {items.map((item, index) => (
                <Disclosure as={DisclosureItem} >
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={` flex flex-row rounded-t-sm justify-between items-start w-full px-4.5 py-3 border-none font-medium cursor-pointer hover:bg-gray-100 ${open ? "bg-gray-100  items-center" : "bg-none"}`}>
                                <DisclosureTitle>{item.title}</DisclosureTitle>
                                <DisclosureIcon>
                                    <IconChevronDown size={18} stroke={2} className={`flex items-center transition-transform duration-200 mt-1 ${open ? "rotate-180" : "rotate-0"}`} />
                                </DisclosureIcon>
                            </Disclosure.Button>
                            <Disclosure.Panel className="flex flex-col w-full px-4.5">
                                {item.files.map((file, fileIndex) => (
                                    <DisclosureItem className='py-3 last:mb-3' >
                                        <VerticalDataGroup className='text-left '>
                                            <Link href={file.path} className='w-full font-medium text-blue-800' target='_blank'>{file.name}
                                            </Link>
                                            <Data className='text-[16px]! text-slate-600!'>
                                                Posted on {formatDate(file.createdAt)} - {formatSize(file.size)}
                                            </Data>
                                        </VerticalDataGroup>
                                    </DisclosureItem>

                                ))}

                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}

        </div>
    );
}
