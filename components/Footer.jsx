import Link from 'next/link';
import Container from './Container';
import Button from './Button';

export default function Footer() {
    return (
        <footer className="border-t border-[#E6E6E6] bg-white py-10 text-sm">
            <Container className="grid gap-8 md:grid-cols-4">
                <div>
                    <div className="mb-2 font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Nova Horizon</div>
                    <p className="text-slate-600">De executive AI‑partner voor Nederland.</p>
                </div>
                <div>
                    <div className="mb-2 font-semibold text-[#0B1C2C]">Pagina's</div>
                    <ul className="space-y-1">
                        <li><Link href="/" className="text-slate-600 hover:text-[#0B1C2C]">Home</Link></li>
                        <li><Link href="/artikelen" className="text-slate-600 hover:text-[#0B1C2C]">Artikelen</Link></li>
                        <li><Link href="/use-cases" className="text-slate-600 hover:text-[#0B1C2C]">Use‑cases</Link></li>
                    </ul>
                </div>
                <div>
                    <div className="mb-2 font-semibold text-[#0B1C2C]">Juridisch</div>
                    <ul className="space-y-1">
                        <li><Link href="/cookiebeleid" className="text-slate-600 hover:text-[#0B1C2C]">Cookiebeleid</Link></li>
                        <li className="text-slate-400">Privacyverklaring (placeholder)</li>
                        <li className="text-slate-400">Algemene Voorwaarden (placeholder)</li>
                    </ul>
                </div>
                <div>
                    <div className="mb-2 font-semibold text-[#0B1C2C]">Contact</div>
                    <p className="text-slate-600">info@novahorizon.nl<br />+31 (0)70 000 0000</p>
                    <div className="mt-3"><Button href="mailto:info@novahorizon.nl">Plan intake</Button></div>
                </div>
            </Container>
        </footer>
    );
}


