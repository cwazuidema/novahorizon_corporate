import Container from '../../components/Container';
import Button from '../../components/Button';
import Card from '../../components/Card';
import LevelsStepper from '../../components/LevelsStepper';
import { capabilityLevels } from '../../data/levels';

export const metadata = { title: 'AI‑automatisering — Nova Horizon' };

const copyByKey = {
    'niveau-1':
        'Start met ad‑hoc prompten. Snel om ideeën te verkennen en individuele productiviteit te verhogen, maar zonder herhaalbaarheid, data‑borging of kwaliteitscontrole. Ideaal voor experimenten en kleine taken, niet voor end‑to‑end processen.',
    'niveau-2':
        'Met promptsjablonen maak je output consistent en overdraagbaar. We leggen context en tone‑of‑voice vast en voeden het model met eigen kennisbanken. Dit vermindert variatie, verhoogt kwaliteit en bespaart tijd—de verwerking blijft vaak nog handmatig.',
    'niveau-3':
        'Workflow‑automatisering koppelt modellen aan systemen zoals CRM, ticketing of RPA. Invoer wordt gevalideerd, AI genereert output en resultaten gaan automatisch door naar het volgende proces. Logging, monitoring en toegangsrechten zijn geborgd.',
    'niveau-4':
        'Agents voegen besluitvorming en multi‑step planning toe. Ze kiezen tools, voeren acties uit en vragen zo nodig om bevestiging. Met guardrails, audit‑trails en KPI’s leveren agents schaalbare waarde in dynamische processen.',
};

export default function AIAutomatiseringPage() {
    return (
        <main>
            <section className="relative isolate border-b border-secondary bg-cta py-10">
                <Container className="text-center">
                    <h1 className="mb-2 text-4xl font-semibold leading-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-background to-background whitespace-pre-line" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        {"Leer over de 4 niveaus van AI‑automatisering"}
                    </h1>
                </Container>
            </section>

            <section className="py-10 bg-background">
                <Container>
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Interactief overzicht</h2>
                        <p className="text-slate-600">Bekijk per niveau wat het betekent en hoe de verdeling mens/AI verschuift.</p>
                    </div>
                    <div className="rounded-2xl border border-secondary bg-white p-4 sm:p-6">
                        <LevelsStepper />
                    </div>
                </Container>
            </section>

            <section className="py-10">
                <Container>
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>De niveaus één voor één</h2>
                        <p className="text-slate-600">Korte toelichting per stap, met focus op gebruik en governance.</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {capabilityLevels.map((level) => (
                            <Card key={level.key} className="p-6">
                                <div className="text-lg font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                                    {level.title}
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {level.badges.map((b) => (
                                        <span key={`${level.key}-${b.label}`} className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${b.color}`}>{b.label}</span>
                                    ))}
                                </div>
                                <p className="mt-3 text-slate-700">
                                    {copyByKey[level.key] || level.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}



