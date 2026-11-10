import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
    title: 'Wedding Planning London — Bespoke South Asian, Indian & Fusion Weddings | Wassup London',
    description:
        'Wassup London plans and produces bespoke South Asian, Hindu, Sikh, Gujarati, Punjabi, and multicultural fusion weddings across London and the UK. Full planning, custom mandaps, floral styling, catering, DJs, and day-of coordination.',
    path: '/weddings',
    ogImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    ogImageAlt: 'Bespoke luxury wedding planning and mandap styling by Wassup London',
    keywords: [
        'wedding planner London',
        'South Asian wedding planner London',
        'Indian wedding planner UK',
        'Gujarati wedding planner London',
        'Punjabi wedding planner London',
        'mandap hire and floral decor London',
        'sangeet and mehndi event planner',
        'fusion wedding coordinator UK',
    ],
});

export default function WeddingsLayout({ children }) {
    return children;
}
