import Container from '../../../components/Container';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { useCaseList, getUseCaseBySlug } from '../../../data/useCases';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return useCaseList.map((u) => ({ slug: u.slug }));
}

export default function UseCasePage({ params }) {
    const uc = getUseCaseBySlug(params.slug);
    if (!uc) return notFound();
    return (
        <main className="py-10">
            <Container>
                <div className="grid gap-10 md:grid-cols-[1fr_320px]">
                    <section>
                        <h1 className="mb-2 text-3xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{uc.name}</h1>
                        <p className="mb-6 text-slate-700 max-w-2xl">{uc.blurb}</p>
                        <Card className="mb-6 h-48 bg-gradient-to-br from-[#0B1C2C]/10 to-hadfield_blue/10" />
                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="p-5">
                                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Probleem</h4>
                                <p className="text-sm text-slate-700">Beschrijf de huidige frictie (wachttijd, handwerk, fouten, compliance‑risico).</p>
                            </Card>
                            <Card className="p-5">
                                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Aanpak (AAE + Dev)</h4>
                                <p className="text-sm text-slate-700">Sprints, integraties (n8n/ERP), evaluatiekaders en guardrails. Documentatie en overdraagbaarheid.</p>
                            </Card>
                            <Card className="p-5">
                                <h4 className="font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Impact</h4>
                                <p className="text-sm text-slate-700">{uc.outcome.join(' · ')} — met KPI’s en payback‑schatting.</p>
                            </Card>
                        </div>
                        <div className="mt-8 flex gap-3">
                            <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                            <Button variant="outline" href="#">Download 1‑pager</Button>
                        </div>
                    </section>
                    <aside className="space-y-4">
                        <Card className="p-4">
                            <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Stack</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-700">
                                <li>MDX content + Next.js</li>
                                <li>n8n workflows</li>
                                <li>ERP/CRM koppelvlak</li>
                                <li>Evaluatie & logging</li>
                            </ul>
                        </Card>
                        <Card className="p-4">
                            <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Testimonial</h4>
                            <p className="text-sm text-slate-700">“Binnen 8 weken zagen we –35% doorlooptijd en betere klanttevredenheid.”</p>
                        </Card>
                    </aside>
                </div>
            </Container>
        </main>
    );
}


