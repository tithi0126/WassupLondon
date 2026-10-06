// ─── lib/data.js — All static data for the Wassup London website ─────────────────────

// ─── Upcoming / Featured Events (single source of truth) ──────────────────
// Used by VimeoHero (hero listing) AND Showreel (grid). Edit dates/venues here only.
export const EVENTS = [
    {
        id: 1,
        type: 'localvideo',
        src: '/assets/Videos/Best Latin party in Amsterdam - Cinematic Club Aftermovie.mp4',
        label: 'Night Fever London',
        tag: 'EGG London',
        date: '24 Oct 2026',
        venue: 'EGG London · Doors 10pm',
    },
    {
        id: 2,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        label: 'Luxury Wedding',
        tag: 'Mandap & Stage',
        date: '08 Nov 2026',
        venue: 'Private Venue · London',
    },
    {
        id: 3,
        type: 'localvideo',
        src: '/assets/Videos/Best Latin party in Amsterdam - Cinematic Club Aftermovie.mp4',
        label: 'Bass Culture Rave',
        tag: 'Fabric London',
        date: '22 Nov 2026',
        venue: 'Fabric London · Doors 11pm',
    },
    {
        id: 4,
        type: 'localvideo',
        src: '/assets/Videos/Dallas Nightclub Video Clip Live Inside Club 8 Dallas Nightclub.mp4',
        label: 'NYE Gala 2026',
        tag: 'EGG London',
        date: '31 Dec 2026',
        venue: 'EGG London · Doors 9pm',
    },
    {
        id: 5,
        type: 'localvideo',
        src: '/assets/Videos/Dancing Club Stock Video Free Download..mp4',
        label: 'Rooftop Rave',
        tag: 'Skylight London',
        date: '07 Feb 2027',
        venue: 'Skylight London · Doors 8pm',
    },
    {
        id: 6,
        type: 'image',
        src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80',
        label: 'Corporate Gala',
        tag: 'The Shard',
        date: '14 Mar 2027',
        venue: 'The Shard · Private Dining',
    },
];

// Marquee brand / partner logos
// NOTE: SVG files are placeholder assets from the original template.
// Replace src paths and names with real client/partner logos before going live.
export const brands = [
    { name: "Partner 1", src: "/assets/Brand Logos SVG/oxxio_logo.svg" },
    { name: "Partner 2", src: "/assets/Brand Logos SVG/hema_logo.svg" },
    { name: "Partner 3", src: "/assets/Brand Logos SVG/kfc_logo.svg" },
    { name: "Partner 4", src: "/assets/Brand Logos SVG/swapfiets_logo.svg" },
    { name: "Partner 5", src: "/assets/Brand Logos SVG/anwb_logo.svg" },
    { name: "Partner 6", src: "/assets/Brand Logos SVG/netflix_logo.svg" },
    { name: "Partner 7", src: "/assets/Brand Logos SVG/ace_tate_logo.svg" },
    { name: "Partner 8", src: "/assets/Brand Logos SVG/getir_logo.svg" }
];

export const colors = [
    "var(--color-green)",
    "var(--color-lightblue)",
    "var(--color-darkblue)",
    "var(--color-lightgreen)",
    "var(--color-orange)",
    "var(--color-maroon)",
    "var(--color-pink)"
];

