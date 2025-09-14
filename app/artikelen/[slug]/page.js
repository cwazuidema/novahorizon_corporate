import Container from '../../../components/Container';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { articleList, getArticleBySlug } from '../../../data/articles';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return articleList.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }) {
    const article = getArticleBySlug(params.slug);
    if (!article) return notFound();
    const mdx = `## Inleiding\n\nDit is een MDX-voorbeeld. Hier plaatsen we inzichten, grafieken en links.\n\n### Kernpunten\n- Meetbare KPI's per sprint\n- Transparantie in tooling en kosten\n- Governance & documentatie standaard inbegrepen\n\n### Conclusie\nEen pragmatische aanpak levert binnen 6–12 weken rendement.`;

    return (
        <main className="py-10">
            <Container className="grid gap-10 md:grid-cols-[1fr_280px]">
                <article>
                    <h1 className="mb-2 text-3xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{article.title}</h1>
                    <div className="mb-6 text-sm text-slate-500">
                        {new Date(article.date).toLocaleDateString()} • {article.read} leestijd
                    </div>
                    <Card className="mb-6 overflow-hidden">
                        <div className="relative w-full" style={{ aspectRatio: '3.5 / 1' }}>
                            {article.image ? (
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C2C]/10 to-hadfield_blue/10" />
                            )}
                        </div>
                    </Card>
                    <div className="prose prose-slate max-w-none">
                        {mdx.split('\n\n').map((block, i) => {
                            if (block.startsWith('## ')) return <h2 key={i}>{block.replace('## ', '')}</h2>;
                            if (block.startsWith('### ')) return <h3 key={i}>{block.replace('### ', '')}</h3>;
                            if (block.startsWith('- ')) return (
                                <ul key={i}>
                                    {block.split('\n').map((li, j) => (
                                        <li key={j}>{li.replace('- ', '')}</li>
                                    ))}
                                </ul>
                            );
                            return <p key={i}>{block}</p>;
                        })}
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                        <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                        <Button variant="outline" href="#">Deel artikel</Button>
                    </div>
                </article>
                <aside className="space-y-4">
                    <Card className="p-4">
                        <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>In dit artikel</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-700">
                            <li>Inleiding</li>
                            <li>Kernpunten</li>
                            <li>Conclusie</li>
                        </ul>
                    </Card>
                    <Card className="p-4">
                        <h4 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Gerelateerd</h4>
                        <ul className="space-y-2 text-sm">
                            {articleList.slice(0, 2).map((a) => (
                                <li key={a.slug} className="text-[#0B1C2C] underline decoration-[#E6E6E6] underline-offset-[3px]">{a.title}</li>
                            ))}
                        </ul>
                    </Card>
                </aside>
            </Container>
        </main>
    );
}


