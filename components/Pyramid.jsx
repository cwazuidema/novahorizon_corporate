'use client';
import { useEffect, useRef, useState } from 'react';

export default function Pyramid({ className = '' }) {
    // Equal band heights
    const heights = [25, 25, 25, 25]; // [Agents, Workflow, Templates, Prompts]
    const slope = 0.5; // side lines from base corners to apex
    const rootRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(600);

    // Convert heights to level boundaries in container coordinates (0-100)
    const boundaries = [];
    let acc = 0;
    for (let i = 0; i < heights.length; i++) {
        const top = acc;
        const bottom = acc + heights[i];
        boundaries.push({ top, bottom });
        acc = bottom;
    }

    function leftOffset(y /* 0-100 */) {
        // x = slope * (100 - y)
        return slope * (100 - y);
    }

    function bandPolygon(top, bottom) {
        const xTop = leftOffset(top);
        const xBottom = leftOffset(bottom);
        // polygon points: bottom-left, bottom-right, top-right, top-left
        return `polygon(${xBottom}% ${bottom}%, ${100 - xBottom}% ${bottom}%, ${100 - xTop}% ${top}%, ${xTop}% ${top}%)`;
    }

    const bands = [
        { key: 'prompts', label: 'Prompts', color: '#0B1C2C', text: '#FFFFFF', idx: 3 },
        { key: 'templates', label: 'Promptsjablonen', color: '#F4B28E', text: '#0B1C2C', idx: 2 },
        { key: 'workflow', label: 'Workflow Automatisering', color: '#F2C2AA', text: '#0B1C2C', idx: 1 },
        { key: 'agents', label: 'Agents', color: '#F7D5C6', text: '#0B1C2C', idx: 0 },
    ];

    // Pyramid only — progress bars are rendered by the parent wrapper

    useEffect(() => {
        const element = rootRef.current;
        if (!element) return;
        const ro = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const width = entry.contentRect.width;
                setContainerWidth(width);
            }
        });
        ro.observe(element);
        return () => ro.disconnect();
    }, []);

    // Compute a single font size based on the narrowest band (Agents)
    const agentsMid = (boundaries[0].top + boundaries[0].bottom) / 2;
    const agentsWidthFraction = (100 - 2 * leftOffset(agentsMid)) / 100; // 0..1
    const sharedFontSizePx = Math.max(12, Math.min(26, agentsWidthFraction * containerWidth * 0.22));

    return (
        <div ref={rootRef} className={`relative w-full ${className}`} style={{ height: 'clamp(240px, 34vw, 380px)' }} aria-label="Piramide niveaus">
            {bands.map((b) => {
                const { top, bottom } = boundaries[b.idx];
                const mid = (top + bottom) / 2;
                return (
                    <div key={b.key} className="absolute inset-0">
                        <div
                            className="absolute inset-0"
                            style={{
                                background: b.color,
                                clipPath: bandPolygon(top, bottom),
                            }}
                        />
                        <div
                            className="absolute left-0 right-0 text-center font-semibold px-2"
                            style={{ top: `${mid}%`, transform: 'translateY(-50%)', color: b.text, fontSize: `${sharedFontSizePx}px`, whiteSpace: 'nowrap' }}
                        >
                            {b.label}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


