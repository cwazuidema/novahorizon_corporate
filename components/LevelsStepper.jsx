"use client";

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { capabilityLevels as META } from '../data/levels';
import { levelPercents as PERC } from '../data/levelsPercents';

function findPerc(idx) {
    const item = PERC[idx];
    return item || { human: 0, ai: 0 };
}

export default function LevelsStepper({ className = '', activeIndex: controlledIndex, onChange }) {
    const [internalIndex, setInternalIndex] = useState(2);
    const activeIndex = typeof controlledIndex === 'number' ? controlledIndex : internalIndex;
    const setActiveIndex = (idx) => {
        if (typeof controlledIndex !== 'number') {
            setInternalIndex(idx);
        }
        if (typeof onChange === 'function') {
            onChange(idx);
        }
    };
    const meta = META[activeIndex];
    const perc = findPerc(activeIndex);

    // Desktop pill sizing: make all buttons the same width as Level 3 and
    // scale font size down per button so text fits on one line.
    const buttonRefs = useRef([]);
    const labelRefs = useRef([]);
    const [targetButtonWidth, setTargetButtonWidth] = useState(null);
    const [targetButtonHeight, setTargetButtonHeight] = useState(null);
    const [labelFontSizes, setLabelFontSizes] = useState([]);
    const [measureVersion, setMeasureVersion] = useState(0);

    useLayoutEffect(() => {
        // Measure only when elements are present (desktop)
        if (!labelRefs.current.length || !buttonRefs.current.length) return;

        const baseFontPx = 14; // tailwind text-sm ≈ 14px
        const minFontPx = 12;  // do not shrink below 12px for readability

        // Get raw label widths in pixels at current render
        const labelWidths = labelRefs.current.map((el) => (el ? el.scrollWidth : 0));
        if (labelWidths.length === 0) return;

        // Determine Level 3 (index 2) label width as the target reference
        const level3LabelWidth = labelWidths[2] || Math.max(...labelWidths);

        // Compute padding+border extras from the actual button styles
        const btn = buttonRefs.current[2] || buttonRefs.current.find(Boolean);
        let extra = 32; // sensible default matching px-4 + borders
        if (btn) {
            const cs = window.getComputedStyle(btn);
            const padding = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
            const border = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);
            extra = Math.max(0, Math.round(padding + border));
        }

        const computedTargetButtonWidth = Math.ceil(level3LabelWidth + extra);
        setTargetButtonWidth(computedTargetButtonWidth);

        // Height equalization: use Level 3 button height as the target
        const level3Btn = buttonRefs.current[2];
        if (level3Btn) {
            const h = Math.ceil(level3Btn.scrollHeight);
            setTargetButtonHeight(h);
        }

        // For each label, scale down font-size proportionally if it would overflow
        const nextFontSizes = labelWidths.map((w) => {
            if (!w || w <= 0) return baseFontPx;
            const scale = Math.min(1, level3LabelWidth / w);
            const px = Math.max(minFontPx, Math.floor(baseFontPx * scale));
            return px;
        });
        setLabelFontSizes(nextFontSizes);
    }, [measureVersion]);

    // Recalculate on resize to keep layout stable across breakpoints
    useEffect(() => {
        const handle = () => setMeasureVersion((v) => v + 1);
        window.addEventListener('resize', handle);
        return () => window.removeEventListener('resize', handle);
    }, []);

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Mobile selector: round numbered buttons (1,2,3,4) */}
            <div className="md:hidden">
                <ol className="flex w-full flex-nowrap items-center justify-between gap-2 px-[10%]">
                    {META.map((m, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <li key={m.key}>
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex items-center justify-center rounded-full border-2 text-xs transition-colors ${isActive ? 'border-cta bg-cta text-white' : 'border-secondary bg-white text-primary'}`}
                                    style={{ width: 'clamp(44px, 14vw, 64px)', height: 'clamp(44px, 14vw, 64px)', fontSize: 'clamp(12px, 3.2vw, 16px)' }}
                                    aria-label={m.title}
                                >
                                    {idx + 1}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>

            {/* Desktop selector: pill-style tabs */}
            <div className="hidden md:flex gap-3">
                {META.map((m, idx) => {
                    const parts = m.title.split(':');
                    const left = parts[0];
                    const right = parts.slice(1).join(':').trim();
                    const isActive = idx === activeIndex;
                    return (
                        <button
                            key={m.key}
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                            ref={(el) => {
                                buttonRefs.current[idx] = el;
                            }}
                            className={`flex-none rounded-full border px-4 py-3 text-sm font-semibold transition-colors shadow-sm ${isActive ? 'border-cta bg-cta text-white' : 'border-secondary bg-white text-primary hover:border-cta'}`}
                            style={{ width: targetButtonWidth ? `${targetButtonWidth}px` : undefined, height: targetButtonHeight ? `${targetButtonHeight}px` : undefined }}
                            aria-label={`${m.title}`}
                        >
                            <span
                                ref={(el) => {
                                    labelRefs.current[idx] = el;
                                }}
                                className="block w-full text-center leading-tight"
                                style={labelFontSizes[idx] ? { fontSize: `${labelFontSizes[idx]}px` } : undefined}
                            >
                                {right ? (
                                    idx === 2 ? (
                                        <span>
                                            <span className="block">{left}:&nbsp;</span>
                                            <span className="block">Workflow</span>
                                            <span className="block">Automatisering</span>
                                        </span>
                                    ) : (
                                        <span>
                                            <span>{left}</span>
                                            <span className="hidden xl:inline">: </span>
                                            <span className="xl:whitespace-nowrap">{right}</span>
                                        </span>
                                    )
                                ) : (
                                    m.title
                                )}
                            </span>
                        </button>
                    );
                })}
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                <div className="w-full">
                    <div className="text-xl md:text-2xl font-semibold text-cta" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{meta.title}</div>
                    <p className="mt-2 text-slate-700">{meta.description}</p>
                    <div className="mt-4 flex flex-row flex-wrap items-center gap-3">
                        {meta.badges.map((b) => (
                            <span key={`${meta.key}-${b.label}`} className="inline-flex items-center rounded-full bg-orange-500 text-white px-4 py-2 text-sm font-semibold shadow-sm">{b.label.replace('Sjabloon', 'Template').trim()}</span>
                        ))}
                    </div>
                </div>
                {/* <div className="w-full md:w-1/2">
                    <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700">Mens</span>
                        <span className="font-semibold text-primary">{perc.human}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full bg-slate-500 transition-all duration-500" style={{ width: `${perc.human}%` }} />
                    </div>
                    <div className="mt-3 mb-2 flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-700">AI</span>
                        <span className="font-semibold text-cta">{perc.ai}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                        <div className="h-full bg-cta transition-all duration-500" style={{ width: `${perc.ai}%` }} />
                    </div>

                </div> */}
            </div>
        </div>
    );
}


