import './globals.css';
import { Inter, Sora } from 'next/font/google';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata = {
    title: 'Nova Horizon',
    description: 'Executive AI-partner — ROI in 6–12 weken',
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl">
            <body className={`${inter.variable} ${sora.variable} min-h-screen bg-white`}>
                <Nav />
                <div className="min-h-screen">
                    {children}
                </div>
                <Footer />
                <CookieBanner />
            </body>
        </html>
    );
}


