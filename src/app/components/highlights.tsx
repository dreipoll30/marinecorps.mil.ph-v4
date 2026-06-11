'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Button } from './button';
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function Highlights() {
  return (
    /* .highlights */
    <div className="flex flex-col flex-nowrap w-full h-[500px] p-0 bg-gray-100 border-t border-b border-white min-[769px]:h-[700px]">

      {/* .highlights__wrapper */}
      <HighlightsWrapper>

        {/* .highlights__slides */}
        <HighlightSlides>
          <Swiper
            slidesPerView={1}
            spaceBetween={1}
            loop={false}
            pagination={{
              clickable: true
            }}
            navigation={false}
            modules={[Pagination, Navigation]}
            /* Targets inner Swiper core pagination elements dynamically using Tailwind arbitrary selectors */
            className="h-full relative 
              [&_.swiper-pagination]:hidden! min-[769px]:[&_.swiper-pagination]:flex! 
              [&_.swiper-pagination]:absolute [&_.swiper-pagination]:top-1/2 [&_.swiper-pagination]:-translate-y-1/2 
              [&_.swiper-pagination]:left-6 min-[769px]:[&_.swiper-pagination]:left-9 
              [&_.swiper-pagination]:flex-col [&_.swiper-pagination]:w-auto [&_.swiper-pagination]:h-auto 
              [&_.swiper-pagination]:p-3 min-[769px]:[&_.swiper-pagination]:p-4.5 
              [&_.swiper-pagination]:transition-all [&_.swiper-pagination]:duration-200 
              
              [&_.swiper-pagination-bullet]:w-3 [&_.swiper-pagination-bullet]:h-3 
              [&_.swiper-pagination-bullet]:my-1.5 [&_.swiper-pagination-bullet]:mx-0 
              [&_.swiper-pagination-bullet]:border-2 [&_.swiper-pagination-bullet]:border-white 
              [&_.swiper-pagination-bullet]:bg-transparent [&_.swiper-pagination-bullet]:opacity-50 
              [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-200
              min-[769px]:[&_.swiper-pagination-bullet]:w-3.5 min-[769px]:[&_.swiper-pagination-bullet]:h-3.5 
              min-[769px]:[&_.swiper-pagination-bullet]:my-2.25 
              
              hover:[&_.swiper-pagination-bullet]:opacity-100 
              [&_.swiper-pagination-bullet-active]:bg-white! [&_.swiper-pagination-bullet-active]:opacity-100!"
          >
            <SwiperSlide className="relative w-full h-full">

              {/* .highlights__context */}
              <HighlightContext>
                <div className="flex flex-col justify-start items-start pt-9 mb-9">
                  <h1 className="text-white text-left lg:text-4xl text-3xl mb-0">
                    The Leader&apos;s Corner
                  </h1>
                </div>

                <div className="flex flex-col flex-nowrap w-full pr-9">
                  <h3 className="text-white lg:text-2xl text-[20px] leading-tight mb-3">
                    Commandant, Philippine Marine Corps
                    <span className="text-primary-500 block ">
                      MGEN VICENTE MAP BLANCO III PN(M)
                    </span>
                  </h3>

                  <p className="text-white mb-8 line-clamp-3 leading-relaxed text-lg opacity-90 my-3  max-w-143">
                    MGEN BLANCO III started his military career when he entered the Philippine Military Academy (PMA) as
                    a cadet in 1987. He graduated number 12 out of 218 cadets of the PMA Class of 1991 with a degree of
                    Bachelor of Science.
                  </p>

                  <Button variant='ghost' href='/'>
                    Check the PMC Leaders
                    <IconArrowNarrowRight className="lg:w-6 lg:h-6 w-5 h-5 text-white" />
                  </Button>
                </div>
              </HighlightContext>

              <div className="absolute inset-0 z-10 flex flex-row flex-nowrap justify-start items-center w-full h-full overflow-hidden transition-all duration-200 ease-in-out">
                <Image
                  src="/static/leaders-highlights.jpg"
                  alt="Philippine Marine Corps"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="object-top"
                  priority
                />
                <div className="absolute top-0 right-0 bottom-0 z-20 w-full h-full lg:bg-transparent bg-[#1f2937]/50 bg-linear-to-l from-[#1f2937] to-[#1f2937]/5 opacity-100 min-[577px]:w-[75%]" />
              </div>
            </SwiperSlide>
          </Swiper>
        </HighlightSlides>
      </HighlightsWrapper>
    </div>
  );
}

export function HighlightsWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full max-w-full h-full mx-auto p-0">{children}</div>
  )
}

export function HighlightSlides({ children }: { children: ReactNode }) {
  return (
    <div className="block w-full h-full">{children}</div>
  )
}

export function HighlightContext({ children }: { children: ReactNode }) {
  return (
    <div className="z-30 absolute top-0 right-0 bottom-0 flex flex-col flex-nowrap justify-center w-[calc(100%-24px)] h-full pt-6 pr-0 pb-9 pl-0 min-[577px]:w-[60%] min-[769px]:py-18 min-[1201px]:w-1/2 min-[1201px]:py-24">{children}</div>
  )
}