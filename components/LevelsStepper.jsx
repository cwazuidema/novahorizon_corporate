"use client";

import { useState } from 'react';
import { capabilityLevels as LEVELS } from '../data/levels';

function Badge({ children, colorClass }) {
    return (
        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${colorClass}`}>
            {children}
        </span>
    );
}

export default function LevelsStepper({ className = '' }) {
    const [activeIndex, setActiveIndex] = useState(2);
    const active = LEVELS[activeIndex];
    const colsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    }[LEVELS.length] || 'grid-cols-4';

    return (
        <div className={`space-y-6 ${className}`}>
            <div className="hidden md:block">
                <ol className={`grid ${colsClass} items-center gap-2`}>
                    {LEVELS.map((l, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <li key={l.key} className="flex flex-col items-center">
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${isActive ? 'border-hadfield_blue bg-hadfield_blue text-white' : 'border-[#E6E6E6] bg-white text-[#0B1C2C] hover:border-hadfield_blue'
                                        }`}
                                >
                                    {idx + 1}
                                </button>
                                <div className="mt-2 text-center text-xs font-medium text-[#0B1C2C]">{l.title.replace('Niveau ', '')}</div>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div className="md:hidden">
                <ol className="flex w-full flex-nowrap items-center justify-between gap-2 px-[10%]">
                    {LEVELS.map((l, idx) => {
                        const isActive = idx === activeIndex;
                        return (
                            <li key={l.key}>
                                <button
                                    type="button"
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex items-center justify-center rounded-full border-2 text-xs transition-colors ${isActive ? 'border-hadfield_blue bg-hadfield_blue text-white' : 'border-[#E6E6E6] bg-white text-[#0B1C2C]'
                                        }`}
                                    style={{ width: 'clamp(44px, 14vw, 64px)', height: 'clamp(44px, 14vw, 64px)', fontSize: 'clamp(12px, 3.2vw, 16px)' }}
                                    aria-label={l.title}
                                >
                                    {idx + 1}
                                </button>
                            </li>
                        );
                    })}
                </ol>
            </div>

            <div className="rounded-2xl border border-[#E6E6E6] bg-white p-6">
                <div className="flex items-start gap-4">
                    <div className="hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-hadfield_blue text-white">{activeIndex + 1}</div>
                    <div>
                        <h3 className="text-xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{active.title}</h3>
                        <p className="mt-2 text-slate-700">{active.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {active.badges.map((b) => (
                                <Badge key={`${active.key}-${b.label}`} colorClass={b.color}>{b.label}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


