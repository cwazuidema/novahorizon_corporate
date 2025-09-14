import Container from '../../components/Container';
import UseCaseCard from '../../components/UseCaseCard';
import { useCaseList } from '../../data/useCases';

export const metadata = { title: 'Use‑cases — Nova Horizon' };

export default function UseCasesOverviewPage() {
    return (
        <main className="bg-background py-12">
            <Container>
                <h2 className="mb-2 text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Use‑cases</h2>
                <p className="mb-6 text-slate-600">Sectorfilter en uitkomst‑tags. Klik voor detail.</p>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {useCaseList.map((u) => (
                        <UseCaseCard key={u.slug} useCase={u} />
                    ))}
                </div>
            </Container>
        </main>
    );
}


