import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "./NextThemeProvider";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { NavigationDock } from "@/components/layout/NavigationDock";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Shourya Gupta",
    description:
        "Explore the portfolio of Shourya Gupta – a full stack developer skilled in React, Next.js, Java, and Spring Boot. Building elegant, performant web experiences.",
    keywords: [
        "Shourya Gupta",
        "Full Stack Developer",
        "Java Developer",
        "React Developer",
        "Spring Boot",
        "Next.js",
        "Web Developer Portfolio",
    ],
    authors: [{ name: "Shourya Gupta", url: "https://your-domain.com" }],
    creator: "Shourya Gupta",
    metadataBase: new URL("https://your-domain.com"),
    openGraph: {
        title: "Shourya Gupta",
        description:
            "Check out the portfolio of Shourya Gupta – full stack developer passionate about building modern web applications.",
        url: "https://your-domain.com",
        siteName: "Shourya Gupta",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Shourya Gupta",
        description:
            "Portfolio of Shourya Gupta – showcasing projects and skills in React, Java, Spring Boot, and more.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/favicons/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/favicons/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/favicons/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/favicons/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/favicons/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/favicons/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicons/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/favicons/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/favicons/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicons/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicons/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/favicons/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                <NextThemeProvider>
                    <div className="fixed w-full h-screen z-0 magnify-content">
                        <GridPattern
                            className={cn(
                                "[mask-image:radial-gradient(40rem_circle_at_center,white,transparent)]",
                                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 z-0"
                            )}
                        />
                    </div>
                    <main className="relative flex flex-col w-full h-max overflow-x-hidden">
                        {children}
                    </main>
                    <Footer />
                    <NavigationDock />
                </NextThemeProvider>
            </body>
        </html>
    );
}
