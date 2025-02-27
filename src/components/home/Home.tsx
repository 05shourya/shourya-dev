"use client";

import React from "react";
import Profile from "./Profile";
import { Spotlight } from "../ui/spotlight-new";


const Home = () => {
    return (
        <>
            <div className="flex flex-row items-center min-h-screen justify-center ">
                <Spotlight />
                <Profile />
            </div>
        </>
    );
};

export default Home;