// Footer social icon links
export const SOCIAL_ICONS = [
    {
        href: 'https://www.instagram.com/wassuplondon',
        label: 'Instagram',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M35.9653 20.2209C35.9393 17.6695 36.1018 15.1165 35.8873 12.5586C35.7589 10.8912 35.2828 9.24659 34.3662 7.94651C33.3083 6.48229 31.714 5.09445 29.8338 4.89131C28.719 4.7808 27.7 4.3274 26.5511 4.42165C26.0603 4.4444 25.5776 4.38103 25.0933 4.31765C24.5099 4.26077 23.8973 4.38265 23.3009 4.32902C21.6644 4.22989 20.0263 4.0625 18.3882 4.14213C17.5285 4.01538 16.6525 4.04625 15.7896 4.01538C15.3557 3.98937 14.9202 3.991 14.4895 4.0625C13.2171 4.27539 11.9397 4.51591 10.6673 4.74992C10.1326 4.84906 9.58821 4.97256 9.1023 5.21958C8.34663 5.60961 7.75509 6.27427 7.10017 6.81056C6.78165 7.0982 6.56389 7.46873 6.40463 7.862C6.08123 8.64368 5.6327 9.37823 5.39056 10.1973C5.15329 11.2195 4.80227 12.2205 4.70152 13.2622C4.39275 16.6343 4.00922 19.9983 4.08397 23.3915C4.09535 23.9733 3.98809 24.5551 4.0011 25.1271C4.09698 26.3622 4.38137 27.5859 4.62839 28.7999C4.78277 29.5328 5.03466 30.2446 5.40844 30.8946C6.48263 32.6904 8.01023 34.7851 10.313 34.946C12.9116 35.1947 15.4776 35.7456 18.0891 35.8626C19.5891 35.9016 21.094 36.1697 22.6021 35.9812C23.01 35.9341 23.4162 35.8821 23.8274 35.8626C24.2223 35.8366 24.5652 35.874 24.9113 35.8447C25.5988 35.7764 26.2764 35.5408 26.9622 35.4677C28.3907 35.4027 29.8468 35.2759 31.168 34.7299C33.0629 34.1156 34.0396 32.8805 34.701 31.0506C35.4274 29.2842 35.611 27.3779 35.6452 25.4798C35.7167 24.7469 35.9101 24.0221 35.9279 23.281C35.9588 22.7203 35.8304 22.1564 35.8499 21.6088C35.8629 21.1554 35.9686 20.7052 35.9637 20.2518V20.2209H35.9653ZM33.6642 19.3304C33.5163 20.0584 33.3911 20.7231 33.4301 21.4788C33.2221 23.3704 33.3993 25.2961 33.1913 27.1829C33.1458 28.6114 33.0531 30.2153 31.9594 31.27C31.3858 31.8356 30.7698 32.4011 30.0304 32.6579C29.5543 32.8383 29.0391 32.8789 28.5353 32.9276C27.9633 32.9861 27.4091 33.1308 26.842 33.2153C25.0121 33.4948 23.1822 33.8426 21.3247 33.6541C20.0506 33.6151 18.7749 33.6004 17.5009 33.5501C16.1731 33.4948 14.8536 33.4298 13.5307 33.3274C12.3964 33.2299 11.2361 33.1665 10.2041 32.6757C7.34719 31.3107 6.80603 27.8443 6.58176 25.0101C6.429 22.5416 6.26974 20.0227 6.61264 17.572C6.89703 15.2107 7.20255 12.8543 7.78434 10.5369C8.07361 9.36035 9.04867 8.66481 9.99774 7.98226C10.7307 7.44273 11.5676 7.08358 12.424 6.79918C13.0887 6.52941 13.8249 6.58142 14.5188 6.50341C15.8579 6.25477 17.2165 6.10689 18.5783 6.07764C20.1205 6.06139 21.6676 6.07764 23.2034 6.20602C25.0316 6.43028 26.842 6.75368 28.68 6.91782C29.8939 7.01857 31.0786 7.4931 31.8002 8.52667C32.2828 9.17346 32.7183 9.86413 32.9556 10.6312C33.1246 11.135 33.1197 11.6843 33.1994 12.2108C33.4854 13.2899 33.4838 14.4031 33.5455 15.5114C33.6918 16.3272 33.5797 17.143 33.6203 17.962C33.6495 18.4073 33.7113 18.8575 33.6674 19.3028L33.6642 19.3336V19.3304Z" fill="currentColor"/><path d="M27.7674 17.988C27.3595 16.1712 26.1066 14.6907 24.6391 13.6392C23.7875 13.0591 22.7751 12.6853 21.7318 12.5114C21.2166 12.4253 20.721 12.2482 20.2318 12.253C18.4442 12.3505 16.7622 13.0851 15.3695 14.1934C14.8722 14.5542 14.5147 15.0271 14.1393 15.5146C13.8581 15.8673 13.5607 16.2215 13.356 16.6148C13.0358 17.2145 12.8717 17.8791 12.7384 18.5406C12.5792 19.3174 12.4427 20.1445 12.5174 20.9408C12.7628 23.5703 14.6723 26.2419 17.1246 27.2771C17.8039 27.6103 18.4621 27.8199 19.1999 27.8345C20.7242 28.1547 22.3184 27.9451 23.6413 27.0935C24.4587 26.567 25.3509 26.0876 26.0204 25.366C27.3238 23.8839 28.0144 22.0882 28.0924 20.0649C28.1705 19.345 27.9982 18.721 27.7772 18.0189L27.769 17.9864L27.7674 17.988ZM25.4711 21.2854C25.073 22.54 24.1434 24.2366 22.9311 24.872C22.034 25.3091 21.0249 25.5171 20.0384 25.6407C19.1527 25.6195 18.1874 25.5009 17.4626 25.0264C17.1831 24.8411 16.9296 24.6217 16.6761 24.4007C14.5407 22.7382 14.084 19.6066 15.2752 17.2681C15.493 16.8098 15.8635 16.4539 16.273 16.163C17.2205 15.4756 18.1809 14.8532 19.3201 14.6647C20.1619 14.5038 20.9907 14.7589 21.826 14.8597C23.053 15.0433 23.8217 15.929 24.514 16.857C25.4663 18.0579 25.9083 19.7643 25.4809 21.2561L25.4728 21.287L25.4711 21.2854Z" fill="currentColor"/><path d="M30.2261 11.8094C29.8621 13.3451 28.991 13.766 27.5382 13.1468C26.4754 12.708 26.2137 11.4583 26.971 10.6149C27.4846 10.0396 28.2012 9.35057 29.0414 9.69835C29.2705 9.80885 29.4412 10.0006 29.6281 10.1696C30.1058 10.5759 30.4292 11.1414 30.2326 11.7769L30.2245 11.8077L30.2261 11.8094Z" fill="currentColor"/></svg>'
    },
    {
        href: 'https://www.tiktok.com/@wassuplondon',
        label: 'TikTok',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none" data-wiggle-target="" aria-hidden="true"><path d="M35.7673 17.7056C35.5701 16.7041 35.4805 15.6928 35.2035 14.7093C34.9706 13.9378 34.6056 13.2315 34.2195 12.5366C33.5922 11.3378 32.7581 10.2775 31.8962 9.22711C31.2087 8.3773 30.4299 7.59599 29.5322 6.96965C27.8932 5.91758 26.1075 5.03189 24.2519 4.4349C23.302 4.17392 22.3277 4.03038 21.3404 4.04996C20.4753 4.04506 19.6102 3.9733 18.7483 4.01081C17.049 4.05975 15.4019 4.61922 13.8166 5.16074C12.51 5.59951 11.363 6.38082 10.26 7.19148C9.825 7.50628 9.50404 7.9369 9.12769 8.31531C7.22801 10.0394 5.69979 12.2332 4.89495 14.6848C4.6082 15.6194 4.47135 16.572 4.19763 17.5115C4.051 18.0057 3.99398 18.5147 4.0005 19.0285C4.00701 20.1311 3.97117 21.2011 4.15202 22.2874C4.49253 24.9608 5.62973 27.2362 7.15632 29.3844C7.60599 30.0221 8.15504 30.5718 8.61774 31.1982C8.97128 31.6794 9.35741 32.154 9.84455 32.5047C10.304 32.857 10.8351 33.0479 11.3386 33.3431C11.899 33.6693 12.3976 34.1081 13.0069 34.3185C13.4468 34.4653 13.8769 34.6349 14.2858 34.8551C15.3237 35.382 16.5407 35.3624 17.6502 35.6805C18.9389 36.0181 20.2521 36.0899 21.5441 35.8876C22.3799 35.8061 23.2271 35.7637 24.0172 35.457C24.7048 35.1667 25.4835 35.1145 26.176 34.8682C26.4643 34.7605 26.7283 34.6039 26.9906 34.4441C27.8117 33.9319 28.7062 33.529 29.4638 32.9043C30.3468 32.141 31.2413 31.4102 32.0624 30.5718C32.5381 30.0303 32.8069 29.3469 33.3576 28.8641C34.0191 28.1072 34.3205 27.1188 34.8419 26.269C35.2785 25.4208 35.4414 24.4715 35.6402 23.5026C36.0605 21.5632 36.1224 19.7331 35.7738 17.7382L35.7689 17.7056H35.7673ZM28.4602 16.8591C28.3103 17.2326 28.4227 17.8459 28.1425 18.1085C27.204 18.575 25.9984 17.6159 25.2669 17.0467C24.8009 16.6405 24.4571 16.9178 24.4213 17.4805C24.3936 17.7823 24.4474 18.0857 24.4848 18.3874C24.6152 19.3155 24.5793 20.2551 24.5419 21.188C24.4278 23.9071 24.3105 27.4254 21.7282 29.0109C21.0227 29.4284 20.2097 29.5866 19.4049 29.6796C18.5805 29.8329 17.7887 29.8982 16.9887 29.6258C14.3966 29.0386 12.3633 26.7795 12.5784 24.0262C12.5572 23.4031 12.4513 22.7376 12.668 22.1439C13.0981 21.1587 13.6227 20.1833 14.4357 19.4297C15.5518 18.6158 16.8698 17.965 18.2775 17.9372C18.8086 17.9063 19.0676 18.3401 19.0367 18.8246C19.0236 19.3563 19.0106 19.8815 18.9471 20.4019C18.8118 21.1815 17.7968 21.1375 17.2347 21.4849C15.9118 22.139 15.1053 24.7439 15.9607 25.9786C17.0164 27.4287 19.4277 27.2134 20.4997 25.9036C20.648 25.6883 20.7295 25.4273 20.8077 25.1794C21.052 24.3687 21.3714 23.5662 21.3534 22.6985C21.342 22.2532 21.3241 21.8095 21.3925 21.3675C21.6125 19.8962 21.4691 18.4266 21.4561 16.952C21.4561 15.8021 21.6532 14.6522 21.6891 13.5039C21.7102 12.8808 21.6793 12.2642 21.6565 11.6346C21.6418 11.359 21.6923 11.0442 21.9807 10.9332C22.6943 10.7669 23.5659 10.594 24.317 10.6674C24.8221 10.7636 24.9149 11.359 25.0665 11.7798C26.0326 14.9197 29.397 14.078 28.4683 16.8297L28.4602 16.8607V16.8591Z" fill="currentColor"/></svg>'
    }
];

