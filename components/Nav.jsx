'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from './Container';
import Button from './Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Nav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);
    const navItems = [
        { href: '/ai-automatisering', label: 'AI-automatisering' },
        { href: '/use-cases', label: 'Use cases' },
        { href: '/artikelen', label: 'Artikelen' },
        { href: '/over-ons', label: 'Over ons' },
    ];

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 border-b border-[#E6E6E6] bg-white">
                <Container className="relative flex h-16 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="font-bold text-lg md:text-xl tracking-wide" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>
                            Nova Horizon
                        </Link>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
                        <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
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
                    <div className="hidden md:flex items-center gap-3">
                        <Button href="mailto:info@novahorizon.nl">Plan adviesgesprek</Button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            aria-label="Open menu"
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen((v) => !v)}
                            className="p-2 rounded-md hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                        >
                            {menuOpen ? (
                                <XMarkIcon className="h-6 w-6 text-slate-700" />
                            ) : (
                                <Bars3Icon className="h-6 w-6 text-slate-700" />
                            )}
                        </button>
                    </div>
                </Container>
            </header>
            {/* Mobile slide-out drawer */}
            <div
                className={[
                    'fixed inset-0 z-40 md:hidden',
                    menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
                ].join(' ')}
                aria-hidden={!menuOpen}
            >
                {/* Backdrop below header */}
                <div
                    className={[
                        'absolute inset-x-0 top-16 bottom-0 bg-black/40 transition-opacity duration-300',
                        menuOpen ? 'opacity-100' : 'opacity-0'
                    ].join(' ')}
                    onClick={() => setMenuOpen(false)}
                />
                {/* Drawer panel */}
                <div
                    className={[
                        'absolute right-0 top-16 bottom-0 w-80 max-w-[85%] bg-white shadow-xl',
                        'transition-transform duration-300 ease-out',
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    ].join(' ')}
                    role="dialog"
                    aria-modal="true"
                >

                    <nav>
                        <ul className="flex flex-col py-2">
                            {navItems.map((it) => {
                                const active = pathname === it.href;
                                return (
                                    <li key={it.href}>
                                        <Link
                                            href={it.href}
                                            onClick={() => setMenuOpen(false)}
                                            className={[
                                                'block px-6 py-4 text-base font-semibold',
                                                active ? 'text-[#0B1C2C]' : 'text-slate-700 hover:text-[#0B1C2C]'
                                            ].join(' ')}
                                        >
                                            {it.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="h-16"></div>
        </>
    );
}


