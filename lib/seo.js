// ─── lib/seo.js — Enterprise SEO Metadata & Schema.org JSON-LD Graphs ────────

import { CONTACT_INFO, EVENTS } from './data';

export const SITE_CONFIG = {
    url: 'https://www.wassuplondon.co.uk',
    name: 'Wassup London',
    legalName: 'Wassup London Events Ltd',
    tagline: 'Your Event. Your Vision. Our Expertise.',
    locale: 'en_GB',
    logo: 'https://www.wassuplondon.co.uk/logo.png',
    email: CONTACT_INFO.email,
    phone: '+447471557773',
    phoneDisplay: CONTACT_INFO.whatsappNumber,
    whatsappUrl: CONTACT_INFO.whatsappUrl,
    address: {
        streetAddress: 'Paddington, Central London',
        addressLocality: 'London',
        addressRegion: 'Greater London',
        postalCode: 'W2',
        addressCountry: 'GB',
    },
    geo: {
        latitude: 51.5154,
        longitude: -0.1755,
    },
    sameAs: [
        CONTACT_INFO.instagramUrl,
        CONTACT_INFO.facebookUrl,
    ],
    areasServed: [
        'London',
        'Paddington',
        'Central London',
        'Mayfair',
        'Knightsbridge',
        'Kensington',
        'Chelsea',
        'Shoreditch',
        'Canary Wharf',
        'Wembley',
        'Surrey',
        'Berkshire',
        'Hertfordshire',
        'United Kingdom',
    ],
};

/**
 * Builds a complete Next.js App Router Metadata object with canonical URLs,
 * hreflang alternates, OpenGraph, Twitter Cards, and Googlebot rich-result directives.
 */
export function buildPageMetadata({
    title,
    description,
    path = '/',
    keywords = [],
    ogImage = '/logo.png',
    ogImageAlt = 'Wassup London — Luxury Weddings, DJ, Catering & Event Production',
    noIndex = false,
}) {
    const canonicalUrl = path === '/' ? SITE_CONFIG.url : `${SITE_CONFIG.url}${path}`;
    const images = [
        {
            url: ogImage,
            width: ogImage === '/logo.png' ? 1024 : 1200,
            height: ogImage === '/logo.png' ? 1024 : 630,
            alt: ogImageAlt,
        },
    ];

    if (ogImage !== '/logo.png') {
        images.push({
            url: '/logo.png',
            width: 1024,
            height: 1024,
            alt: 'Wassup London Weddings & Events Crest',
        });
    }

    return {
        title,
        description,
        keywords: [
            'Wassup London',
            'Wassup London Events',
            'events in London',
            'best events in London',
            'best event company in London',
            'best event planners in London',
            'luxury event planner London',
            'bespoke wedding planner London',
            'South Asian wedding planner UK',
            ...keywords,
        ],
        authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
        creator: SITE_CONFIG.name,
        publisher: SITE_CONFIG.legalName,
        category: 'Event Planning & Production',
        alternates: {
            canonical: canonicalUrl,
            languages: {
                'en-GB': canonicalUrl,
                'x-default': canonicalUrl,
            },
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName: SITE_CONFIG.name,
            locale: SITE_CONFIG.locale,
            type: 'website',
            images,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        robots: noIndex
            ? {
                  index: false,
                  follow: false,
              }
            : {
                  index: true,
                  follow: true,
                  nocache: false,
                  googleBot: {
                      index: true,
                      follow: true,
                      noimageindex: false,
                      'max-video-preview': -1,
                      'max-image-preview': 'large',
                      'max-snippet': -1,
                  },
              },
    };
}

/**
 * Global Organization, LocalBusiness/EventPlanner, and WebSite JSON-LD graph
 * injected into the root layout across all routes.
 */
export function getGlobalJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['Organization', 'EventPlanner', 'LocalBusiness'],
                '@id': `${SITE_CONFIG.url}/#organization`,
                name: SITE_CONFIG.name,
                legalName: SITE_CONFIG.legalName,
                url: SITE_CONFIG.url,
                logo: {
                    '@type': 'ImageObject',
                    '@id': `${SITE_CONFIG.url}/#logo`,
                    url: SITE_CONFIG.logo,
                    contentUrl: SITE_CONFIG.logo,
                    width: 1024,
                    height: 1024,
                    caption: 'Wassup London Weddings & Events Crest',
                },
                image: SITE_CONFIG.logo,
                description:
                    'Wassup London is a premier full-service event production house in London delivering bespoke South Asian and fusion weddings, concert-grade DJ & sound engineering, artisanal catering, and corporate galas across the UK.',
                telephone: SITE_CONFIG.phone,
                email: SITE_CONFIG.email,
                priceRange: '£££',
                currenciesAccepted: 'GBP',
                paymentAccepted: 'Bank Transfer, Credit Card, Debit Card',
                address: {
                    '@type': 'PostalAddress',
                    ...SITE_CONFIG.address,
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    ...SITE_CONFIG.geo,
                },
                areaServed: SITE_CONFIG.areasServed.map((area) => ({
                    '@type': 'Place',
                    name: area,
                })),
                openingHoursSpecification: [
                    {
                        '@type': 'OpeningHoursSpecification',
                        dayOfWeek: [
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday',
                        ],
                        opens: '09:00',
                        closes: '22:00',
                    },
                ],
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        telephone: SITE_CONFIG.phone,
                        email: SITE_CONFIG.email,
                        contactType: 'customer service',
                        areaServed: 'GB',
                        availableLanguage: ['en-GB', 'hi', 'gu', 'pa'],
                    },
                ],
                sameAs: SITE_CONFIG.sameAs,
                knowsAbout: [
                    'Events in London',
                    'Best Events in London',
                    'Luxury Event Management London',
                    'Luxury Wedding Planning London',
                    'South Asian & Fusion Weddings',
                    'Mandap Design & Floral Architecture',
                    'Concert-Grade DJ & Sound Production',
                    'L-Acoustics & d&b audiotechnik Sound Engineering',
                    'LED Dance Floors & Intelligent DMX Lighting',
                    'Artisanal Indian, Gujarati, Punjabi & Pan-Asian Catering',
                    'Corporate Event Production & Gala Dinners',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE_CONFIG.url}/#website`,
                url: SITE_CONFIG.url,
                name: SITE_CONFIG.name,
                description: SITE_CONFIG.tagline,
                publisher: {
                    '@id': `${SITE_CONFIG.url}/#organization`,
                },
                inLanguage: 'en-GB',
            },
        ],
    };
}

