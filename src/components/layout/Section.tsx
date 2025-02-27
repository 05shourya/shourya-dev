import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const Section = ({ children }: Props) => {
    return (
        <section className="flex flex-col min-h-screen w-full justify-center items-center">
            {children}
        </section>
    );
};

export default Section;
