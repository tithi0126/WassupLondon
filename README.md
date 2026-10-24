# Wassup London

A premium, editorial-style wedding event page designed for the **Wassup London** website.

The wedding page extends the existing Wassup London visual identity with immersive wedding photography, oversized typography, GSAP animations, editorial layouts, wedding services, event functions, and a strong WhatsApp enquiry CTA.

---

## ✨ Overview

The wedding page is designed to feel like a premium creative-event production website rather than a traditional wedding template.

The design combines:

* Large editorial typography
* Black, cream and orange colour palette
* Full-screen photography
* Asymmetrical layouts
* Scroll-based animations
* GSAP and ScrollTrigger
* Interactive service rows
* Wedding function cards
* WhatsApp lead generation
* Responsive layouts for desktop, tablet and mobile

The primary route is:

```text
/weddings
```

---

# 🛠 Technology Stack

This package is designed for the existing Wassup London application.

| Technology         | Usage                            |
| ------------------ | -------------------------------- |
| Next.js            | Application framework            |
| React              | UI components                    |
| JavaScript         | Component logic                  |
| CSS                | Styling and responsive layouts   |
| GSAP               | Animations                       |
| GSAP ScrollTrigger | Scroll-based animations          |
| Lenis              | Existing smooth scrolling system |

No additional dependency is required specifically for this wedding page if GSAP is already installed in the existing project.

---

# 📁 File Structure

The wedding page package contains:

```text
WassupLondon/
│
├── app/
│   ├── weddings/
│   │   └── page.jsx
│   │
│   └── styles/
│       └── wedding.css
│
├── components/
│   └── WeddingPage.jsx
│
├── public/
│   └── images/
│       └── weddings/
│           ├── hero.jpg
│           ├── couple.jpg
│           ├── ceremony.jpg
│           ├── mehndi.jpg
│           ├── sangeet.jpg
│           ├── reception.jpg
│           └── details.jpg
│
├── app/
│   └── globals.css
│
├── package.json
└── README.md
```

### Main files

#### `components/WeddingPage.jsx`

Contains the complete wedding page structure, content, image configuration and GSAP animation setup.

#### `app/styles/wedding.css`

Contains all wedding-specific styling, responsive breakpoints, layout rules, typography and hover effects.

#### `app/weddings/page.jsx`

The Next.js route that renders the wedding page.

---

# 🚀 Installation

## 1. Clone the repository

```bash
git clone https://github.com/tithi0126/WassupLondon.git
```

Move into the project:

```bash
cd WassupLondon
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Run the development server

```bash
npm run dev
```

The application should start on:

```text
http://localhost:3000
```

Open the wedding page:

```text
http://localhost:3000/weddings
```

---

# 🧩 Integrating the Wedding Page

Replace the existing wedding component with:

```text
components/WeddingPage.jsx
```

Replace the wedding stylesheet with:

```text
app/styles/wedding.css
```

The existing route should remain:

```text
app/weddings/page.jsx
```

If the project already contains:

```jsx
import WeddingPage from "@/components/WeddingPage";
```

no route modification should be necessary.

---

# 🎨 Wedding Page Sections

The page is divided into the following major sections.

## 1. Hero

The hero is a full-screen photographic introduction.

Content includes:

```text
Made
for you.
```

Supporting copy introduces Wassup London's wedding planning and production services.

The hero contains:

* Background image
* Dark gradient overlay
* Large typography
* CTA
* Location information
* Scroll indicator
* Image parallax

---

## 2. Marquee

The orange marquee contains rotating brand messaging:

```text
LOVE LOUDER
PLAN BOLDER
CELEBRATE EVERYTHING
```

The marquee loops continuously using GSAP.

---

## 3. Introduction

The introduction establishes the positioning:

```text
Not
just
a wedding.
```

The section uses oversized animated typography and a decorative rotating element.

---

## 4. Wedding Story

The story section uses a two-column editorial layout.

Content:

```text
Big feeling.
Small details.
```

It communicates the philosophy behind the wedding production experience.

---

## 5. Wedding Functions

The page currently includes:

```text
01  Mehndi
02  Sangeet
03  Ceremony
04  Reception
```

Each function has:

* Number
* Heading
* Description
* Arrow
* Hover interaction

---

## 6. Wedding Gallery

The gallery uses an asymmetrical editorial composition.

It includes:

* Couple photography
* Ceremony photography
* Dance/celebration photography
* Table/decor photography

Images overlap and move at different speeds while scrolling.

---

## 7. Services

The wedding service section includes:

```text
01  Full Planning
02  Décor & Design
03  Food & Hospitality
04  Entertainment
05  Day-of Production
06  Destination Weddings
```

Each service is an interactive row.

On hover:

* Background changes to orange
* Row expands horizontally
* Arrow moves
* Typography remains highly visible

---

## 8. Quote

The page contains a large editorial statement:

```text
The best weddings don't feel produced.
They feel completely you.
```

---

## 9. Final CTA

The final section uses full-screen wedding photography and encourages visitors to start a conversation.

CTA:

```text
Ready to make
some memories?
```

The button opens WhatsApp.

---

# 🖼 Image Replacement

The supplied UI may use temporary remote photography.

For production, replace the temporary images with licensed Wassup London wedding photography.

Recommended structure:

```text
public/
└── images/
    └── weddings/
        ├── hero.jpg
        ├── couple.jpg
        ├── ceremony.jpg
        ├── mehndi.jpg
        ├── sangeet.jpg
        ├── reception.jpg
        └── details.jpg
