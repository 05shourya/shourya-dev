"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <Button
                size={"icon"}
                className="flex justify-center items-center"
                variant={"ghost"}
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
            >
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon} />
                ) : (
                    <FontAwesomeIcon icon={faSun} />
                )}
            </Button>
        </>
    );
};

export default ThemeSwitch;
