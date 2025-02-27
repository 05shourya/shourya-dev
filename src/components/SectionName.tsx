import { Montserrat, Orbitron, Space_Grotesk } from "next/font/google";
import React from "react";

type Props = {
    label: string;
};
const orbitron = Orbitron({ subsets: ["latin"], weight: ["400"] });
const spaceGrotsek = Space_Grotesk({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const SectionName = ({ label }: Props) => {
    return (
        <div className="w-full flex items-center gap-2 sm:gap-4 my-3 sm:my-5 md:my-8">
            <div className="h-[2px] sm:h-1 md:h-[3px] bg-foreground/50 flex-1"></div>
            <h1
                className={
                    "text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest text-center sectionName " +
                    montserrat.className
                }
            >
                {label.toUpperCase()}
            </h1>
            <div className="h-[2px] sm:h-1 md:h-[3px] bg-foreground/50 flex-1"></div>
        </div>
    );
};

export default SectionName;
