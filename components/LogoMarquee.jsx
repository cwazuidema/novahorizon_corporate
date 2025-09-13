import Image from 'next/image';

export default function LogoMarquee() {
    const logos = [
        { name: 'OpenAI ChatGPT', file: 'openai.svg' },
        { name: 'Google Gemini', file: 'google-gemini.svg' },
        { name: 'Anthropic Claude', file: 'claude.svg' },
        { name: 'Python', file: 'python.svg' },
        { name: 'JavaScript', file: 'javascript.svg' },
        { name: 'n8n', file: 'n8n.svg' },
    ];

    return (
        <div className="relative overflow-hidden rounded-2xl border border-[#E6E6E6] bg-white py-6">
            <div className="group flex min-w-max gap-28 whitespace-nowrap [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
                {[...logos, ...logos].map((logo, i) => (
                    <div key={i} className="flex items-center opacity-70 transition hover:opacity-100 shrink-0">
                        <div className="relative h-20 w-44 p-3 flex items-center justify-center overflow-hidden">
                            <Image
                                src={`/logos/${logo.file}`}
                                alt=""
                                aria-hidden="true"
                                fill
                                sizes="176px"
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
        </div>
    );
}


