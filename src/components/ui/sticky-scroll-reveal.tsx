"use client";
import React, { useEffect, useRef, useState } from "react";
import { inView, useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "./button";
import { Bebas_Neue, Rajdhani } from "next/font/google";
import { cn } from "@/lib/utils";

const MotionButton = motion(Button);

const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["400"] });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        src: string;
        icons: any[];
        content?: React.ReactNode | any;
        url: string;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref,
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const sectionHeight = 1 / cardLength; // Each section's height in normalized scroll range
        const offset = sectionHeight * (3 / 4); // Change at 75% of the section

        // Find the section that is at least 3/4th scrolled
        const sectionIndex = Math.floor((latest + offset) * cardLength);

        if (sectionIndex !== activeCard) {
            setActiveCard(sectionIndex);
        }
    });

    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(
                    entry.isIntersecting && entry.intersectionRatio === 1
                );
            },
            { root: null, threshold: 1 } // Fully visible when 100% in view
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
        const target = e.currentTarget;

        // If scrolling down and at the bottom, pass control back to page
        if (
            e.deltaY > 0 &&
            target.scrollTop + target.clientHeight >= target.scrollHeight
        ) {
            target.blur(); // Remove focus so page continues scrolling
            console.log("blurred");
        }

        // If scrolling up and at the top, pass control back to page
        if (e.deltaY < 0 && target.scrollTop === 0) {
            target.blur(); // Remove focus so page continues scrolling
            console.log("blurred");
        }
    };

    return (
        <motion.div
            className={cn(
                "h-[30rem] overflow-y-auto w-full flex flex-row justify-center relative space-x-10 rounded-lg scrollbar-none bg-background/90"
            )}
            ref={ref}
            onWheel={isInView ? handleScroll : undefined}
        >
            <div className="div relative flex items-start flex-1 ">
                <div className="w-full flex flex-col justify-center items-center">
                    {content.map((item, index) => (
                        <div
                            key={item.title + index}
                            className="w-max h-[30rem] flex flex-col justify-center gap-8 px-6 "
                        >
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className={cn(
                                    "text-5xl font-bold text-primary tracking-widest",
                                    bebas_neue.className
                                )}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className={cn(
                                    "text-xl text-current max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-lg text-justify",
                                    rajdhani.className
                                )}
                            >
                                {item.description}
                            </motion.p>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="flex flex-row w-full flex-wrap gap-3"
                            >
                                {item.icons.map((ProjectIcon, index) => (
                                    <ProjectIcon size={24} key={index} />
                                ))}
                            </motion.div>
                            <MotionButton
                                className="max-w-44"
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                onClick={() => window.open(item.url)}
                            >
                                View
                            </MotionButton>
                        </div>
                    ))}
                </div>
            </div>

            <div className=" w-full h-full sticky top-0 justify-center items-center flex-1">
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};