// Service cards / Packages data for Wassup London
export const CARDS_DATA = [
    {
        color: 'green',
        sticker: 'camera',
        title: 'weddings',
        link: '/weddings',
        services: ['Full Planning & Coordination', 'Mandap & Stage Styling', 'Bespoke Floral Decor', 'Indian, Asian & Fusion Menus', 'DJ, MC & Intelligent Sound']
    },
    {
        color: 'darkblue',
        sticker: 'phone',
        title: 'dj & entertainment',
        services: ['Club-Quality Sound Rigs', 'Intelligent Lighting & FX', 'LED & Parquet Dance Floors', 'Bespoke Playlist & Live Mixing', 'Saxophonists, Dhol Players & Bands']
    },
    {
        color: 'orange',
        sticker: 'smiley',
        title: 'exceptional catering',
        services: ['Indian, Punjabi & Gujarati', 'Pan-Asian & Global Cuisine', 'Canapés & Live Counters', 'Full Seated Buffet & Service', '100% Vegetarian & Vegan Options']
    },
    {
        color: 'maroon',
        sticker: 'hand',
        title: 'corporate events',
        services: ['Awards & Gala Dinners', 'Product Launches & Conferences', 'AV & Intelligent Production', 'Team Celebrations & Parties']
    },
    {
        color: 'pink',
        sticker: 'heart',
        title: 'packages',
        link: '/weddings',
        services: ['ESSENTIAL — Small Parties', 'PREMIUM — Weddings & Galas', 'LUXURY — Full Production', 'BESPOKE — Tailored Vision']
    }
];

