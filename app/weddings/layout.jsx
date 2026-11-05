// globals.css and wedding.css are inherited via the root layout + globals import chain

export const metadata = {
    metadataBase: new URL('https://www.wassuplondon.co.uk'),
    title: 'Wedding Planning London — Wassup London | Bespoke UK Weddings',
    description: 'Wassup London plans bespoke South Asian and fusion weddings across the UK. Full planning, décor, catering, entertainment and day-of coordination — all under one roof.',
    openGraph: {
        title: 'Wedding Planning London — Wassup London',
        description: 'Bespoke South Asian and fusion weddings across London and the UK. Full planning, décor, catering, entertainment and day-of coordination.',
        url: 'https://www.wassuplondon.co.uk/weddings',
        siteName: 'Wassup London',
        images: [
            {
                url: '/logo.png',
                width: 1024,
                height: 1024,
                alt: 'Wassup London Weddings & Events Crest',
            },
        ],
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wedding Planning London — Wassup London',
        description: 'Bespoke UK weddings — full planning, décor, catering, entertainment and day-of coordination.',
        images: ['/logo.png'],
    },
};

export default function WeddingsLayout({ children }) {
    return children;
}
