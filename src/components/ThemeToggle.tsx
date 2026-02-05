"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // render only after mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed bottom-4 right-4 p-2 transform transition hover:scale-110 duration-300 z-50"
        >
            {theme === "dark" ?
                <img className="w-13" src="/moon.png" /> :
                <img className="w-13" src="/sun.png" />
            }
        </button>);
}