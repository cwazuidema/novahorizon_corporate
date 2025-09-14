export default function AbstractBackdrop() {
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-primary/6 to-background/0"
        >
            <div className="absolute -right-24 -top-24 h-72 w-96 rotate-12 rounded-3xl bg-gradient-to-br from-background to-secondary" style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                opacity: 0.6,
            }} />
            <div className="absolute -left-24 top-40 h-80 w-[34rem] -rotate-6 rounded-[2rem] bg-gradient-to-br from-tertiary to-primary" style={{
                opacity: 0.25,
            }} />
            <div
                className="absolute right-10 bottom-0 h-56 w-56 rotate-6 rounded-2xl bg-[radial-gradient(circle_at_30%_30%,_theme(colors.cta),_transparent_60%)]"
                style={{ opacity: 0.2 }}
            />
        </div>
    );
}


