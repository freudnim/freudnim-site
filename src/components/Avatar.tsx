"use client";

import { useState } from "react";
import Image from "next/image";

export default function Avatar() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={hovered ? "/kiri-open.gif" : "/kiri-closed.gif"}
                alt="avatar"
                width={200}
                height={200}
                unoptimized
            />
        </div>
    );
}
