import Card from './Card';
import Button from './Button';

export default function ArticleCard({ article, className = '' }) {
    return (
        <Card className={["flex flex-col", className].filter(Boolean).join(' ')}>
            <div className="relative w-full rounded-t-2xl overflow-hidden" style={{ aspectRatio: '3.5 / 1' }}>
                {article.image ? (
                    <img
                        src={article.image}
                        alt={article.title || ''}
                        aria-hidden={article.title ? undefined : true}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary to-white" />
                )}
            </div>
            <div className="flex flex-1 flex-col p-5">
                <div className="mb-1 text-xs text-slate-500">{new Date(article.date).toLocaleDateString()}</div>
                <h3 className="mb-2 font-semibold text-primary" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{article.title}</h3>
                <p className="mb-3 line-clamp-3 text-sm text-slate-700">{article.teaser}</p>
                <div className="mt-auto flex items-center justify-between">
                    <div className="text-xs text-slate-500">{article.read} leestijd</div>
                    <Button variant="ghost" href={`/artikelen/${article.slug}`}>Lees verder</Button>
                </div>
            </div>
        </Card>
    );
}



