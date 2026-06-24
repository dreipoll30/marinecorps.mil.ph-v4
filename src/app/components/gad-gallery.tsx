"use client"

import PhotoSwipe from "photoswipe";
import { Articles, ArticleItem, ArticleImage, ArticleIDetails, ArticleTitle, GalleryImage, GalleryItem } from "./articles";
import { galleries } from "./data/gad";
import React from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import 'photoswipe/style.css'


export function Gallery() {

    const openLightBox = (e: React.MouseEvent, images: typeof galleries[0]['images']) => {
        e.preventDefault();

        const lightbox = new PhotoSwipeLightbox({
            dataSource: images.map(img => ({
                src: img.url,
                width: img.width,
                height: img.height,
                alt: 'Gallery Image'
            })),
            pswpModule: () => import('photoswipe')
        });
        lightbox.init();
        lightbox.loadAndOpen(0);
    }
    return (
        <Articles>
            {galleries.map((gallery, index) => (
                <GalleryItem 
                    key={index} 
                    className="border-2 rounded-sm px-2 py-px bg-gray-300!" 
                    // Pass the event 'e' into the function
                    onClick={(e) => openLightBox(e, gallery.images)}
                >
                    <GalleryImage>
                        <img src={gallery.placeholder.url}
                            width="1000" height="800"
                            className="block w-full h-auto"
                            alt={gallery.title} />
                    </GalleryImage>
                    <ArticleIDetails>
                        <ArticleTitle>
                            {gallery.title}
                        </ArticleTitle>
                    </ArticleIDetails>
                </GalleryItem>
            ))}
        </Articles>
    )
}