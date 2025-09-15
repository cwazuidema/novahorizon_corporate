import Container from '../../../components/Container';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { useCaseList, getUseCaseBySlug } from '../../../data/useCases';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    return useCaseList.map((u) => ({ slug: u.slug }));
}

// Render Markdown content using a robust library with GitHub-flavored Markdown support

export default function UseCasePage({ params }) {
    const uc = getUseCaseBySlug(params.slug);
    if (!uc) return notFound();
    const videoEmbedUrl = uc.videoUrl ? (uc.videoUrl.includes('watch?v=') ? uc.videoUrl.replace('watch?v=', 'embed/') : uc.videoUrl) : null;
    const mdFilePath = path.join(process.cwd(), 'content', 'use-cases', `${uc.slug}.md`);
    let mdContent = '';
    try {
        if (fs.existsSync(mdFilePath)) {
            mdContent = fs.readFileSync(mdFilePath, 'utf8');
        }
    } catch (e) {
        // ignore missing file
    }
    return (
        <main className="py-10">
            <Container>
                <div className="space-y-10">
                    <section>
                        <h1 className="mb-2 text-3xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{uc.name}</h1>
                        <p className="mb-6 text-slate-700">{uc.blurb}</p>
                        <Card className="mb-6 overflow-hidden">
                            {videoEmbedUrl ? (
                                <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                                    <iframe
                                        src={videoEmbedUrl}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="absolute inset-0 h-full w-full"
                                    />
                                </div>
                            ) : (
                                <div className="relative w-full" style={{ aspectRatio: '3.5 / 1' }}>
                                    <div className="h-full w-full bg-gradient-to-br from-secondary to-white" />
                                </div>
                            )}
                        </Card>
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="p-5">
                                <h4 className="font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Probleem</h4>
                                <p className="text-sm text-slate-700">{uc.problem || 'Beschrijf de huidige frictie (wachttijd, handwerk, fouten, compliance‑risico).'}</p>
                            </Card>
                            <Card className="p-5">
                                <h4 className="font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Oplossing</h4>
                                <p className="text-sm text-slate-700">{uc.approach || 'Sprints, integraties (n8n/ERP), evaluatiekaders en guardrails. Documentatie en overdraagbaarheid.'}</p>
                            </Card>
                            <Card className="p-5">
                                <h4 className="font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Impact</h4>
                                <p className="text-sm text-slate-700">{uc.impact || `${uc.outcome?.join(' · ')} — met KPI’s en payback‑schatting.`}</p>
                            </Card>
                        </div>
                        <Card className="mt-6 p-6 md:p-8">
                            <h4 className="mb-3 text-xl md:text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Testimonial</h4>
                            <p className="text-lg md:text-xl text-slate-700">{uc.testimonial || '“Binnen 8 weken zagen we –35% doorlooptijd en betere klanttevredenheid.”'}</p>
                            {uc.testimonialAuthor && (
                                <p className="mt-2 text-sm text-slate-500 whitespace-pre-line">{uc.testimonialAuthor}</p>
                            )}
                        </Card>
                        <Card className="mt-6 p-6 md:p-8">
                            <h4 className="mb-2 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Gebruikte tools</h4>
                            {uc.stackLogos && uc.stackLogos.length > 0 ? (
                                <div className="flex flex-wrap items-center gap-4">
                                    {uc.stackLogos.slice(0, 6).map((name, idx) => (
                                        <div key={idx} className="flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 items-center justify-center rounded-md border border-slate-200 bg-white p-2 shadow-sm">
                                            <img
                                                src={`/logos/${name}.svg`}
                                                alt={`${name} logo`}
                                                className="h-full w-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <ul className="list-disc pl-5 text-sm text-slate-700">
                                    {(uc.stack || ['MDX content + Next.js', 'n8n workflows', 'ERP/CRM koppelvlak', 'Evaluatie & logging']).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </Card>
                        <div className="mt-8 flex gap-3">
                            <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                            <Button variant="outline" href="#">Download 1‑pager</Button>
                        </div>

                        {mdContent && (
                            <div className="prose prose-slate max-w-none mt-6">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {mdContent}
                                </ReactMarkdown>
                            </div>
                        )}
                    </section>
                </div>
            </Container>
        </main>
    );
}


