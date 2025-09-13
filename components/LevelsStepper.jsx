"use client";

import { useState } from 'react';
import { capabilityLevels as META } from '../data/levels';
import { levelPercents as PERC } from '../data/levelsPercents';

function findPerc(idx) {
    const item = PERC[idx];
    return item || { human: 0, ai: 0 };
}

export default function LevelsStepper({ className = '' }) {
    const [activeIndex, setActiveIndex] = useState(2);
    const meta = META[activeIndex];
    const perc = findPerc(activeIndex);

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
                                    className={`flex items-center justify-center rounded-full border-2 text-xs transition-colors ${isActive ? 'border-hadfield_blue bg-hadfield_blue text-white' : 'border-[#E6E6E6] bg-white text-[#0B1C2C]'}`}
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

            {/* Desktop selector: full titles in grid */}
            <div className="hidden grid-cols-4 gap-2 md:grid">
                {META.map((m, idx) => {
                    const parts = m.title.split(':');
                    const left = parts[0];
                    const right = parts.slice(1).join(':');
                    return (
                        <button
                            key={m.key}
                            type="button"
                            onClick={() => setActiveIndex(idx)}
                            className={`rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${idx === activeIndex ? 'border-hadfield_blue bg-hadfield_blue text-white' : 'border-[#E6E6E6] bg-white text-[#0B1C2C] hover:border-hadfield_blue'}`}
                            aria-label={`${m.title}`}
                        >
                            {right ? (
                                <span className="text-center block">
                                    <span>{left}:</span>
                                    <br />
                                    <span>{right.trim()}</span>
                                </span>
                            ) : (
                                m.title
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="rounded-2xl border border-[#E6E6E6] bg-white p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                    <div className="w-full md:w-1/2">
                        <div className="text-lg font-semibold text-[#0B1C2C] md:text-xl" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{meta.title}</div>
                        <p className="mt-2 text-slate-700">{meta.description}</p>
                        <div className="mt-3 flex flex-col items-start gap-2">
                            {meta.badges.map((b) => (
                                <span key={`${meta.key}-${b.label}`} className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${b.color}`}>{b.label}</span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="mb-2 flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-700">Mens</span>
                            <span className="font-semibold text-[#0B1C2C]">{perc.human}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                            <div className="h-full bg-slate-500 transition-all duration-500" style={{ width: `${perc.human}%` }} />
                        </div>
                        <div className="mt-3 mb-2 flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-700">AI</span>
                            <span className="font-semibold text-hadfield_blue">{perc.ai}%</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
                            <div className="h-full bg-hadfield_blue transition-all duration-500" style={{ width: `${perc.ai}%` }} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}