// Extended FAQ Data
export const FAQ_DATA = [
    {
        question: "What is Wassup London?",
        answer: "Wassup London is a full-service events company delivering weddings, DJ & entertainment, catering, corporate events and private celebrations across London and the UK."
    },
    {
        question: "Who can book with Wassup London?",
        answer: "Anyone planning a wedding, party, corporate event or private celebration — from intimate gatherings to large-scale productions."
    },
    {
        question: "How much does it cost to book an event?",
        answer: "Every event is tailored. Catering starts from per-person rates, and packages range from Essential to Bespoke. Request a quote for a personalised breakdown."
    },
    {
        question: "What if I've never planned an event before?",
        answer: "Our team guides you through every step — venue sourcing, menu design, timelines and entertainment — so you never feel out of your depth."
    },
    {
        question: "When can I book?",
        answer: "Weddings: 9–12 months in advance. Parties: 2–4 months ahead. Last-minute requests accommodated where possible."
    }
];

export const CONTACT_INFO = {
    email: "hello@wassuplondon.co.uk",
    whatsappNumber: "+44 7454 904611",
    whatsappUrl: "https://wa.me/447454904611"
};

export const WIGGLE_CONFIG = {
    logoWassup: 4,
    socials: 5,
    jobHeading: 1,
    googleMap: 1,
    email: 1,
    whatsapp: 1,
};

export const ANIMATION_CONFIG = {
    transitionScribble: {
        strokeWidthStart: "8%",
        strokeWidthMax: "31%",
        scale: 0.7,
        durationIn: 2.2,
        durationOut: 2.7
    }
};
