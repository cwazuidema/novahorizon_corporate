import Container from '../../components/Container';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { teamMembers } from '../../data/team';

export const metadata = { title: 'Over ons — Nova Horizon' };

export default function OverOnsPage() {
    return (
        <main>
            <section className="relative isolate border-b border-secondary bg-background py-12">
                <Container className="grid items-center gap-8 md:grid-cols-2">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                            Over ons
                        </h1>
                        <p className="mt-3 text-slate-700 md:w-5/6">
                            We bouwen praktische AI‑oplossingen die direct waarde leveren. Van eerste use‑case naar opgeschaalde implementatie—met duidelijke KPI’s, privacy‑by‑design en zonder vendor lock‑in. Klein team, korte lijnen, focus op resultaat.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button variant="outline" href="https://www.linkedin.com/company/novahorizon" className="gap-2">
                                {/* LinkedIn icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                    <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V24H.24V8.25zM8.32 8.25h4.33v2.142h.06c.603-1.145 2.077-2.352 4.276-2.352 4.574 0 5.417 3.01 5.417 6.924V24h-4.52v-6.98c0-1.666-.03-3.806-2.318-3.806-2.32 0-2.677 1.812-2.677 3.684V24H8.32V8.25z" />
                                </svg>
                                Volg op LinkedIn
                            </Button>
                            <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                        </div>
                    </div>
                    <div>
                        <Card className="overflow-hidden p-2">
                            <img src="/img/logo_circle_blue_orange.png" alt="Team Nova Horizon" className="w-full h-auto rounded-xl" />
                        </Card>
                    </div>
                </Container>
            </section>

            <section className="py-12 bg-background">
                <Container>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Het team</h2>
                        <p className="text-slate-600">Leer de mensen kennen achter Nova Horizon.</p>
                    </div>
                    <div className="space-y-10">
                        {teamMembers.map((m, idx) => {
                            const isEven = idx % 2 === 0;
                            return (
                                <div key={m.name} className="grid items-center gap-6 md:grid-cols-2">
                                    <div className={[
                                        isEven ? 'md:order-1' : 'md:order-2'
                                    ].join(' ')}>
                                        <div className="flex justify-center">
                                            <img src={m.imageUrl} alt={m.name} className="mx-auto w-40 h-40 md:w-56 md:h-56 rounded-full object-cover" />
                                        </div>
                                    </div>
                                    <div className={[
                                        isEven ? 'md:order-2' : 'md:order-1'
                                    ].join(' ')}>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{m.name}</h3>
                                            {m.role && (
                                                <div className="text-slate-600">{m.role}</div>
                                            )}
                                            <p className="text-slate-700">{m.bio}</p>
                                            <div className="pt-2">
                                                {m.linkedinUrl && (
                                                    <Button variant="outline" href={m.linkedinUrl} className="gap-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                                            <path d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.24 8.25h4.52V24H.24V8.25zM8.32 8.25h4.33v2.142h.06c.603-1.145 2.077-2.352 4.276-2.352 4.574 0 5.417 3.01 5.417 6.924V24h-4.52v-6.98c0-1.666-.03-3.806-2.318-3.806-2.32 0-2.677 1.812-2.677 3.684V24H8.32V8.25z" />
                                                        </svg>
                                                        LinkedIn
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>
        </main>
    );
}


