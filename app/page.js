import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import AbstractBackdrop from '../components/AbstractBackdrop';
import StatsStrip from '../components/StatsStrip';
import ModelBadge from '../components/ModelBadge';
import LogoMarquee from '../components/LogoMarquee';
import { BoltIcon, ScaleIcon, ShieldCheckIcon, ChartBarIcon, MapIcon, LockClosedIcon, LockOpenIcon } from '../components/icons';

export default function HomePage() {
    return (
        <main>
            <section className="relative border-b border-[#E6E6E6] bg-[#FAFAFA] py-16">
                <AbstractBackdrop />
                <Container className="grid items-center gap-8 md:grid-cols-2">
                    <h1 className="mb-4 text-5xl font-semibold leading-tight text-center md:col-span-2 md:text-8xl bg-clip-text text-transparent bg-gradient-to-br from-hadfield_blue to-hadfield_blue" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        AI in jouw bedrijf binnen 4 weken met meetbaar resultaat of je betaalt niets.
                    </h1>
                    <div className="md:col-span-2">
                        <p className="mb-6 w-full text-center text-slate-700 lg:w-1/2 mx-auto">
                            Roadmap, implementatie en borging door een <strong>AI Automation Engineer & Software Developer</strong> team—zonder vendor lock‑in. Transparant tarief, duidelijke KPI’s, elke sprint tastbare waarde.
                        </p>
                        <div className="flex w-full flex-wrap justify-center gap-3">
                            <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                            <Button variant="ghost" href="/use-cases">Bekijk use‑cases</Button>
                        </div>
                        {/* <div className="mt-6 max-w-lg"><StatsStrip /></div> */}
                    </div>
                </Container>
            </section>

            <section className="py-10">
                <Container className="grid gap-6 md:grid-cols-3">
                    <Card className="p-6">
                        <MapIcon className="h-6 w-6 text-hadfield_blue" />
                        <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Duidelijke Roadmap</h3>
                        <p className="text-sm text-slate-700">Met een duidelijke planning houden we de voortgang scherp in de gaten.</p>
                    </Card>
                    <Card className="p-6">
                        <LockClosedIcon className="h-6 w-6 text-hadfield_blue" />
                        <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Geen vendor lock‑in</h3>
                        <p className="text-sm text-slate-700">Open standaarden, portable configuraties, en overdraagbare code.</p>
                    </Card>
                    <Card className="p-6">
                        <ShieldCheckIcon className="h-6 w-6 text-hadfield_blue" />
                        <h3 className="mt-3 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Privacy by design</h3>
                        <p className="text-sm text-slate-700">Datalocatie, encryptie en toegangsbeheer geregeld vanaf dag één.</p>
                    </Card>
                </Container>
            </section>

            <section className="py-10">
                <Container>
                    <div className="space-y-4">
                        <Card className="p-4">
                            <div className="flex items-center gap-3">
                                {/* <div className="h-10 w-10 rounded-xl bg-[#0B1C2C] text-white grid place-items-center">TEAM</div> */}
                                <div className="text-sm">
                                    <div className="font-semibold text-[#0B1C2C]">AI Automation Engineer & Software Developer</div>
                                    <div className="text-slate-600">Verschillende disciplines in één team</div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-xl bg-[#0B1C2C] text-white grid place-items-center">AA</div>
                                <div className="text-sm">
                                    <div className="font-semibold text-[#0B1C2C]">Geen vendor lock‑in</div>
                                    <div className="text-slate-600">Open standaarden, portable configuraties, en overdraagbare code.</div>
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-start gap-3">
                                <ChartBarIcon className="mt-0.5 h-5 w-5 text-hadfield_blue" />
                                <div className="text-sm text-slate-700">
                                    <strong>ROI‑strip</strong> met concrete KPI’s en payback‑berekening. Geen black box; we leveren metrics per fase.
                                </div>
                            </div>
                        </Card>
                        <Card className="p-4">
                            <div className="flex items-start gap-3">
                                <ShieldCheckIcon className="mt-0.5 h-5 w-5 text-[#3A3F47]" />
                                <div className="text-sm text-slate-700">
                                    <strong>AVG & EU AI Act</strong> verwerkt in aanpak: dataminimalisatie, explainability, en documentatie out‑of‑the‑box.
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>


            <section className="py-10">
                <Container>
                    <LogoMarquee />
                </Container>
            </section>


        </main>
    );
}


