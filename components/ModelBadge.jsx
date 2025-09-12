import Card from './Card';

export default function ModelBadge() {
    return (
        <Card className="p-4">
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#0B1C2C] text-white grid place-items-center">AA</div>
                <div className="text-sm">
                    <div className="font-semibold text-[#0B1C2C]">AAE + Developer</div>
                    <div className="text-slate-600">Volledig pakket, vast tarief, duidelijke deliverables</div>
                </div>
            </div>
        </Card>
    );
}


