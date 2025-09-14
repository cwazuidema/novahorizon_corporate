'use client';
import { useState } from 'react';
import Button from './Button';

export default function CookieBanner() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;
    return (
        <div className="fixed inset-x-0 bottom-3 z-50 mx-auto w-[min(100%,64rem)] px-4">
            <div className="flex flex-col items-start gap-3 rounded-2xl border border-secondary bg-white p-4 shadow-lg md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-slate-700">
                    We gebruiken cookies voor functionaliteit en anonieme statistiek. Je kunt je voorkeuren aanpassen.
                </p>
                <div className="flex gap-2">
                    <Button onClick={() => setVisible(false)}>Accepteren</Button>
                    <Button variant="outline" onClick={() => setVisible(false)}>Weigeren</Button>
                    <Button variant="ghost" href="/cookiebeleid">Instellingen</Button>
                </div>
            </div>
        </div>
    );
}


