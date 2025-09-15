import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import ArticleCard from '../components/ArticleCard';
import { articleList } from '../data/articles';
import UseCaseCard from '../components/UseCaseCard';
import { useCaseList } from '../data/useCases';
import AbstractBackdrop from '../components/AbstractBackdrop';
import StatsStrip from '../components/StatsStrip';
import ModelBadge from '../components/ModelBadge';
import LogoMarquee from '../components/LogoMarquee';
import LevelsStepper from '../components/LevelsStepper';
import { BoltIcon, ScaleIcon, ShieldCheckIcon, ChartBarIcon, MapIcon, LockClosedIcon, LockOpenIcon } from '../components/icons';

export default function HomePage() {
    return (
        <main>
            <section className="relative isolate border-b border-secondary bg-cta py-16">
                <Container className="grid items-center gap-8 md:grid-cols-2">
                    <h1 className="mb-4 text-5xl font-semibold leading-tight text-center md:col-span-2 md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-background to-background" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        AI in jouw bedrijf binnen 4 weken met meetbaar resultaat of je betaalt niets.
                    </h1>
                    <div className="md:col-span-2">
                        {/* <p className="mb-6 w-full text-center text-slate-700 lg:w-1/2 mx-auto">
                            Roadmap, implementatie en borging door een <strong>AI Automation Engineer & Software Developer</strong> team—zonder vendor lock‑in. Transparant tarief, duidelijke KPI’s, elke sprint tastbare waarde.
                        </p> */}
                        <div className="flex w-full flex-col items-center gap-6">
                            <Button href="mailto:info@novahorizon.nl" className="text-base md:text-lg font-semibold px-6 py-3 rounded-3xl">
                                Plan adviesgesprek
                            </Button>
                            <Button variant="outline" href="/use-cases">Bekijk use‑cases</Button>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-10">
                <Container className="grid gap-6 md:grid-cols-3">
                    <Card className="p-6">
                        <MapIcon className="h-6 w-6 text-cta" />
                        <h3 className="mt-3 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Duidelijke Roadmap</h3>
                        <p className="text-sm text-slate-700">Met een duidelijke planning houden we de voortgang scherp in de gaten.</p>
                    </Card>
                    <Card className="p-6">
                        <LockClosedIcon className="h-6 w-6 text-cta" />
                        <h3 className="mt-3 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Geen vendor lock‑in</h3>
                        <p className="text-sm text-slate-700">Open standaarden, portable configuraties, en overdraagbare code.</p>
                    </Card>
                    <Card className="p-6">
                        <ShieldCheckIcon className="h-6 w-6 text-cta" />
                        <h3 className="mt-3 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Privacy by design</h3>
                        <p className="text-sm text-slate-700">Datalocatie, encryptie en toegangsbeheer geregeld vanaf dag één.</p>
                    </Card>
                </Container>
            </section>

            <section className="py-10 bg-background">
                <Container>
                    <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Leer meer over de 4 niveaus van AI-automatisering</h2>
                        <p className="text-slate-600">Interactief overzicht.</p>
                    </div>
                    <div className="rounded-2xl border border-secondary bg-white p-4 sm:p-6">
                        <LevelsStepper />
                    </div>
                </Container>
            </section>

            <section className="py-10 bg-background">
                <Container>
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Use‑cases</h2>
                            <p className="text-slate-600">Concrete voorbeelden van impact en snelle payback.</p>
                        </div>
                        <Button variant="outline" href="/use-cases" className="whitespace-nowrap shrink-0">Bekijk alle</Button>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {useCaseList.slice(0, 3).map((u) => (
                            <UseCaseCard key={u.slug} useCase={u} />
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-10">
                <Container>
                    <LogoMarquee />
                </Container>
            </section>

            {/* <section className="py-10 bg-background">
                <Container>
                    <div className="flex justify-center px-[10%]">
                        <img src="/img/pyramid_annotated_alt2.svg" alt="Niveaus piramide" className="w-full h-auto" />
                    </div>
                </Container>
            </section> */}


            <section className="py-10 bg-background">
                <Container>
                    <div className="mb-6 flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Artikelen</h2>
                            <p className="text-slate-600">Nieuws & updates (MDX-ready). Filters: categorie • sector • datum.</p>
                        </div>
                        <Button variant="outline" href="/artikelen" className="whitespace-nowrap shrink-0">Bekijk alle</Button>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {articleList.slice(0, 3).map((a) => (
                            <ArticleCard key={a.slug} article={a} />
                        ))}
                    </div>
                </Container>
            </section>




            {/* 
            <section className="py-10">
                <Container>
                    <div className="space-y-4">
                        <Card className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="text-sm">
                                    <div className="font-semibold text-primary">AI Automation Engineer & Software Developer</div>
                                    <div className="text-slate-600">Verschillende disciplines in één team</div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-primary text-white grid place-items-center">AA</div>
                                <div className="text-sm">
                                    <div className="font-semibold text-primary">Geen vendor lock‑in</div>
                                    <div className="text-slate-600">Open standaarden, portable configuraties, en overdraagbare code.</div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-start gap-3">
                                <ChartBarIcon className="mt-0.5 h-5 w-5 text-cta" />
                                <div className="text-sm text-slate-700">
                                    <strong>ROI‑strip</strong> met concrete KPI’s en payback‑berekening. Geen black box; we leveren metrics per fase.
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheckIcon className="mt-0.5 h-5 w-5 text-tertiary" />
                                <div className="text-sm text-slate-700">
                                    <strong>AVG & EU AI Act</strong> verwerkt in aanpak: dataminimalisatie, explainability, en documentatie out‑of‑the‑box.
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section> */}


        </main>
    );
}


