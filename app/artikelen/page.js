import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { articleList } from '../../data/articles';
import Link from 'next/link';

export const metadata = { title: 'Artikelen — Nova Horizon' };

export default function ArticlesOverviewPage() {
    return (
        <main className="bg-[#FAFAFA] py-12">
            <Container>
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Artikelen</h2>
                        <p className="text-slate-600">Nieuws & updates (MDX-ready). Filters: categorie • sector • datum.</p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {articleList.map((a) => (
                        <Card key={a.slug} className="flex flex-col">
                            <div className="h-28 rounded-t-2xl bg-gradient-to-br from-[#E6E6E6] to-white" />
                            <div className="flex flex-1 flex-col p-5">
                                <div className="mb-1 text-xs text-slate-500">{new Date(a.date).toLocaleDateString()}</div>
                                <h3 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{a.title}</h3>
                                <p className="mb-3 line-clamp-3 text-sm text-slate-700">{a.teaser}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="text-xs text-slate-500">{a.read} leestijd</div>
                                    <Button variant="ghost" href={`/artikelen/${a.slug}`}>Lees verder</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </main>
    );
}


