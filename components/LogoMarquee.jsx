export default function LogoMarquee() {
    const logos = ['acme', 'globex', 'initech', 'stark', 'umbrella', 'wayne'];
    return (
        <div className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white py-6">
            <div className="group flex min-w-max gap-16 whitespace-nowrap [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
                {[...logos, ...logos].map((name, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-70 transition hover:opacity-100">
                        <div className="h-8 w-8 rounded-md bg-[#E6E6E6]" />
                        <span className="text-sm text-slate-600">{name.toUpperCase()}</span>
                    </div>
                ))}
            </div>
            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>
    );
}


