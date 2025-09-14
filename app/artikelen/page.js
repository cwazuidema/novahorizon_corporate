import Container from '../../components/Container';
import ArticleCard from '../../components/ArticleCard';
import { articleList } from '../../data/articles';
import Link from 'next/link';

export const metadata = { title: 'Artikelen — Nova Horizon' };

export default function ArticlesOverviewPage() {
    return (
        <main className="bg-background py-12">
            <Container>
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Artikelen</h2>
                        <p className="text-slate-600">Nieuws & updates (MDX-ready). Filters: categorie • sector • datum.</p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {articleList.map((a) => (
                        <ArticleCard key={a.slug} article={a} />
                    ))}
                </div>
            </Container>
        </main>
    );
}


