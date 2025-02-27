"use client";

import React from "react";
import SectionName from "../SectionName";
import AboutMeTerminal from "./AboutMeTerminal";
import { useInView } from "react-intersection-observer";

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures it animates only once
        threshold: 0.2, // Triggers when 20% of it is visible
    });

    return (
        <>
            <div ref={ref} className="w-full min-h-screen flex flex-col gap-6 ">
                <SectionName label="About me" />
                {inView && <AboutMeTerminal />}
            </div>
        </>
    );
};

export default About;
