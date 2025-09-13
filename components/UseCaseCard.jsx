import Card from './Card';
import Button from './Button';

export default function UseCaseCard({ useCase, className = '' }) {
    return (
        <Card className={["flex flex-col", className].filter(Boolean).join(' ')}>
            <div className="h-28 rounded-t-2xl bg-gradient-to-br from-[#E6E6E6] to-white" />
            <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>{useCase.name}</h3>
                <p className="mb-3 text-sm text-slate-700">{useCase.blurb}</p>
                <div className="mt-auto">
                    <div className="mb-3 flex flex-wrap gap-2">
                        {useCase.outcome.map((o, i) => (
                            <span key={i} className="rounded-full border border-[#E6E6E6] px-2 py-0.5 text-xs text-slate-600">{o}</span>
                        ))}
                    </div>
                    <Button variant="ghost" href={`/use-cases/${useCase.slug}`}>Bekijk</Button>
                </div>
            </div>
        </Card>
    );
}



