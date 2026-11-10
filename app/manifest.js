export default function manifest() {
    return {
        name: 'Wassup London — Weddings, DJ, Catering & Event Production',
        short_name: 'Wassup London',
        description:
            'Full-service luxury event production house in London delivering bespoke South Asian and fusion weddings, concert-grade DJ & sound engineering, artisanal catering, and corporate galas.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0c0c0e',
        theme_color: '#0c0c0e',
        lang: 'en-GB',
        categories: ['events', 'lifestyle', 'entertainment', 'food'],
        icons: [
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable',
            },
        ],
    };
}

