"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ShelfSlide, ShelfSlideDetails, ShelfSlideDownloadButton, ShelfSlideImage, ShelfSlideTag } from './shelf';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { citemars } from './data/citemars';

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
                    {citemars.map((citemar) => (
                        <SwiperSlide key={citemar.title} className="">
                            <ShelfSlide>
                                <ShelfSlideImage src={citemar.image.url} alt={citemar.image.altText}/>
                                <ShelfSlideDetails title={citemar.title}>
                                    <ShelfSlideDownloadButton href={citemar.src}/>
                                </ShelfSlideDetails>
                            </ShelfSlide>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}