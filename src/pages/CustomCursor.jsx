import React, { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === "BUTTON" || e.target.tagName === "A") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div
            className="fixed w-10 h-10 rounded-full mix-blend-difference z-50 pointer-events-none transition-transform duration-75"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                backgroundColor: isHovering ? "rgba(46, 204, 113, 0.5)" : "rgba(155, 241, 191, 0.7)",
                filter: "blur(8px)", 
            }}
        />
    );
};

export default CustomCursor;
