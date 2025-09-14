'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';
import Button from './Button';

export default function Nav() {
    const pathname = usePathname();
    const navItems = [
        { href: '/ai-automatisering', label: 'AI-automatisering' },
        { href: '/use-cases', label: 'Use cases' },
        { href: '/artikelen', label: 'Artikelen' },
        { href: '/over-ons', label: 'Over ons' },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-[#E6E6E6] bg-white/80 backdrop-blur">
            <Container className="flex h-16 items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="font-bold text-lg md:text-xl tracking-wide" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                        Nova Horizon
                    </Link>
                </div>
                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((it) => {
                        const active = pathname === it.href;
                        return (
                            <Link key={it.href} href={it.href} className={[
                                'text-base font-semibold transition',
                                active ? 'text-[#0B1C2C]' : 'text-slate-600 hover:text-[#0B1C2C]'
                            ].join(' ')}>
                                {it.label}
                            </Link>
                        );
                    })}
                </nav>
                <div className="flex items-center gap-3">
                    <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                </div>
            </Container>
        </header>
    );
}


