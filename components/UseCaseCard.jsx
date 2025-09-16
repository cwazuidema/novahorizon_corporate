import Link from 'next/link';
import Card from './Card';

export default function UseCaseCard({ useCase, className = '' }) {
    const videoEmbedUrl = useCase.videoUrl ? (useCase.videoUrl.includes('watch?v=') ? useCase.videoUrl.replace('watch?v=', 'embed/') : useCase.videoUrl) : null;
    return (
        <Link href={`/use-cases/${useCase.slug}`} className="block">
            <Card className={["flex flex-col cursor-pointer", className].filter(Boolean).join(' ')}>
                <div className="relative w-full rounded-t-2xl overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
                    {videoEmbedUrl ? (
                        <iframe
                            src={videoEmbedUrl}
                            title="Use case video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 h-full w-full"
                        />
                    ) : (
                        <div className="h-full w-full bg-gradient-to-br from-secondary to-white" />
                    )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-2 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{useCase.name}</h3>
                    <p className="mb-3 text-sm text-slate-700">{useCase.blurb}</p>
                    <div className="mt-auto">
                        <div className="mb-3 flex flex-wrap items-center gap-3">
                            {(useCase.stackLogos || []).map((logo, i) => (
                                <img
                                    key={i}
                                    src={`/logos/${logo}.svg`}
                                    alt={`${logo} logo`}
                                    className="h-6 w-auto opacity-80"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                        <span className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-primary transition hover:bg-secondary">Bekijk</span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}



