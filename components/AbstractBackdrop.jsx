export default function AbstractBackdrop() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, rgba(11,28,44,0.06), rgba(250,250,250,0))' }}
        >
            <div className="absolute -right-24 -top-24 h-72 w-96 rotate-12 rounded-3xl" style={{
                background: 'linear-gradient(135deg, #FAFAFA, #E6E6E6)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                opacity: 0.6,
            }} />
            <div className="absolute -left-24 top-40 h-80 w-[34rem] -rotate-6 rounded-[2rem]" style={{
                background: 'linear-gradient(135deg, #3A3F47, #0B1C2C)',
                opacity: 0.08,
            }} />
            <div
                className="absolute right-10 bottom-0 h-56 w-56 rotate-6 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,_theme(colors.hadfield_blue),_transparent_60%)]"
                style={{ opacity: 0.08 }}
            />
        </div>
    );
}


