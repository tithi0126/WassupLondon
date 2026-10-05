// globals.css and wedding.css are inherited via the root layout + globals import chain

export const metadata = {
    metadataBase: new URL('https://wassuplondon.co.uk'),
    title: 'Wedding Planning London — Wassup London | Bespoke UK Weddings',
    description: 'Wassup London plans bespoke South Asian and fusion weddings across the UK. Full planning, décor, catering, entertainment and day-of coordination — all under one roof.',
    openGraph: {
        title: 'Wedding Planning London — Wassup London',
        description: 'Bespoke South Asian and fusion weddings across London and the UK. Full planning, décor, catering, entertainment and day-of coordination.',
        url: 'https://wassuplondon.co.uk/weddings',
        siteName: 'Wassup London',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wedding Planning London — Wassup London',
        description: 'Bespoke UK weddings — full planning, décor, catering, entertainment and day-of coordination.',
    },
};

export default function WeddingsLayout({ children }) {
    return children;
}
