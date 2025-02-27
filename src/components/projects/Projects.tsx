"use client";

import React from "react";
import SectionName from "../SectionName";
import { useTheme } from "next-themes";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import {
    FaComment,
    FaJava,
    FaPlane,
    FaReact,
    FaRobot,
    FaWallet,
} from "react-icons/fa";
import {
    SiFirebase,
    SiFlutter,
    SiMongodb,
    SiNextdotjs,
    SiReact,
    SiSpringboot,
} from "react-icons/si";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import { Bebas_Neue, Poppins, Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

type Props = {};

const content = [
    {
        title: "Tripaza",
        description:
            "An AI-driven trip planning website developed with Next.js. Users can generate detailed day-wise itineraries for any destination, get personalized recommendations, and explore travel suggestions based on their preferences. It simplifies travel planning by automating the research process.",
        src: "/projects/tripaza.png",
        url: "https://tripaza.in/",
        content: (
            <img
                src="/projects/tripaza.png"
                alt=""
                className="rounded-md w-full h-auto object-cover"
            />
        ),
        icons: [FaReact, SiNextdotjs, SiMongodb, FaRobot, FaPlane],
    },
    {
        title: "Chat-Sphere",
        description:
            "A real-time chat application built with React and Firebase. It enables seamless messaging with instant updates and user authentication. With real-time data handling, Chatsphere delivers a smooth and engaging communication experience.",
        src: "/projects/chat-sphere.png",
        url: "https://github.com/05shourya/Chat-Sphere",
        content: (
            <img
                src="projects/chat-sphere.png"
                alt=""
                className="rounded-md w-full h-auto object-cover"
            />
        ),
        icons: [FaReact, SiFirebase, FaComment],
    },
    {
        title: "MockTrade",
        description:
            "MockTrade is a crypto trading simulation platform that allows users to buy, sell, and transfer coins in a risk-free environment. It features user authentication for secure access and utilizes MongoDB as the database with a Spring-powered backend to ensure efficient and scalable performance. ",
        src: "/projects/worthy.jpg",
        url: "https://github.com/05shourya/MockTrade",
        content: (
            <img
                src="projects/MockTrade.png"
                alt=""
                className="rounded-md w-full h-auto object-cover"
            />
        ),
        icons: [SiSpringboot, SiReact, SiMongodb, FaJava],
    },
    {
        title: "Worthy",
        description:
            "A powerful transaction tracker app built using Flutter. It allows users to log transactions, categorize expenses, and manage multiple accounts effortlessly. With an intuitive UI and real-time insights, it helps users stay on top of their finances and make informed spending decisions.",
        src: "/projects/worthy.jpg",
        url: "https://github.com/05shourya/Worthy",
        content: (
            <div className="w-full h-[25rem] flex gap-5 flex-row justify-center items-center">
                <img
                    src="/projects/worthy_home_page.jpg"
                    alt=""
                    className="rounded-sm h-full w-auto"
                />
                <img
                    src="/projects/worthy_category_page.jpg"
                    alt=""
                    className="rounded-sm h-full w-auto"
                />
            </div>
        ),
        icons: [SiFlutter, FaWallet],
    },
];

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300"] });

const Projects = (props: Props) => {
    const { theme } = useTheme();
    const isMobile = useMediaQuery({ maxWidth: 640 });

    return (
        <>
            <div className="flex flex-col min-h-screen justify-start gap-8 items-center">
                <SectionName label="Projects" />
                <div className="w-full flex justify-center items-center py-9 ">
                    {!isMobile && <StickyScroll content={content} />}
                    {isMobile && (
                        <div className="w-full flex flex-col gap-5 items-center justify-center p-6">
                            {content.map((project, index) => (
                                <div
                                    className="flex flex-col gap-5 border p-4 bg-background max-w-md rounded-md"
                                    key={index}
                                >
                                    <h1
                                        className={cn(
                                            "tracking-widest font-black text-3xl ",
                                            bebas_neue.className
                                        )}
                                    >
                                        {project.title}
                                    </h1>
                                    {project.content}
                                    <p
                                        className={cn(
                                            " font-sm text-justify",
                                            poppins.className
                                        )}
                                    >
                                        {project.description}
                                    </p>
                                    <div className="flex w-full flex-row gap-3 flex-wrap items-center">
                                        {project.icons.map(
                                            (ProjectIcon, index) => (
                                                <ProjectIcon
                                                    size={24}
                                                    key={index}
                                                />
                                            )
                                        )}
                                    </div>
                                    <Button
                                        onClick={() => window.open(project.url)}
                                    >
                                        View
                                    </Button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Projects;
