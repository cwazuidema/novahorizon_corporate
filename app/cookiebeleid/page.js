import Container from '../../components/Container';
import Card from '../../components/Card';
import Button from '../../components/Button';

export const metadata = { title: 'Cookiebeleid — Nova Horizon' };

export default function CookiePolicyPage() {
    return (
        <main className="bg-[#FAFAFA] py-12">
            <Container>
                <Card className="p-6">
                    <h1 className="mb-2 text-2xl font-semibold text-[#0B1C2C]" style={{ fontFamily: 'var(--font-sora), var(--font-inter), ui-sans-serif' }}>Cookiebeleid</h1>
                    <p className="mb-4 text-slate-700">Wij gebruiken cookies om onze site te laten functioneren en om het gebruik anoniem te analyseren. Voor niet‑essentiële cookies vragen wij jouw toestemming.</p>
                    <div className="overflow-hidden rounded-xl border border-[#E6E6E6]">
                        <table className="w-full text-sm">
                            <thead className="bg-[#FAFAFA]">
                                <tr>
                                    <th className="p-3 text-left">Type</th>
                                    <th className="p-3 text-left">Doel</th>
                                    <th className="p-3 text-left">Bewaartermijn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t border-[#E6E6E6]">
                                    <td className="p-3">Noodzakelijk</td>
                                    <td className="p-3">Basisfunctionaliteit, beveiliging, load‑balancing</td>
                                    <td className="p-3">Sessie/12 mnd</td>
                                </tr>
                                <tr className="border-t border-[#E6E6E6]">
                                    <td className="p-3">Statistiek</td>
                                    <td className="p-3">Anonieme analyse (GA4 met IP‑masking)</td>
                                    <td className="p-3">24 mnd</td>
                                </tr>
                                <tr className="border-t border-[#E6E6E6]">
                                    <td className="p-3">Marketing</td>
                                    <td className="p-3">LinkedIn Insight Tag voor campagne‑effect</td>
                                    <td className="p-3">6–24 mnd</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5 flex gap-3">
                        <Button href="#">Alles accepteren</Button>
                        <Button variant="outline" href="#">Alles weigeren</Button>
                        <Button variant="ghost" href="#">Instellingen</Button>
                    </div>
                </Card>
            </Container>
        </main>
    );
}


