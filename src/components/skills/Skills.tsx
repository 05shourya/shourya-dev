"use client";

import React, { useEffect, useState } from "react";
import SectionName from "../SectionName";
import { OrbitingCircles } from "../magicui/orbiting-circles";
import { FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import {
    SiExpress,
    SiFirebase,
    SiFlutter,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiPostgresql,
    SiSpringboot,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const Skills = () => {
    function useResponsiveSizes(defaultRadius: number, defaultSize: number) {
        const [radius, setRadius] = useState(defaultRadius);
        const [iconSize, setIconSize] = useState(defaultSize);

        useEffect(() => {
            function updateSizes() {
                const width = window.innerWidth;
                setRadius(Math.max(50, Math.min(defaultRadius, width * 0.4)));
                setIconSize(Math.max(20, Math.min(defaultSize, width * 0.1)));
            }

            updateSizes();
            window.addEventListener("resize", updateSizes);
            return () => window.removeEventListener("resize", updateSizes);
        }, [defaultRadius, defaultSize]);

        return { radius, iconSize };
    }

    const { radius: outerRadius, iconSize: outerIconSize } = useResponsiveSizes(
        300,
        50
    );
    const { radius: middleRadius, iconSize: middleIconSize } =
        useResponsiveSizes(200, 50);
    const { radius: innerRadius, iconSize: innerIconSize } = useResponsiveSizes(
        130,
        50
    );
    const { radius: coreRadius, iconSize: coreIconSize } = useResponsiveSizes(
        50,
        50
    );

    return (
        <>
            <section className="flex flex-col w-full min-h-screen items-center justify-center">
                <SectionName label="Skills" />
                <div className="relative flex justify-center items-center w-full h-[60vh] md:h-[80vh] lg:h-screen max-w-full overflow-hidden">
                    {/* Outer - Tools & Databases */}
                    <OrbitingCircles
                        radius={outerRadius}
                        iconSize={outerIconSize}
                        speed={1}
                        path={false}
                        className="scale-up"
                    >
                        <SiFirebase color="#FFCA28" size={outerIconSize} />
                        <SiMongodb color="#47A248" size={outerIconSize} />
                        <SiMysql color="#4479A1" size={outerIconSize} />
                        <SiPostgresql color="#336791" size={outerIconSize} />
                    </OrbitingCircles>

                    {/* Middle - Backend */}
                    <OrbitingCircles
                        radius={middleRadius}
                        iconSize={middleIconSize}
                        reverse={true}
                        speed={1.5}
                        path={false}
                        className="scale-up"
                    >
                        <FaNodeJs color="#68A063" size={middleIconSize} />
                        <SiExpress color="#ffffff" size={middleIconSize} />
                        <SiSpringboot color="#6DB33F" size={middleIconSize} />
                        <FaJava color="#007396" size={middleIconSize} />
                    </OrbitingCircles>

                    {/* Inner - Frontend */}
                    <OrbitingCircles
                        radius={innerRadius}
                        iconSize={innerIconSize}
                        speed={2}
                        path={false}
                        className="scale-up"
                    >
                        <FaReact color="#61DAFB" size={innerIconSize} />
                        <SiNextdotjs color="#ffffff" size={innerIconSize} />
                        <SiTailwindcss color="#38B2AC" size={innerIconSize} />
                        <SiTypescript color="#3178C6" size={innerIconSize} />
                    </OrbitingCircles>

                    {/* Core - Core Skills */}
                    <OrbitingCircles
                        radius={coreRadius}
                        iconSize={coreIconSize}
                        path={false}
                        className="scale-up"
                    >
                        <SiJavascript color="#F7DF1E" size={coreIconSize} />
                        <FaJava color="#007396" size={coreIconSize} />
                        <SiFlutter color="#02569B" size={coreIconSize} />
                    </OrbitingCircles>
                </div>
            </section>
        </>
    );
};

export default Skills;
