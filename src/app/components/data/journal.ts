type JournalItem = {
    id: number;
    date_posted: string;
    title: string;
    alt: string;
    cover_image: string;
}

export const journals: JournalItem[] = [
    {
        id: 1,
        date_posted: "May 29, 2026",
        title: "Philippine Marines and Japan Ground Self-Defense Force Conduct Amphibious Operation in Abulug, Cagayan",
        alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-1.jpg",
    },
    {
        id: 2,
        date_posted: "May 28, 2026",
        title: "Ph, Japanese Troops Exchange Martial",
        alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-2.jpg",
    },
    {
        id: 3,
        date_posted: "May 28, 2026",
        title: "The Philippine Marine Corps (PMC) activated its newest ready force",
        alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-3.jpg",
    },
]