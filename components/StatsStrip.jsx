export default function StatsStrip() {
    const stats = [
        { k: '–40%', v: 'doorlooptijd' },
        { k: '+33%', v: 'productiviteit' },
        { k: '< 3 mnd', v: 'payback' },
    ];
    return (
        <div className="grid grid-cols-3 divide-x divide-secondary rounded-2xl bg-white shadow-sm">
            {stats.map((s, i) => (
                <div key={i} className="p-4 text-center">
                    <div className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{s.k}</div>
                    <div className="text-xs text-slate-600">{s.v}</div>
                </div>
            ))}
        </div>
    );
}


