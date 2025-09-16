import Container from '../../components/Container';
import ArticleCard from '../../components/ArticleCard';
import { articleList } from '../../data/articles';
import Link from 'next/link';

export const metadata = { title: 'Artikelen — Nova Horizon' };

export default function ArticlesOverviewPage() {
    return (
        <main>
            <section className="relative isolate border-b border-secondary bg-cta py-10">
                <Container className="text-center">
                    <h1 className="mb-2 text-4xl font-semibold leading-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-br from-background to-background whitespace-pre-line" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        {"Blijf op de hoogte van alle AI trends en ontwikkelingen."}
                    </h1>
                </Container>
            </section>

            <section className="bg-background py-12">
                <Container>
                    <div className="grid gap-6 md:grid-cols-3">
                        {articleList.map((a) => (
                            <ArticleCard key={a.slug} article={a} />
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}


