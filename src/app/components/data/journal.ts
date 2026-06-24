type JournalItem = {
    id: number;
    date_posted: string;
    title: string;
    cover_image_alt: string;
    slug:  string;
    cover_image: string;
    posted_by: string;
    content: string [];
}

export const journals: JournalItem[] = [
    {
        id: 1,
        slug: "-1",
        date_posted: "May 29, 2026",
        title: "PMC Participates in Simulataneous Nationwide Earthquake Drill",
        cover_image_alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-1.jpg",
        posted_by: "Posted by Administrator MCPAO",
        content: [
            "The Philippine Marine Corps (PMC) participated in the Simultaneous Earthquake Drill spearheaded by the National Disaster Risk Reduction and Management Council (NDRRMC) through the Office of Civil Defense (OCD) at the Bonifacio Naval Station Grandstand, Fort Bonifacio, Taguig City, on 18 June 2026.",
            "As part of the activity, PMC personnel conducted the proper “Duck, Cover, and Hold” procedure, followed by an orderly evacuation to designated safe areas. The exercise aimed to enhance disaster preparedness, increase awareness, and reinforce the appropriate actions required during earthquake emergencies and related hazards.",
            "In addition to the central event, the PMC simultaneously conducted earthquake drills across its various units, including participating forces engaged in Exercise KAMANDAG 10-2026. These activities support the disaster preparedness initiatives of the NDRRMC and OCD while strengthening the individual and collective readiness, resilience, and emergency response capabilities of participating personnel.",
            "By rehearsing realistic emergency procedures, the PMC continues to ensure that every Marine remains disciplined, alert, and capable of executing proper safety protocols whether in training, exercises, deployments, or actual operations.",
            "Through this simultaneous drill, the PMC reaffirmed its commitment to disaster risk reduction and management, demonstrating its readiness to respond effectively in times of crisis while continuing to serve and protect the nation.",
        ]
    },
    {
        id: 2,
        slug: "-2",
        date_posted: "May 28, 2026",
        title: "Ph, Japanese Troops Exchange Martial",
        cover_image_alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-2.jpg",
        posted_by: "Posted by Administrator MCPAO",
         content: [
            "The Philippine Marine Corps (PMC) participated in the Simultaneous Earthquake Drill spearheaded by the National Disaster Risk Reduction and Management Council (NDRRMC) through the Office of Civil Defense (OCD) at the Bonifacio Naval Station Grandstand, Fort Bonifacio, Taguig City, on 18 June 2026.",
            "As part of the activity, PMC personnel conducted the proper “Duck, Cover, and Hold” procedure, followed by an orderly evacuation to designated safe areas. The exercise aimed to enhance disaster preparedness, increase awareness, and reinforce the appropriate actions required during earthquake emergencies and related hazards.",
            "In addition to the central event, the PMC simultaneously conducted earthquake drills across its various units, including participating forces engaged in Exercise KAMANDAG 10-2026. These activities support the disaster preparedness initiatives of the NDRRMC and OCD while strengthening the individual and collective readiness, resilience, and emergency response capabilities of participating personnel.",
            "By rehearsing realistic emergency procedures, the PMC continues to ensure that every Marine remains disciplined, alert, and capable of executing proper safety protocols whether in training, exercises, deployments, or actual operations.",
            "Through this simultaneous drill, the PMC reaffirmed its commitment to disaster risk reduction and management, demonstrating its readiness to respond effectively in times of crisis while continuing to serve and protect the nation.",
        ]
    },
    {
        id: 3,
        slug: "-3",
        date_posted: "May 28, 2026",
        title: "The Philippine Marine Corps (PMC) activated its newest ready force",
        cover_image_alt: "Philippine Marine Corps",
        cover_image: "/static/stories-placeholder-3.jpg",
        posted_by: "Posted by Administrator MCPAO",
         content: [
            "The Philippine Marine Corps (PMC) participated in the Simultaneous Earthquake Drill spearheaded by the National Disaster Risk Reduction and Management Council (NDRRMC) through the Office of Civil Defense (OCD) at the Bonifacio Naval Station Grandstand, Fort Bonifacio, Taguig City, on 18 June 2026.",
            "As part of the activity, PMC personnel conducted the proper “Duck, Cover, and Hold” procedure, followed by an orderly evacuation to designated safe areas. The exercise aimed to enhance disaster preparedness, increase awareness, and reinforce the appropriate actions required during earthquake emergencies and related hazards.",
            "In addition to the central event, the PMC simultaneously conducted earthquake drills across its various units, including participating forces engaged in Exercise KAMANDAG 10-2026. These activities support the disaster preparedness initiatives of the NDRRMC and OCD while strengthening the individual and collective readiness, resilience, and emergency response capabilities of participating personnel.",
            "By rehearsing realistic emergency procedures, the PMC continues to ensure that every Marine remains disciplined, alert, and capable of executing proper safety protocols whether in training, exercises, deployments, or actual operations.",
            "Through this simultaneous drill, the PMC reaffirmed its commitment to disaster risk reduction and management, demonstrating its readiness to respond effectively in times of crisis while continuing to serve and protect the nation.",
        ]
    },
]

export async function fetchJournalBySlug(slug: string) :Promise<JournalItem | undefined> {
    const article = journals.find((journal) => journal.slug === slug)
    return article;
}