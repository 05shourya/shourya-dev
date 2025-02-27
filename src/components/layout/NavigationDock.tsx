"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";

import {
    Code2Icon,
    FolderKanbanIcon,
    HomeIcon,
    UserRoundIcon,
} from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

const scrollToSection = (keyword: string) => {
    if (keyword.toLowerCase() === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const sections = document.querySelectorAll('[class*="sectionName"]');

    for (const section of sections) {
        if (section.innerHTML.toLowerCase().includes(keyword.toLowerCase())) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            break;
        }
    }
};

export function NavigationDock() {
    return (
        <div className="fixed bottom-10 w-full flex flex-row justify-center items-center z-50">
            <Dock
                iconMagnification={100}
                className="gap-0 sm:gap-8 md:gap-10 cursor-hover scale-up"
            >
                <DockIcon>
                    <HomeIcon
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        onClick={() => scrollToSection("home")}
                    />
                </DockIcon>
                <DockIcon>
                    <UserRoundIcon
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        onClick={() => scrollToSection("About")}
                    />
                </DockIcon>
                <DockIcon>
                    <Code2Icon
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        onClick={() => scrollToSection("Skills")}
                    />
                </DockIcon>
                <DockIcon>
                    <FolderKanbanIcon
                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                        onClick={() => scrollToSection("Projects")}
                    />
                </DockIcon>
            </Dock>
        </div>
    );
}
