import { SITE_CONFIG } from '@/lib/seo';

export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/data/'],
            },
            {
                userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot'],
                allow: '/',
            },
        ],
        host: SITE_CONFIG.url,
        sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    };
}
