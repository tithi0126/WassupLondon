import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap() {
    const baseUrl = SITE_CONFIG.url;
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
            images: [`${baseUrl}/logo.png`],
        },
        {
            url: `${baseUrl}/weddings`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
            images: [
                'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
                `${baseUrl}/logo.png`,
            ],
        },
        {
            url: `${baseUrl}/dj-entertainment`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
            images: [
                'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
                `${baseUrl}/logo.png`,
            ],
        },
        {
            url: `${baseUrl}/catering`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
            images: [
                'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=85',
                `${baseUrl}/logo.png`,
            ],
        },
        {
            url: `${baseUrl}/corporate`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
            images: [
                'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85',
                `${baseUrl}/logo.png`,
            ],
        },
        {
            url: `${baseUrl}/packages`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.95,
            images: [
                'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85',
                `${baseUrl}/logo.png`,
            ],
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
