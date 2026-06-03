"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

// Import required modules
import SwiperClass from 'swiper/types/swiper-class';
import { Thumbs, FreeMode, Navigation, Pagination } from 'swiper/modules';
import { HeaderInfo, HeaderContext, HeaderSlides, HeaderImage, HeaderThumbnail, HeaderThumbnailTitle, HeaderThumbnailInfo, HeaderThumbnailImage } from './header';
import VideoModal from './videoModal';

export default function HeaderSlide({ id, image, headline, description, videoUrl }: SlideProps) {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>()
    const slides = [
        {
            id: 1,
            image: "/static/header-image-1.jpg",
            headline: "Amphibious Operations",
            description:
                "Military operations launched from the sea by amphibious forces to conduct landing force operations within the littorals.",
        },
        {
            id: 2,
            image: "/static/header-image-2.jpg",
            headline: "Humanitarian Assistance & Disaster Response",
            description:
                " Facilitates and enhances cooperation on preparedness and response strategies to the unpredictable situations in the Philippines.",
        },
        {
            id: 3,
            image: "/static/header-image-3.jpg",
            headline: "Special Operations",
            description:
                " Military operations that are unconventional and carried out by dedicated special forces and other special operations forces units.",
        },
        {
            id: 4,
            image: "/static/header-image-4.jpg",
            headline: "Coastal Defense",
            description:
                "Protection of the coast against military or naval invasion.",
        },
    ];

    const thumbSlideStyles = `
        relative inline-flex flex-shrink-0 h-full w-[3px] opacity-70 grayscale border-t-[5px] border-white/40 hover:opacity-100
        

        [&.swiper-slide-thumb-active]:!w-[120px] 
        [&.swiper-slide-thumb-active]:opacity-100
        [&.swiper-slide-thumb-active]:grayscale-0 
        [&.swiper-slide-thumb-active]:border-primary-500
    `;

    return (
        <>
            <HeaderSlides>
                <Swiper
                    loop={true}
                    spaceBetween={0}
                    navigation={false}
                    pagination={{
                        clickable: true
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Pagination, Thumbs]}
                    className="w-full h-full [--swiper-navigation-color:var(--color-primary-400)] [--swiper-pagination-color:(var(--color-primary-400))] [&_.swiper-pagination-bullet-active]:bg-primary-400"
                >
                    <SwiperSlide>
                        <HeaderContext>
                            <HeaderInfo>
                                <h1 className="text-[40px] font-medium text-white mb-0!">
                                    MOST READY
                                </h1>
                                <p className="text-[18px] text-white mb-4!">
                                    <strong>M</strong>aritime Soul, <strong>O</strong>ccupational Health and Safety, <strong>S</strong>
                                    pecialized Forces, <strong>T</strong>raining as a routine grind. <strong>R</strong>elevant and
                                    Reliable, <strong>E</strong>thos and Enthusiasm, <strong>A</strong>daptive, <strong>D</strong>uty to
                                    God Country and People, <strong>Y</strong>
                                    ield to the interest of the Corps.
                                </p>
                                <VideoModal />
                            </HeaderInfo>
                        </HeaderContext>
                        {/* headerImage */}
                        <div className="absolute inset-0 w-full h-full">
                            <video
                                poster="/static/video-poster-image.jpg"
                                disablePictureInPicture
                                autoPlay
                                playsInline
                                muted
                                controls={false}
                                loop
                                className="w-full h-full object-cover"
                            >
                                <source
                                    src="https://static.marinecorps.mil.ph/pmc-video-preview.av1.mp4"
                                    type="video/mp4; codecs='av01.0.05M.08'; profiles='isom,av01,iso2,mp41'"
                                />
                                <source src="https://static.marinecorps.mil.ph/pmc-video-preview.mp4" type="video/mp4" />
                            </video>
                            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-slate-900/90" />
                        </div>
                    </SwiperSlide>
                    {slides.map((slide) => (
                        <SwiperSlide className="relative w-full h-full flex items-center justify-start overflow-hidden ">
                            <HeaderContext>
                                <HeaderInfo>
                                    <h1 className="text-4xl font-medium text-white mb-4 ">
                                        {slide.headline}
                                    </h1>

                                    <p className="text-[18px] text-white">
                                        {slide.description}
                                    </p>
                                </HeaderInfo>
                            </HeaderContext>
                            <HeaderImage>
                                <Image
                                    src={slide.image}
                                    alt={slide.headline}
                                    fill
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-linear-to-b from-black/90 via-transparent to-slate-900/90" />
                            </HeaderImage>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <HeaderThumbnail>
                    <HeaderThumbnailTitle>
                        Marine Corps Ready
                    </HeaderThumbnailTitle>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={false}
                        spaceBetween={2}
                        slidesPerView={5}
                        freeMode={false}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className='headerSwiper2 w-full '>
                        <SwiperSlide className={`cursor-pointer relative ${thumbSlideStyles} transition-all ease-in-out duration-200`}>
                            <HeaderThumbnailInfo>
                                01
                            </HeaderThumbnailInfo>
                            <HeaderThumbnailImage>
                                <Image
                                    src="/static/header-video-preview.jpg"
                                    alt="Philippine Marine Corps"
                                    fill
                                    className="thumbnail-image object-cover transition-all duration-300 ease-in-out"
                                />
                            </HeaderThumbnailImage>
                        </SwiperSlide>
                        {slides.map((slide, index) => (
                            <SwiperSlide key={slide.id} className={`cursor-pointer relative ${thumbSlideStyles} transition-all ease-in-out duration-200`}>
                                <HeaderThumbnailInfo>
                                    {String(index + 2).padStart(2, '0')}
                                </HeaderThumbnailInfo>
                                <HeaderThumbnailImage>
                                    <Image src={slide.image} alt={slide.headline} fill className="thumbnail-image object-cover transition-all duration-300 ease-in-out " />
                                </HeaderThumbnailImage>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </HeaderThumbnail>
            </HeaderSlides>
        </>
    )
}