"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React, { ReactNode, useEffect, useState } from "react";

type Props = {
    children: ReactNode;
};

const NextThemeProvider = ({ children }: Props) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
    }, [mounted, setTheme]);

    if (!mounted) return null;

    return (
        <ThemeProvider attribute="class" forcedTheme="dark">
            {children}
        </ThemeProvider>
    );
};

export default NextThemeProvider;
