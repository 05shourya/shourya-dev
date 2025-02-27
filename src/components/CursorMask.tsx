"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

const RADIUS = 60; // Global radius (change this to scale the cursor & effects)

const CursorMask = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [scale, setScale] = useState(1);

    // Smooth cursor movement
    const smoothX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
    const smoothY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - RADIUS); // Center cursor
            mouseY.set(e.clientY - RADIUS);

            checkOverlap(e.clientX, e.clientY);
        };

        const checkOverlap = (x: number, y: number) => {
            const cursorElement = document.getElementById("cursor-mask");
            if (!cursorElement) return;

            // Temporarily enable pointer events so `elementsFromPoint` works
            cursorElement.style.pointerEvents = "auto";

            // Points to check (center, top, bottom, left, right)
            const points = [
                { x, y }, // Center
                { x: x - RADIUS, y }, // Left edge
                { x: x + RADIUS, y }, // Right edge
                { x, y: y - RADIUS }, // Top edge
                { x, y: y + RADIUS }, // Bottom edge
            ];

            let shouldScaleDown = false;
            let shouldScaleUp = false;

            points.forEach(({ x, y }) => {
                const elements = document.elementsFromPoint(x, y); // Get all elements at this point
                elements.forEach((element) => {
                    if (element.classList.contains("scale-down")) {
                        shouldScaleDown = true;
                    }
                    if (element.classList.contains("scale-up")) {
                        shouldScaleUp = true;
                    }
                });
            });

            // Restore pointer-events
            cursorElement.style.pointerEvents = "none";

            if (shouldScaleDown) {
                setScale(0); // Shrink if any part of the circle is over `.scale-down`
            } else if (shouldScaleUp) {
                setScale(2); // Grow if over `.scale-up`
            } else {
                setScale(1);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            id="cursor-mask"
            className="fixed inset-0 pointer-events-none mix-blend-difference z-[51]"
        >
            <motion.div
                className="absolute bg-secondary rounded-full"
                style={{
                    width: RADIUS * 2, // Dynamic width
                    height: RADIUS * 2, // Dynamic height
                    translateX: smoothX,
                    translateY: smoothY,
                }}
                animate={{ scale }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default CursorMask;
