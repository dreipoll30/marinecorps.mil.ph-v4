"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ShelfSlide, ShelfSlideDetails, ShelfSlideImage, ShelfSlideTag } from './shelf';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';


type ImageProps = {
    url: string;
    altText: string
}
interface CitemarProps {
    image: ImageProps;
    title: string;
    issue: string;
    src: string;
    available: boolean;
}

const citemars: CitemarProps []= [
    {
        image: {
            url: '/citemar6/covers/citemar6-birthday-issue-2023-cover.jpg',
            altText: 'Citemar 6 Birthday Issue 2023'
        },
        title: 'Birthday Issue 2023',
        issue: 'PMC@73: Most Ready, Always Forward in the Defense and Security of our Maritime Nation',
        src: '/citemar6/pdf/citemar6-birthday-issue-2023.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2023-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2023'
        },
        title: 'Mid-Year Issue 2023',
        issue: 'The most ready to protect the nation without fear and without fail',
        src: '/citemar6/pdf/citemar6-midyear-issue-2023.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-birthday-issue-2022-cover.jpg',
            altText: 'Citemar 6 Birthday Issue 2022'
        },
        title: 'Birthday Issue 2022',
        issue: 'Katuwang ng bawat Pilipino tungo sa mas mapayapa, maunlad at nagkakaisang bansa',
        src: '/citemar6/pdf/citemar6-birthday-issue-2022.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2022-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2022'
        },
        title: 'Mid-Year Issue 2022',
        issue: 'Smarter Force',
        src: '/citemar6/pdf/citemar6-midyear-issue-2022.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-birthday-issue-2021-cover.jpg',
            altText: 'Citemar 6 Birthday Issue 2021'
        },
        title: 'Birthday Issue 2021',
        issue: 'Smarter Marines @ 71',
        src: '/citemar6/pdf/citemar6-birthday-issue-2021.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2021-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2021'
        },
        title: 'Mid-Year Issue 2021',
        issue: 'A Smarter Marine Corps',
        src: '/citemar6/pdf/citemar6-midyear-issue-2021.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-birthday-issue-2020-cover.jpg',
            altText: 'Citemar 6 Birthday Issue 2020'
        },
        title: 'Birthday Issue 2020',
        issue: 'Philippine Marine Corps',
        src: '/citemar6/pdf/citemar6-birthday-issue-2020.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2020-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2020'
        },
        title: 'Mid-Year Issue 2020',
        issue: 'Philippine Marine Corps',
        src: '/citemar6/pdf/citemar6-midyear-issue-2020.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-birthday-issue-2019-cover.jpg',
            altText: 'Citemar 6 Birthday Issue 2019'
        },
        title: 'Birthday Issue 2019',
        issue: 'Towards a highly capable national maneuver amphibious force-in-readiness',
        src: '/citemar6/pdf/citemar6-birthday-issue-2019.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2019-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2019'
        },
        title: 'Mid-Year Issue 2019',
        issue: 'National Maneuver Amphibious Force that our Maritime Nation can be Proud of',
        src: '/citemar6/pdf/citemar6-midyear-issue-2019.pdf',
        available: true
    },
    {
        image: {
            url: '/citemar6/covers/citemar6-midyear-issue-2018-cover.jpg',
            altText: 'Citemar 6 Mid-Year Issue 2018'
        },
        title: 'Mid-Year Issue 2018',
        issue: 'Heeding the call of a Maritime Nation',
        src: "/citemar6/pdf/citemar6-midyear-issue-2018.pdf",
        available: true
    }
];
export default function Citemars() {
    return (
        <div className="citemars-slider">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={false}
                pagination={{
                    
                    clickable: true
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    768: {
                        slidesPerView: 2
                    },
                    1201: {
                        slidesPerView: 3
                    }
                }}
                className="[--swiper-navigation-color:var(--color-white)] ">
                    {citemars.map((citemar: CitemarProps) => (
                        <SwiperSlide key={citemar.title} className="">
                            <ShelfSlide>
                                <ShelfSlideImage src={citemar.image.url} alt={citemar.image.altText}/>
                                <ShelfSlideDetails title={citemar.title} href={citemar.src}/>
                            </ShelfSlide>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}