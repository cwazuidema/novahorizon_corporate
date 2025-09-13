import Card from './Card';
import Button from './Button';

export default function ArticleCard({ article, className = '' }) {
    return (
        <Card className={["flex flex-col", className].filter(Boolean).join(' ')}>
            <div className="h-28 rounded-t-2xl bg-gradient-to-br from-[#E6E6E6] to-white" />
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 text-xs text-slate-500">{new Date(article.date).toLocaleDateString()}</div>
                <h3 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{article.title}</h3>
                <p className="mb-3 line-clamp-3 text-sm text-slate-700">{article.teaser}</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="text-xs text-slate-500">{article.read} leestijd</div>
                    <Button variant="ghost" href={`/artikelen/${article.slug}`}>Lees verder</Button>
                </div>
            </div>
        </Card>
    );
}



