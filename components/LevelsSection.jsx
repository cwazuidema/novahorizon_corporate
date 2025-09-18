'use client';

import { useMemo, useState } from 'react';
import Pyramid from './Pyramid';
import LevelsStepper from './LevelsStepper';
import { levelPercents as PERC } from '../data/levelsPercents';

export default function LevelsSection() {
    const [activeIndex, setActiveIndex] = useState(2);
    const perc = useMemo(() => PERC[activeIndex] || { human: 0, ai: 0 }, [activeIndex]);

    const barHeightStyle = { height: 'clamp(240px, 34vw, 380px)' };

    return (
        <div className="grid gap-6 md:grid-cols-2 items-start">
            {/* Left column: Bars + Pyramid */}
            <div className="hidden md:flex items-start justify-center gap-6">
                {/* Left vertical bar: MENS (human) */}
                <div className="flex flex-col items-center">
                    <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-slate-700">MENS</div>
                    <div className="relative mt-2 w-6 rounded-full bg-slate-200" style={barHeightStyle} aria-label="Mens percentage" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={perc.human}>
                        <div className="absolute bottom-0 left-0 right-0 rounded-b-full bg-slate-500 transition-all" style={{ height: `${perc.human}%` }} />
                        <div className="absolute -right-10 top-2 text-xs font-semibold text-primary">{perc.human}%</div>
                    </div>
                </div>

                <div className="w-full" style={{ maxWidth: 'min(900px, 100%)' }}>
                    <Pyramid />
                </div>

                {/* Right vertical bar: AI */}
                <div className="flex flex-col items-center">
                    <div className="text-[10px] md:text-xs font-semibold uppercase tracking-wide text-slate-700">AI</div>
                    <div className="relative mt-2 w-6 rounded-full bg-slate-200" style={barHeightStyle} aria-label="AI percentage" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={perc.ai}>
                        <div className="absolute bottom-0 left-0 right-0 rounded-b-full bg-cta transition-all" style={{ height: `${perc.ai}%` }} />
                        <div className="absolute -left-10 top-2 text-xs font-semibold text-cta">{perc.ai}%</div>
                    </div>
                </div>
            </div>

            {/* Right column: Stepper and text */}
            <div>
                <LevelsStepper activeIndex={activeIndex} onChange={setActiveIndex} />
            </div>
        </div>
    );
}