/**
 * Route-specific Schema.org JSON-LD graphs (BreadcrumbList, WebPage, Service,
 * FoodEstablishment, OfferCatalog, and FAQPage) for rich search results.
 */
export function getPageJsonLd(pageKey) {
    const orgRef = { '@id': `${SITE_CONFIG.url}/#organization` };
    const siteRef = { '@id': `${SITE_CONFIG.url}/#website` };

    const makeBreadcrumbs = (items) => ({
        '@type': 'BreadcrumbList',
        '@id': `${SITE_CONFIG.url}${items[items.length - 1].path}#breadcrumb`,
        itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: item.path === '/' ? SITE_CONFIG.url : `${SITE_CONFIG.url}${item.path}`,
        })),
    });

    switch (pageKey) {
        case 'home': {
            const eventSchemas = Array.isArray(EVENTS)
                ? EVENTS.map((ev, idx) => ({
                      '@type': 'Event',
                      '@id': `${SITE_CONFIG.url}/#event-${ev.id || idx + 1}`,
                      name: ev.label || 'Wassup London Showcase Event',
                      eventStatus: 'https://schema.org/EventScheduled',
                      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
                      startDate: ev.isoDate || '2026-06-01T19:00:00+01:00',
                      location: {
                          '@type': 'Place',
                          name: ev.venue || 'Central London Venue',
                          address: {
                              '@type': 'PostalAddress',
                              addressLocality: 'London',
                              addressCountry: 'GB',
                          },
                      },
                      image: [ev.src || SITE_CONFIG.logo],
                      description: `${ev.label || 'Curated London Event'} — produced by Wassup London in ${ev.venue || 'London'}.`,
                      organizer: orgRef,
                  }))
                : [];

            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/#webpage`,
                        url: SITE_CONFIG.url,
                        name: 'Wassup London — Best Events in London | Bespoke Weddings, DJ, Catering & Event Production',
                        isPartOf: siteRef,
                        about: orgRef,
                        inLanguage: 'en-GB',
                        description:
                            'Discover the best events in London with Wassup London — a full-service luxury event production company in Paddington, Central London uniting bespoke weddings, club-tier DJ & sound engineering, artisanal catering, and corporate galas.',
                    },
                    makeBreadcrumbs([{ name: 'Home', path: '/' }]),
                    {
                        '@type': 'ItemList',
                        '@id': `${SITE_CONFIG.url}/#services-list`,
                        name: 'Wassup London Core Event Disciplines',
                        itemListElement: [
                            {
                                '@type': 'ListItem',
                                position: 1,
                                name: 'Bespoke Weddings & Mandap Styling',
                                url: `${SITE_CONFIG.url}/weddings`,
                            },
                            {
                                '@type': 'ListItem',
                                position: 2,
                                name: 'DJ, Concert-Grade Sound & Stage Production',
                                url: `${SITE_CONFIG.url}/dj-entertainment`,
                            },
                            {
                                '@type': 'ListItem',
                                position: 3,
                                name: 'Artisanal Indian, Pan-Asian & Fusion Catering',
                                url: `${SITE_CONFIG.url}/catering`,
                            },
                            {
                                '@type': 'ListItem',
                                position: 4,
                                name: 'Corporate Event Production & Gala Dinners',
                                url: `${SITE_CONFIG.url}/corporate`,
                            },
                            {
                                '@type': 'ListItem',
                                position: 5,
                                name: 'Event Production Packages & Tiers',
                                url: `${SITE_CONFIG.url}/packages`,
                            },
                        ],
                    },
                    ...eventSchemas,
                    {
                        '@type': 'FAQPage',
                        '@id': `${SITE_CONFIG.url}/#faq`,
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'Why is Wassup London known for producing the best events in London?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Based in Paddington, Central London, Wassup London unites four in-house production disciplines under one roof: bespoke wedding & mandap architecture, L-Acoustics & d&b concert-grade DJ sound and lighting, artisanal Indian & Pan-Asian live catering, and corporate gala production across London’s most iconic venues.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'What event production services does Wassup London provide?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Wassup London is a turnkey luxury event production atelier in London offering four unified disciplines: Bespoke Wedding Planning & Mandap Styling, Concert-Grade DJ, Audio & Intelligent Lighting Production, Artisanal Indian, Pan-Asian & Fusion Catering, and Corporate Gala & Brand Event Management.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Do you specialise in South Asian, Indian, Gujarati, Punjabi, and fusion weddings in the UK?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. We plan and produce multi-day Hindu, Sikh, Muslim, Gujarati, Punjabi, and multicultural fusion weddings across London, the UK, and European destinations—handling Mehndi, Sangeet, Baraat, religious ceremonies, and black-tie receptions under one point of contact.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Can we book standalone DJ & sound production or catering, or only full-service packages?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'You can engage Wassup London for a single standalone discipline (such as DJ & concert sound, bespoke catering, or mandap decor) or select one of our unified production tiers (Essential, Elevated, Grand Ballroom, or Custom Blueprint) for end-to-end event delivery.',
                                },
                            },
                        ],
                    },
                ],
            };
        }

        case 'weddings':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/weddings#webpage`,
                        url: `${SITE_CONFIG.url}/weddings`,
                        name: 'Wedding Planning London — Bespoke South Asian, Indian & Fusion Weddings | Wassup London',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Weddings', path: '/weddings' },
                    ]),
                    {
                        '@type': 'Service',
                        '@id': `${SITE_CONFIG.url}/weddings#service`,
                        name: 'Bespoke Wedding Planning, Mandap Architecture & Luxury Reception Production',
                        serviceType: 'Wedding Planning & Event Production',
                        provider: orgRef,
                        areaServed: SITE_CONFIG.areasServed,
                        description:
                            'End-to-end luxury wedding planning in London and across the UK. Specialising in South Asian, Hindu, Sikh, Gujarati, Punjabi, and contemporary fusion weddings, custom mandaps, floral design, catering, and entertainment.',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Wedding Planning & Production Services',
                            itemListElement: [
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Wedding Planning & Supplier Management' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke Mandap Design & Floral Installations' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mehndi, Sangeet, Ceremony & Reception Production' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Indian, Pan-Asian & Fusion Wedding Banqueting' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding DJs, Live Dhol Drummers, Saxophonists & LED Dance Floors' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Day-Of Wedding Coordination & Cue Calling' } },
                            ],
                        },
                    },
                    {
                        '@type': 'FAQPage',
                        '@id': `${SITE_CONFIG.url}/weddings#faq`,
                        mainEntity: [
                            {
                                '@type': 'Question',
                                name: 'What wedding celebrations does Wassup London design and manage?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'We design and coordinate every chapter of your celebration, including Mehndi nights, high-energy Sangeet productions, Baraat processions, traditional Hindu/Sikh/civil ceremonies with custom mandaps, and luxury evening receptions.',
                                },
                            },
                            {
                                '@type': 'Question',
                                name: 'Do you travel outside London for UK country estate and destination weddings?',
                                acceptedAnswer: {
                                    '@type': 'Answer',
                                    text: 'Yes. Alongside Mayfair, Knightsbridge, and central London hotel ballrooms, our production and culinary teams deliver weddings at historic country estates across Surrey, Berkshire, Hertfordshire, Cotswolds, and international destinations.',
                                },
                            },
                        ],
                    },
                ],
            };

        case 'dj-entertainment':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/dj-entertainment#webpage`,
                        url: `${SITE_CONFIG.url}/dj-entertainment`,
                        name: 'DJ, Sound & Stage Production London — L-Acoustics, Moving Head FX & LED Dance Floors | Wassup London',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'DJ & Sound Production', path: '/dj-entertainment' },
                    ]),
                    {
                        '@type': 'Service',
                        '@id': `${SITE_CONFIG.url}/dj-entertainment#service`,
                        name: 'Concert-Grade DJ, Audio Engineering, Intelligent Lighting & Stage Production',
                        serviceType: 'Event DJ & Audio-Visual Production',
                        provider: orgRef,
                        areaServed: SITE_CONFIG.areasServed,
                        description:
                            'Touring-specification L-Acoustics and d&b audiotechnik sound systems, GrandMA3 timecode moving-head lighting, 3D infinity & gloss white LED dance floors, open-format resident DJs, live saxophonists, and dhol drummers in London.',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'DJ, Sound & Lighting Capabilities',
                            itemListElement: [
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'L-Acoustics & d&b audiotechnik Club-Spec Sound Systems' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Intelligent Moving-Head Lighting, Lasers & Cold Spark Pyrotechnics' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '3D Infinity Mirror & Gloss Acrylic LED Dance Floors' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Open-Format Club Resident DJs & Turntablists' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Live Saxophonists, Percussionists & Punjabi Dhol Drummers' } },
                            ],
                        },
                    },
                ],
            };

        case 'catering':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/catering#webpage`,
                        url: `${SITE_CONFIG.url}/catering`,
                        name: 'Artisanal Event & Wedding Catering London — Indian, Gujarati, Punjabi & Pan-Asian | Wassup London',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Artisanal Catering', path: '/catering' },
                    ]),
                    {
                        '@type': 'Service',
                        '@id': `${SITE_CONFIG.url}/catering#service`,
                        name: 'Artisanal Heritage Indian, Gujarati, Punjabi, Pan-Asian & Fusion Event Catering',
                        serviceType: 'Event & Wedding Catering',
                        provider: orgRef,
                        areaServed: SITE_CONFIG.areasServed,
                        description:
                            'Bespoke luxury wedding and event catering across London and the UK. Featuring Heritage Indian, Punjabi, Gujarati, Pan-Asian wok, contemporary Mediterranean fusion, live chaat street counters, robata/tandoor grills, and bespoke mixology. 100% Halal, Vegetarian, Vegan, and Jain friendly.',
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Culinary Menus & Live Stations',
                            itemListElement: [
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Heritage North & West Indian Banqueting (Punjabi & Gujarati)' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pan-Asian Dim Sum, Wok & Robata Grill Catering' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contemporary Mediterranean & Fusion Grazing Tables' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Live Chaat Street & Open Charcoal Tandoor Stations' } },
                                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bespoke Botanical Mixology & Dessert Architecture' } },
                            ],
                        },
                    },
                ],
            };

        case 'corporate':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/corporate#webpage`,
                        url: `${SITE_CONFIG.url}/corporate`,
                        name: 'Corporate Event Production & Gala Dinners London | Wassup London',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Corporate Events', path: '/corporate' },
                    ]),
                    {
                        '@type': 'Service',
                        '@id': `${SITE_CONFIG.url}/corporate#service`,
                        name: 'Corporate Event Production, Awards Galas, Brand Activations & Company Summits',
                        serviceType: 'Corporate Event Production & AV Management',
                        provider: orgRef,
                        areaServed: SITE_CONFIG.areasServed,
                        description:
                            'Turnkey corporate event production in London for up to 2,500+ guests. Delivering awards ceremonies, black-tie gala dinners, brand activations, product launches, and company summits with broadcast-grade stage lighting, LED video walls, and VIP hospitality.',
                    },
                ],
            };

        case 'packages':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/packages#webpage`,
                        url: `${SITE_CONFIG.url}/packages`,
                        name: 'Event Production Packages & Tiers — Essential, Elevated, Grand Ballroom & Bespoke | Wassup London',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Packages & Tiers', path: '/packages' },
                    ]),
                    {
                        '@type': 'Service',
                        '@id': `${SITE_CONFIG.url}/packages#service`,
                        name: 'Modular Event & Wedding Production Packages',
                        serviceType: 'Event Production Packages',
                        provider: orgRef,
                        areaServed: SITE_CONFIG.areasServed,
                        hasOfferCatalog: {
                            '@type': 'OfferCatalog',
                            name: 'Wassup London Production Tiers',
                            itemListElement: [
                                {
                                    '@type': 'Offer',
                                    name: '01 / Essential Tier (Boutique & Intimate, up to 120 guests)',
                                    description: 'Pro crystal-audio sound rig, dual Shure Axient wireless mics, architectural LED uplighting, resident DJ (up to 5 hours), and on-site audio technician.',
                                    url: `${SITE_CONFIG.url}/packages`,
                                },
                                {
                                    '@type': 'Offer',
                                    name: '02 / Elevated Tier (Signature Choice, 150–350 guests)',
                                    description: 'Concert-spec d&b / L-Acoustics system, intelligent DMX moving heads, gloss white or mirror-gold DJ booth, resident DJ + Live Saxophone or Dhol set, and low-fog dry ice first dance.',
                                    url: `${SITE_CONFIG.url}/packages`,
                                },
                                {
                                    '@type': 'Offer',
                                    name: '03 / Grand Ballroom Tier (Arena Scale Production, 350–800+ guests)',
                                    description: 'High-resolution P2.6 LED video wall (16x9ft), timecode beam/spot/laser show, 3-piece live musician fusion (Sax, Dhol & Percussion), cold spark pyrotechnics, custom 3D infinity or gloss dance floor, and executive event director.',
                                    url: `${SITE_CONFIG.url}/packages`,
                                },
                                {
                                    '@type': 'Offer',
                                    name: '04 / Custom Blueprint Tier (Bespoke Atelier, 100–1,500+ guests)',
                                    description: '3D CAD spatial visualization, Michelin-calibre multi-course catering curation, international headline talent booking, custom marquee & staging logistics, and senior planning direction.',
                                    url: `${SITE_CONFIG.url}/packages`,
                                },
                            ],
                        },
                    },
                ],
            };

        case 'privacy':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/privacy#webpage`,
                        url: `${SITE_CONFIG.url}/privacy`,
                        name: 'Privacy Policy | Wassup London Events Ltd',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Privacy Policy', path: '/privacy' },
                    ]),
                ],
            };

        case 'terms':
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebPage',
                        '@id': `${SITE_CONFIG.url}/terms#webpage`,
                        url: `${SITE_CONFIG.url}/terms`,
                        name: 'Terms of Service | Wassup London Events Ltd',
                        isPartOf: siteRef,
                        inLanguage: 'en-GB',
                    },
                    makeBreadcrumbs([
                        { name: 'Home', path: '/' },
                        { name: 'Terms of Service', path: '/terms' },
                    ]),
                ],
            };

        default:
            return null;
    }
}

