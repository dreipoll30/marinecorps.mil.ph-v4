type EventItems = {
    id: number;
    date: string;
    name: string;
    status: string;
    gradient: string;
}

export const events: EventItems[] = [
    {
        id: 1,
        date: "2025 May",
        name: "Kamandag Exercise to Return in 2025",
        status: "Upcoming",
        gradient: "from-green-950 via-green-700 to-green-300"
    },
    {
        id: 2,
        date: "2025 August 29",
        name: "CPMC’s Book Review Contest CY 2025",
        status: "Ongoing",
        gradient: "from-blue-950 via-blue-800 to-blue-400"
    },
     {
        id: 3,
        date: "2025 May 30",
        name: "Essay Writing Contest Cy 2025",
        status: "Ongoing",
        gradient: "from-blue-950 via-blue-800 to-blue-400"
    },
    {
        id: 4,
        date: "2025 July 7 - 2025 July 11",
        name: "Pacific Amphibious Leaders Symposium 2025",
        status: "Upcoming",
        gradient: "from-orange-800 via-orange-400 to-yellow-200"
    },
    {
        id: 5,
        date: "2025 July 7 - 2025 July 11",
        name: "Pacific Amphibious Leaders Symposium 2025",
        status: "Completed",
        gradient: "from-stone-700 via-gray-400 to-stone-200"
    },

]