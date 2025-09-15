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
                        <div className="mb-3 flex flex-wrap gap-2">
                            {useCase.outcome.map((o, i) => (
                                <span key={i} className="rounded-full border border-secondary px-2 py-0.5 text-xs text-slate-600">{o}</span>
                            ))}
                        </div>
                        <span className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium text-primary transition hover:bg-secondary">Bekijk</span>
                    </div>
                </div>
            </Card>
        </Link>
    );
}



