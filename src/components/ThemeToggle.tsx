"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // render only after mounting to avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = resolvedTheme;

    return (
        <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="fixed top-4 left-4 p-2 transform transition hover:scale-110 duration-300 z-50"
        >
            {currentTheme === "dark" ?
                <img className="w-10" src="/moon.png" /> :
                <img className="w-10" src="/sun.png" />
            }
        </button>);
}