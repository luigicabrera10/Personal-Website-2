'use client'
import React, {createContext, useContext, useState } from "react"

const ActiveSectionContext = createContext<{
    activeSection: {id: number, direction: boolean};
    setActiveSection: (val: {id: number, direction: boolean}) => void;
}>({ activeSection: {id: 0, direction: false}, setActiveSection: () => {} });

export const ActiveSectionProvider = ({ children } : { children: React.ReactNode }) => {
    const [activeSection, setActiveSection] = useState({id: 0, direction: false});

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export const useActiveSection = () => useContext(ActiveSectionContext);

