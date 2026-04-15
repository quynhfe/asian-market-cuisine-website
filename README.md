# 🍜 Asian Market Cuisine — Website

> *"Dinner is a Safe Choice."* — A contemporary dialogue between tradition and the street markets of Southeast Asia.

A high-fidelity, production-ready restaurant website for **Asian Market Cuisine**, located at the foot of the Marble Mountains in Đà Nẵng, Vietnam. Built with a Japandi-inspired editorial aesthetic (Japanese minimalism × Scandinavian warmth), the site serves as the brand's primary digital presence — driving dine-in bookings, showcasing the menu, and telling the story of Chef Hang Nguyen.

---

## ✨ Features

| Page | Description |
|---|---|
| **Home `/`** | Full-screen gallery hero, gold award marquee, featured dishes, chef teaser, guest reviews, location info |
| **Our Story `/story`** | Stacked-photo hero, chef biography, philosophy pillars, interactive flip-card team grid, testimonial carousel |
| **Our Menu `/menu`** | Sticky tab navigation across 6 categories (Starters, Deep-Fried, Bao Buns, Rice, Noodles, Sides & Drinks) |
| **Gallery `/gallery`** | Filterable masonry photo grid with category filters and fullscreen lightbox |
| **Book a Table `/booking`** | Interactive reservation form with date picker, time slots, guest counter |
| **Find Us `/find-us`** | Location map, service hours, digital portal links (Grab, Maps, Instagram, Facebook) |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Language | TypeScript |
| Icons | [Material Symbols Outlined](https://fonts.google.com/icons) |
| Fonts | Newsreader (headlines) · DM Sans (body) · Plus Jakarta Sans (labels) |
| Rendering | Static generation (SSG) — all 9 pages prerendered |

---

## 🗂 Project Structure

```
asian-market-cuisine/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer)
│   ├── page.tsx                  # Home
│   ├── story/page.tsx            # Our Story
│   ├── menu/page.tsx             # Our Menu
│   ├── gallery/page.tsx          # Gallery
│   ├── booking/page.tsx          # Book a Table
│   └── find-us/page.tsx          # Find Us
│
├── components/
│   ├── Navbar.tsx                # Global navigation (data-driven, map-based)
│   ├── Footer.tsx                # Global footer (data-driven)
│   │
│   ├── ui/                       # Atomic UI components
│   │   ├── Button.tsx
│   │   ├── Typography.tsx
│   │   ├── Section.tsx
│   │   ├── PageHero.tsx          # Eyebrow + headline + subtitle
│   │   └── StarRating.tsx        # Reusable star rating
│   │
│   ├── features/                 # Domain-specific feature components
│   │   ├── FlipCard.tsx          # 3D flip card (hover to reveal)
│   │   ├── AwardBanner.tsx       # Gold award announcement banner
│   │   ├── DishCard.tsx          # Menu dish card
│   │   └── ReviewCard.tsx        # Guest review card
│   │
│   └── sections/                 # Page-level section components
│       ├── home/
│       │   ├── HeroSection.tsx
│       │   ├── FeaturedDishesSection.tsx
│       │   ├── ChefTeaserSection.tsx
│       │   ├── ReviewsSection.tsx
│       │   └── VisitUsSection.tsx
│       ├── story/
│       │   ├── StoryStaticSections.tsx
│       │   └── TestimonialCarouselSection.tsx
│       ├── gallery/
│       │   ├── GalleryStaticSections.tsx
│       │   └── GalleryGridSection.tsx
│       ├── menu/
│       │   ├── MenuHeroSection.tsx
│       │   └── MenuTabsSection.tsx
│       ├── booking/
│       │   ├── BookingHeroSection.tsx
│       │   └── BookingContent.tsx
│       └── find-us/
│           └── FindUsSections.tsx
│
└── constants/
    └── data.ts                   # Single source of truth for all static content
```

---

## 🧠 Architecture Philosophy

### Data-First
All static content (navigation links, footer columns, gallery items, menu items, reviews, social mentions, booking dates/times, team data) lives in **`constants/data.ts`**. Adding new content means editing one file — no touching page or component files.

### Section-Based Pages
Every page is a **composition of named section components**. Each `page.tsx` contains only imports and renders — no business logic. Example:

```tsx
// app/page.tsx — 15 lines total
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedDishesSection from "@/components/sections/home/FeaturedDishesSection";
// ...

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDishesSection />
      {/* ... */}
    </>
  );
}
```

### Client/Server Boundary
Only components that require interactivity are marked `"use client"`:
- `GalleryGridSection` — filter state + lightbox modal
- `TestimonialCarouselSection` — auto-play carousel with controls
- `MenuTabsSection` — sticky tab switching + smooth scroll
- `BookingContent` — form state (date, time, guests)

Static sections are server components by default for better performance.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

> All 9 pages are statically prerendered. Build time ~5s.

---

## 🎨 Design System

**Theme:** *The Serene Alchemist* — Japandi editorial

| Token | Value |
|---|---|
| Primary | `#3046A7` (indigo blue) |
| Secondary | `#EFC36A` (warm gold) |
| Surface | `#FEF9F1` (warm white) |
| Headline font | *Newsreader* — italic, editorial weight |
| Body font | *DM Sans* |
| Label font | *Plus Jakarta Sans* |
| Shape language | Arch geometry, soft rounded cards |

---

## 📍 About Asian Market Cuisine

**Address:** 49 Trần Văn Đán, Hoà Hải, Ngũ Hành Sơn, Đà Nẵng, Vietnam  
**Hours:** Monday – Saturday · 11:00 AM – 9:00 PM  
**Phone:** 0899 856 547

*Founded by Chef Hang Nguyen, inspired by the seasonal rhythms of Da Nang's local markets and the deep wisdom of ancestral recipes.*
