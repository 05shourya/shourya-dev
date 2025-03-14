"use client";

import React from "react";
import { HyperText } from "../magicui/hyper-text";
import { TypingAnimation } from "../magicui/typing-animation";
import { WordRotate } from "../magicui/word-rotate";
import { RainbowButton } from "../magicui/rainbow-button";
import { Briefcase } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Space_Grotesk } from "next/font/google";
import { Poppins } from "next/font/google";
import { Raleway } from "next/font/google";
import { Lens } from "../magicui/lens";
import { Button } from "../ui/button";

const raleway = Raleway({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const spaceGrotsek = Space_Grotesk({
    subsets: ["latin"],
    weight: ["700"],
});

const Profile = () => {
    return (
        <div className="flex flex-col gap-10 w-full md:w-3/4 lg:w-1/2 sm:text-start text-center items-center px-4">
            <Lens
                zoomFactor={1.5}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
            >
                <img
                    src="/profiles/Shourya.jpg"
                    alt="Shourya Gupta"
                    className="rounded-full border-4 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover scale-down"
                />
            </Lens>

            <div className="flex flex-col gap-2">
                <TypingAnimation
                    className={`tracking-widest text-sm sm:text-lg font-bold opacity-80 ${poppins.className}`}
                >
                    Hello World!
                </TypingAnimation>

                <div className="flex flex-col">
                    <div
                        className={`flex flex-row ${spaceGrotsek.className}  items-center justify-center `}
                    >
                        <h1 className="tracking-widest font-black text-3xl sm:text-4xl md:text-5xl">
                            I&apos;M&nbsp;
                        </h1>
                        <HyperText
                            animateOnHover={false}
                            duration={1000}
                            className="tracking-widest font-black text-2xl sm:text-4xl md:text-5xl"
                        >
                            Shourya Gupta
                        </HyperText>
                    </div>

                    <WordRotate
                        opacity={80}
                        className={`text-lg sm:text-2xl tracking-widest font-medium ${raleway.className}`}
                        duration={3000}
                        words={["Full Stack Web Developer", "App Developer"]}
                    />
                </div>

                <div className="flex flex-row flex-wrap md:flex-row gap-4 sm:gap-6 mt-6 items-center">
                    <RainbowButton
                        onClick={() =>
                            window.open(
                                "mailto:shouryag.dev@gmail.com?subject=Job Inquiry"
                            )
                        }
                    >
                        <div className="flex flex-row items-center gap-3">
                            <Briefcase />
                            <p>Hire me</p>
                        </div>
                    </RainbowButton>
                    <Button
                        onClick={() =>
                            window.open("/docs/Shourya_Gupta_Resume.pdf")
                        }
                    >
                        Resume
                    </Button>
                    <div className="flex gap-4">
                        <SiGithub
                            size={26}
                            className="cursor-pointer"
                            onClick={() =>
                                window.open("https://github.com/05shourya")
                            }
                        />
                        <SiLinkedin
                            size={26}
                            className="cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/05shourya/"
                                )
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
