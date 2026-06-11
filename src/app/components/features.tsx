import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Data structured directly from your layout
const marineFeaturesData = [
  {
    id: 1,
    title: "Volunteer as a Marine",
    excerpt: "Do you have what it takes to become a member of Philippine Marine Corps?",
    href: "/join/marines",
    src: "/static/features-image-1.jpg",
    alt: "Philippine Marine Corps",
    gradientClass: "from-[#6e6e6b] to-transparent", // features__image--a
  },
  {
    id: 2,
    title: "Become a Civilian Workforce",
    excerpt: "For the motherland. Join the workforce for the future of Marine Corps.",
    href: "/join/civilian",
    src: "/static/features-image-2.jpg",
    alt: "Philippine Marine Corps",
    gradientClass: "from-[#996346] to-transparent", // features__image--b
  },
  {
    id: 3,
    title: "Volunteer as Reservist",
    excerpt: "For the love of country. Are you ready to be a Marine Corps Reservist?",
    href: "/join/reservist",
    src: "/static/features-image-3.jpg",
    alt: "Philippine Marine Corps",
    gradientClass: "from-[#233d47] to-transparent", // features__image--c
  },
];

export function FeatureDetails({ href, title, excerpt }) {
  return (
    <Link 
      href={href} 
      className="z-20 absolute inset-0 flex flex-col flex-nowrap justify-end w-full h-full p-6 no-underline min-[577px]:p-9 min-[1201px]:pr-[15%] min-[1441px]:pr-[25%] space-y-3"
    >
      <h1 className="font-heading font-normal text-white no-underline text-[28px] leading-8">
        {title}
      </h1>
      <p className="text-white m-0 line-clamp-3 text-[18px]">
        {excerpt}
      </p>
    </Link>
  );
}

export function FeatureImage({ src, alt, gradientClass }) {
  return (
    <div className="absolute inset-0 z-10 block w-full h-full overflow-hidden transition-all duration-200 ease-in-out transform group-hover:scale-105">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="object-top"
      />
      
      {/* Overlay: Pseudo ::before */}
      <div className={`absolute inset-0 z-20 w-full h-full bg-linear-to-t ${gradientClass} opacity-100 transition-all duration-200 ease-in-out group-hover:opacity-0`} />
      
      {/* Overlay: Pseudo ::after */}
      <div className={`absolute inset-0 z-20 w-full h-full bg-linear-to-t ${gradientClass} opacity-50 transition-all duration-200 ease-in-out`} />
    </div>
  );
}

export function FeatureItem({ item }) {
  return (
    <div className="group relative flex flex-col flex-nowrap justify-center items-center w-full min-h-62.5 bg-gray-300 overflow-hidden">
      <FeatureDetails 
        href={item.href} 
        title={item.title} 
        excerpt={item.excerpt} 
      />
      <FeatureImage 
        src={item.src} 
        alt={item.alt} 
        gradientClass={item.gradientClass} 
      />
    </div>
  );
}

export function FeatureGrid({ items }) {
  return (
    <div className="grid grid-cols-1 gap-0 w-full h-full min-[577px]:grid-cols-3 min-[577px]:gap-px">
      {items.map((item) => (
        <FeatureItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export function Features() {
  return (
    <section className="flex flex-col flex-nowrap w-full h-auto p-0 bg-white min-[577px]:h-75 min-[1201px]:h-87.5">
      <div className="flex w-full max-w-full h-full mx-auto p-0">
        <FeatureGrid items={marineFeaturesData} />
      </div>
    </section>
  );
}