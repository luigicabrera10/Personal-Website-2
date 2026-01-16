'use client'
import React, {createContext, useContext, useState } from "react"

const ActiveSectionContext = createContext<{
    activeSection: number;
    setActiveSection: (id: number) => void;
}>({ activeSection: 0, setActiveSection: () => {} });

export const ActiveSectionProvider = ({ children } : { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSection = () => useContext(ActiveSectionContext);

