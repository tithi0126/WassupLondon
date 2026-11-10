import './globals.css';
import { SITE_CONFIG, buildPageMetadata, getGlobalJsonLd } from '@/lib/seo';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#0c0c0e' },
        { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    ],
    colorScheme: 'dark light',
};

const baseMeta = buildPageMetadata({
    title: 'Wassup London — Best Events in London | Weddings, DJ, Catering & Event Production',
    description:
        'Creating the best events in London. Based in Paddington, Central London, Wassup London is a full-service event production house delivering bespoke weddings, concert-grade DJ & sound, artisanal catering, and corporate galas across London and the UK.',
    path: '/',
    keywords: [
        'events in London',
        'best events in London',
        'best event company in London',
        'event production London',
        'Indian wedding planner London',
        'Asian wedding catering London',
        'wedding DJ London',
        'mandap hire London',
        'corporate event production London',
        'luxury event management UK',
    ],
});

export const metadata = {
    ...baseMeta,
    metadataBase: new URL(SITE_CONFIG.url),
    applicationName: SITE_CONFIG.name,
    manifest: '/manifest.webmanifest',
    icons: {
        icon: [
            { url: '/logo.png', type: 'image/png' },
        ],
        shortcut: '/logo.png',
        apple: [
            { url: '/logo.png', sizes: '180x180', type: 'image/png' },
        ],
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
};

export default function RootLayout({ children }) {
    const globalJsonLd = getGlobalJsonLd();

    return (
        <html lang="en-GB" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
