import Container from '../../components/Container';
import UseCaseCard from '../../components/UseCaseCard';
import { useCaseList } from '../../data/useCases';

export const metadata = { title: 'Use‑cases — Nova Horizon' };

export default function UseCasesOverviewPage() {
    return (
        <main>
            <section className="relative isolate border-b border-secondary bg-cta py-10">
                <Container className="text-center">
                    <h1 className="mb-2 text-4xl font-semibold leading-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-background to-background whitespace-pre-line" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        {"Praatjes vullen geen gaatjes.\n\nLeer van bewezen AI‑implementaties."}
                    </h1>
                </Container>
            </section>

            <section className="bg-background py-12">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {useCaseList.map((u) => (
                            <UseCaseCard key={u.slug} useCase={u} />
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}


