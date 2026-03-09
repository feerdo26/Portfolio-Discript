import React, { useEffect, useState } from 'react';

const Spotlight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsHovering(true);
        };
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300 ease-in-out mix-blend-screen"
            style={{
                background: `radial-gradient(circle 600px at ${position.x}px ${position.y}px, rgba(255, 87, 34, 0.15), transparent 80%)`,
                opacity: isHovering ? 1 : 0,
            }}
        />
    );
};

export default Spotlight;
