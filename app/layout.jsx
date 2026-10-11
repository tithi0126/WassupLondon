import './globals.css';

export const metadata = {
    metadataBase: new URL('https://wassuplondon.co.uk'),
    title: 'Wassup London — Your Event. Your Vision. Our Expertise.',
    description: 'Wassup London is a full-service event company delivering weddings, DJ & entertainment, catering, corporate and private events across London and the UK.',
    icons: {
        icon: '/assets/logo.svg',
    },
    openGraph: {
        title: 'Wassup London — Your Event. Your Vision. Our Expertise.',
        description: 'Full-service events company — weddings, DJ nights, catering, corporate events & private celebrations across London and the UK.',
        url: 'https://wassuplondon.co.uk',
        siteName: 'Wassup London',
        locale: 'en_GB',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wassup London',
        description: 'London\'s premier events company — weddings, DJ nights, rooftop parties & corporate events.',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en-GB" suppressHydrationWarning>
            <body suppressHydrationWarning>{children}</body>
        </html>
    );
}