```

---

## Updating Image Paths

Inside:

```text
components/WeddingPage.jsx
```

the images are configured through:

```jsx
const IMAGES = {
  hero: '/images/weddings/hero.jpg',
  couple: '/images/weddings/couple.jpg',
  details: '/images/weddings/details.jpg',
  ceremony: '/images/weddings/ceremony.jpg',
  dance: '/images/weddings/sangeet.jpg',
  table: '/images/weddings/reception.jpg',
};
```

Use local files instead of remote URLs for the final production website.

---

# 📸 Image Recommendations

For the best visual result:

### Hero

Recommended:

```text
2000px+ width
Landscape
High-resolution
Strong couple composition
```

### Gallery

Recommended:

```text
1200px–1800px width
High-quality JPG/WebP
Mix of portrait and landscape photography
```

### Image optimisation

Prefer:

```text
WebP
AVIF
```

where supported.

Avoid unnecessarily large original camera files.

---

# 🎞 Animation Behaviour

The wedding page uses GSAP and ScrollTrigger.

## Hero Animation

When the page loads:

* Hero text fades in
* Text moves upward
* Elements appear sequentially

---

## Hero Parallax

The hero background moves vertically while scrolling.

This creates a cinematic effect.

---

## Intro Text Reveal

Large words are clipped and revealed from below:

```text
Not
just
a wedding.
```

---

## Marquee

The orange marquee continuously moves horizontally.

It loops indefinitely.

---

## Rotating Element

The decorative circular element rotates according to scroll position.

---

## Section Reveal

Sections fade and move upward when entering the viewport.

---

## Gallery Parallax

Gallery images move at slightly different speeds to create depth.

---

## Hover Animations

Interactive cards use:

* Translation
* Background transitions
* Arrow movement
* Padding changes

---

# ⚙️ GSAP Configuration

The component registers:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

Animations are scoped using:

```javascript
gsap.context()
```

This ensures that animations are properly cleaned up when the component unmounts.

The cleanup is handled with:

```javascript
return () => ctx.revert();
```

This is particularly important in Next.js development mode.

---

# 📱 Responsive Design

The wedding page supports:

```text
Desktop
Tablet
Mobile
```

---

## Desktop

Desktop uses:

* Large hero typography
* Multi-column layouts
* Four-column function cards
* Large gallery composition
* Two-column services layout
* Vertical decorative rail

---

## Tablet

Tablet layouts:

* Reduce typography sizes
* Reduce gallery dimensions
* Convert some layouts to two columns
* Reduce spacing
* Simplify navigation/decorative elements

---

## Mobile

Mobile layout changes include:

* Single-column content
* Smaller hero typography
* Stacked wedding functions
* Stacked services
* Compact gallery composition
* Hidden decorative side rail
* Reduced animation complexity
* Full-width CTA

The page should be tested on:

```text
iPhone
Android
iPad
Tablet
Desktop
```

---

# 📲 WhatsApp Configuration

The final CTA currently uses a WhatsApp link.

Example:

```text
https://wa.me/447471557773
```

Replace the number with the official Wassup London business number.

---

## WhatsApp Number Format

Use international format.

Do not include:

```text
+
spaces
-
()
```

For example:

```text
https://wa.me/919876543210
```

instead of:

```text
https://wa.me/+91 98765 43210
```

---

## Updating the CTA

Inside:

```text
components/WeddingPage.jsx
```

find the WhatsApp anchor:

```jsx
<a
  href="https://wa.me/447471557773"
  target="_blank"
  rel="noreferrer"
