"use client";

import React from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

const AboutMeTerminal = () => {
    return (
        <div className="flex justify-center items-center flex-grow">
            <Terminal className="scale-up">
                {/* Command: Echo Name */}
                <TypingAnimation
                    className="text-gray-800 dark:text-white font-bold"
                    duration={40}
                >
                    {`% echo "Shourya Gupta"`}
                </TypingAnimation>

                {/* Output: Name & Description */}
                <AnimatedSpan
                    delay={1000}
                    className="text-blue-600 dark:text-green-400 font-bold"
                >
                    ➜ Web & App Developer | Problem Solver | Tech Enthusiast
                </AnimatedSpan>
                <br />

                {/* Command: Show About Me */}
                <TypingAnimation
                    delay={1500}
                    duration={40}
                    className="text-gray-800 dark:text-white font-bold"
                >
                    % cat about_me.txt
                </TypingAnimation>

                {/* Output: About Me */}
                <AnimatedSpan
                    delay={2500}
                    className="text-blue-600 dark:text-green-400 font-bold"
                >
                    ➜ I create dynamic and user-friendly digital experiences.
                </AnimatedSpan>
                <AnimatedSpan
                    delay={3000}
                    className={"text-blue-600 dark:text-green-400 font-bold "}
                >
                    ➜ Passionate about clean design, efficient code, and
                    seamless functionality.
                </AnimatedSpan>
                <AnimatedSpan
                    delay={3500}
                    className="text-blue-600 dark:text-green-400 font-bold"
                >
                    ➜ Always exploring new technologies and pushing boundaries
                    in development.
                </AnimatedSpan>
                <br />

                {/* Command: Show Interests */}
                <TypingAnimation
                    duration={40}
                    delay={4000}
                    className="text-gray-800 dark:text-white font-bold"
                >
                    % interests --show
                </TypingAnimation>

                {/* Output: Interests */}
                <AnimatedSpan
                    delay={5000}
                    className="text-yellow-600 dark:text-yellow-400 font-bold"
                >
                    ➜ Chess ♟️ | Traveling ✈️ | Photography 📷
                </AnimatedSpan>
                <br />

                {/* Command: Show Mission */}
                <TypingAnimation
                    delay={5500}
                    duration={40}
                    className="text-gray-800 dark:text-white font-bold"
                >
                    % mission
                </TypingAnimation>

                {/* Output: Mission */}
                <AnimatedSpan
                    delay={6000}
                    className="text-red-600 dark:text-blue-400 font-bold"
                >
                    ➜ To build impactful digital products and solve real-world
                    problems through technology.
                </AnimatedSpan>
                <br />
            </Terminal>
        </div>
    );
};

export default AboutMeTerminal;
