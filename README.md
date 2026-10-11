# Oxtinmediaconcept Limited — Portfolio Website

A modern, portfolio-first corporate website for **Oxtinmediaconcept Limited**, an Abuja-based branding, signage, custom fabrication, outdoor installations, printing, and sculpture company.

Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

---

## Architecture Overview

All company information, services, brand portfolio projects, equipment, contacts, and navigation are centralized under `src/content/`. Page templates and layout components consume this layer directly — updating or expanding client data does not require modifying JSX/TSX page code.

```text
src/
├── app/                      # Next.js App Router pages and metadata
│   ├── about/                # Company story, workshop facilities, leadership
│   ├── contact/              # Head office details, direct WhatsApp, contact form
│   ├── projects/             # Portfolio gallery with category filtering
│   │   └── [slug]/           # Project / brand portfolio case study routes
│   ├── request-quote/        # Structured project enquiry form
│   ├── services/             # Confirmed service categories overview
│   │   └── [slug]/           # Dedicated service detail routes
│   ├── layout.tsx            # Global layout with CSS brand tokens
│   ├── page.tsx              # Homepage
│   ├── sitemap.ts            # Dynamic XML sitemap
│   └── robots.ts             # Search engine crawler configuration
├── components/
│   ├── forms/                # QuoteForm & ContactForm (accessible, validated)
│   ├── layout/               # SiteHeader, MobileMenu, SiteFooter, NavLinks
│   ├── projects/             # Gallery, Lightbox (native <dialog>), ProjectCard
│   ├── sections/             # Reusable editorial sections (Hero, ProofStrip, etc.)
│   └── ui/                   # Button, Icon, Logo, SectionHeading, ImageOrFallback
├── content/                  # CANONICAL CONTENT LAYER
│   ├── branding.ts           # Company brand colours, wordmark, logo config
│   ├── company.ts            # Legal info, positioning, proof claims, process
│   ├── contact.ts            # Verified phones, WhatsApp, email, office address
│   ├── equipment.ts          # Verified workshop machinery
│   ├── media.ts              # Media manifest references
│   ├── pages.ts              # Centralized editorial headlines and intros
│   ├── projects.ts           # Approved brand portfolio groups & case studies
│   ├── services.ts           # Confirmed services, inclusions and options
│   ├── team.ts               # Executive leadership and team records
│   └── index.ts              # Typed lookup helpers
└── lib/
    ├── forms/                # Form validation, server actions, provider abstraction
    ├── images.ts             # Build-time image scanner and fallback logic
    └── utils.ts              # Utility helpers
```

---

## Getting Started

### Prerequisites
- Node.js 20+ (developed on Node v22.15.0)
- npm 10+

### Installation & Development
```bash
# Install dependencies
npm install

# Run development server (automatically scans for new images)
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Typecheck, scan images, and build production output
npm run build

# Start production server
npm run start
```

---

## How to Update Client Information

### 1. Logo
Drop your transparent SVG or PNG logo into `public/images/brand/logo.svg` (or `.png`), then update `src/content/branding.ts`:
```ts
logo: {
  src: "/images/brand/logo.svg",
  alt: "Oxtinmediaconcept Limited",
  width: 220,
  height: 48,
},
```

### 2. Portfolio & Equipment Images
Approved photographs from the client presentation can be dropped directly into their designated folders in `public/images/`:
- `public/images/projects/tecno/`
- `public/images/projects/infinix/`
- `public/images/projects/itel/`
- `public/images/projects/oppo/`
- `public/images/projects/speedaf/`
- `public/images/sculpture/`
- `public/images/equipment/`
- `public/images/workshop/`

Whenever you run `npm run dev` or `npm run build`, `scripts/scan-images.mjs` automatically updates `available-images.json`. Any missing image automatically falls back to an elegant branded placeholder tile without breaking the UI.

### 3. Contact Details & Phone Numbers
Edit `src/content/contact.ts` to adjust phone numbers, WhatsApp default message, or office address lines.

### 4. Leadership & Team
In `src/content/team.ts`, toggle `public: true` on verified staff profiles and assign their confirmed titles and photos.

### 5. Connecting Form Submissions
Forms are wired to a safe server action (`src/lib/forms/actions.ts`). By default, submissions safely return `NOT_CONFIGURED` with direct WhatsApp, phone, and email alternatives to ensure no enquiry is silently lost.

To connect a webhook or email delivery service, set in `.env.local`:
```env
ENQUIRY_PROVIDER="webhook"
ENQUIRY_WEBHOOK_URL="https://your-webhook-endpoint.com/enquiries"
ENQUIRY_WEBHOOK_SECRET="your-secret-token"
```

---

## Deployment to Vercel

1. Push this repository to GitHub or GitLab.
2. Import the repository in [Vercel](https://vercel.com).
3. Framework preset will automatically detect **Next.js**.
4. Set `NEXT_PUBLIC_SITE_URL` to your production domain in the Vercel Environment Variables dashboard.
5. Deploy.
