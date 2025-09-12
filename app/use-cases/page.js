import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useCaseList } from '../../data/useCases';

export const metadata = { title: 'Use‑cases — Nova Horizon' };

export default function UseCasesOverviewPage() {
    return (
        <main className="bg-[#FAFAFA] py-12">
            <Container>
                <h2 className="mb-2 text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Use‑cases</h2>
                <p className="mb-6 text-slate-600">Sectorfilter en uitkomst‑tags. Klik voor detail.</p>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {useCaseList.map((u) => (
                        <Card key={u.slug} className="p-5">
                            <div className="h-16 rounded-xl bg-gradient-to-r from-[#E6E6E6] to-white" />
                            <h3 className="mt-4 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{u.name}</h3>
                            <p className="mt-1 text-sm text-slate-700">{u.blurb}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {u.outcome.map((o, i) => (
                                    <span key={i} className="rounded-full border border-[#E6E6E6] px-2 py-0.5 text-xs text-slate-600">{o}</span>
                                ))}
                            </div>
                            <div className="mt-4">
                                <Button variant="ghost" href={`/use-cases/${u.slug}`}>Bekijk</Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </main>
    );
}


