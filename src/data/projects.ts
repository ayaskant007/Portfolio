export interface Project {
    title: string;
    category: string;
    description: string;
    tech: string[];
    link?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Parano!a",
        category: "Game Development",
        description: "A psychological thriller game with 3 intense levels. Experience fear and uncertainty in this immersive journey.",
        tech: ["Unity", "C#", "3D Modeling"],
        link: "#", // Placeholder as per request (Drive link > 1GB)
    },
    {
        title: "Vikas Bhi, Virasat Bhi",
        category: "Web Development",
        description: "Responsive website for CRYPTICON 2025. Powered by GSAP 3 for smooth animations and hosted on Netlify.",
        tech: ["HTML", "CSS", "JS", "GSAP 3"],
        link: "https://vikas-bhi-virasat-bhi.netlify.app/", // Assuming a link or placeholder
    },
    {
        title: "The Last Ember",
        category: "Game Development",
        description: "A narrative-driven game built using Ren'Py. Explore a story of survival and sacrifice.",
        tech: ["Ren'Py", "Python", "Digital Art"],
        link: "#",
    },
];