>
```

Replace the number.

---

# 💬 Suggested WhatsApp Message

For a better lead-generation experience, the WhatsApp URL can include a predefined message.

Example:

```text
https://wa.me/919876543210?text=Hi%20Wassup%20London%2C%20I%27d%20like%20to%20plan%20my%20wedding.
```

This automatically opens WhatsApp with:

```text
Hi Wassup London, I'd like to plan my wedding.
```

---

# 📝 Customising Wedding Content

## Wedding Functions

Edit the `EVENTS` array:

```javascript
const EVENTS = [
  ['01', 'Mehndi', 'Colour, music, movement.'],
  ['02', 'Sangeet', 'Big energy, perfectly timed.'],
  ['03', 'Ceremony', 'Tradition, intimacy, meaning.'],
  ['04', 'Reception', 'The night everyone remembers.'],
];
```

You can add or remove events.

---

## Services

Edit:

```javascript
const SERVICES = [
  ...
];
```

Example:

```javascript
[
  '07',
  'Wedding Photography',
  'Beautifully documented moments from beginning to end.'
]
```

---

# 🔍 SEO

For production, add wedding-specific metadata to:

```text
app/weddings/page.jsx
```

Recommended title:

```text
Weddings | Wassup London
```

Recommended description:

```text
Wassup London creates unforgettable weddings with bold design,
beautiful production and carefully planned experiences.
```

Recommended keywords:

```text
wedding planner
wedding events
Indian wedding planner
London wedding planner
destination wedding
wedding production
wedding decor
wedding entertainment
```

---

# 🧪 Testing Checklist

Before deployment:

* [ ] `/weddings` loads successfully
* [ ] Hero image loads
* [ ] All gallery images load
* [ ] CTA opens WhatsApp
* [ ] WhatsApp number is correct
* [ ] All animations work
* [ ] No console errors
* [ ] Desktop layout tested
* [ ] Tablet layout tested
* [ ] Mobile layout tested
* [ ] Images are optimized
* [ ] Alt text is correct
* [ ] SEO metadata is configured
* [ ] Production build succeeds

---

# 🏗 Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

If the repository has custom scripts, use the commands specified in:

```text
package.json
```

---

# 🌐 Deployment

The wedding page is compatible with a normal Next.js deployment.

## Vercel

Typical deployment:

```bash
npm install
npm run build
```

Then deploy the project through Vercel.

---

## VPS

For a VPS:

```bash
git pull
npm install
npm run build
npm start
```

A process manager such as PM2 can be used:

```bash
pm2 start npm --name "wassup-london" -- start
```

Then configure Nginx or another reverse proxy to forward the domain to the Next.js application.

---

# 🔐 Production Environment

If the project later introduces:

* CRM
* Email
* Database
* WhatsApp API
* Contact forms
* Analytics

keep credentials inside environment variables.

Example:

```text
.env.local
```

Never commit:

```text
.env
.env.local
```

to Git.

---

# 🚀 Future Improvements

The current page is primarily a presentation/lead-generation page.

Recommended future functionality:

## Wedding Enquiry Form

Fields:

```text
Couple Name
Email
Phone
Wedding Date
Venue
City
Guest Count
Functions
Budget
Message
```

---

## CMS Integration

Move the following into a CMS:

```text
Wedding Gallery
Wedding Stories
Services
Packages
Testimonials
Venues
FAQs
```

This would allow the team to update the website without modifying code.

---

## Wedding Portfolio

Create individual wedding case studies:

```text
/weddings
/weddings/rahul-and-priya
/weddings/aisha-and-aryan
/weddings/london-destination-wedding
```

Each case study could include:

* Couple
* Venue
* Guest count
* Functions
* Gallery
* Video
* Services
* Testimonial

---

## Gallery Lightbox

Add a full-screen image viewer allowing users to browse wedding photographs.

---

## Video

Potential additions:

* Wedding highlight videos
* Sangeet videos
* Behind-the-scenes footage
* Client testimonials
* Venue walkthroughs

---

## Lead Management

Future enquiries can be connected to:

```text
Email
WhatsApp
CRM
Database
Google Sheets
```

---

# 📌 Important Notes

This package changes only the wedding page UI.

It does not intentionally modify:

* Authentication
* Database
* Existing API
* Other website routes
* Admin functionality
* Existing business logic

The wedding content is currently static.

It can later be connected to an API or CMS.

---

# ⚠️ Third-Party Assets

The UI may contain temporary third-party photography for demonstration purposes.

Before commercial deployment:

* Replace temporary images
* Confirm photography licensing
* Use owned/licensed Wassup London assets
* Optimize final images

Do not use third-party photography commercially without the appropriate license.

---

# 📦 Package Contents

The wedding UI package contains:

```text
WassupLondon-Wedding-UI/
│
├── components/
│   └── WeddingPage.jsx
│
├── app/
│   └── styles/
│       └── wedding.css
│
└── README.md
```

---

# 🔗 Repository

GitHub:

```text
https://github.com/tithi0126/WassupLondon
```

Wedding page:

```text
/weddings
```

---

# 👩‍💻 Project

**Wassup London**

Wedding Event Page UI

Built to integrate with the existing Wassup London Next.js application.

---

## License

Follow the license and ownership terms of the original Wassup London project and all third-party assets.

All photography, fonts, logos and external assets should be used according to their respective licenses.
