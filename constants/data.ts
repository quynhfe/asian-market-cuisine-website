import { IMAGES } from "@/lib/images";

// ─── Featured Dishes (Home page + Menu) ──────────────────────────────────────
export const featuredDishes = [
  {
    id: "dish-1",
    title: "Artisan Bao Buns",
    description: "Steamed Bao buns with choice of grilled chicken, crispy prawn, Mexican chicken, pulled pork or marinated beef",
    imageUrl: IMAGES.artisanBaoBuns,
    isNew: true,
    category: "Curated Selection",
  },
  {
    id: "dish-2",
    title: "Stir-fried Phở",
    description: "Our stir-fried version takes everything you love about Phở and turns up the heat",
    imageUrl: IMAGES.stirFriedPho,
    isSignature: true,
    category: "Curated Selection",
  },
  {
    id: "dish-3",
    title: "Thai green papaya",
    description: "Thai green papaya with or without shrimp, a refreshing kick of balanced flavors.",
    imageUrl: IMAGES.thaiGreenPapaya,
    category: "Regional Heritage",
  },
  {
    id: "dish-4",
    title: "Pad Kra Pao",
    description: "Authentic Thai basil stir-fry, perfectly seasoned with garlic, chilies, and soy sauce, served over fragrant jasmine rice.",
    imageUrl: IMAGES.padKraPao,
    category: "Bangkok Classic",
  },
];

// ─── Gallery Items (Gallery page) ────────────────────────────────────────────
export const galleryItems = [
  { id: 1, category: "Culinary Craft", title: "Summer Greens", src: IMAGES.gallery1, alt: "asian salad bowl", arch: true },
  { id: 2, category: "The Space", title: "Golden Hour Seating", src: IMAGES.gallery2, alt: "restaurant interior", arch: false },
  { id: 3, category: "Culinary Craft", title: "Morning Steam", src: IMAGES.gallery3, alt: "steamed dumplings", arch: false },
  { id: 4, category: "Our People", title: "The Art of Plating", src: IMAGES.gallery4, alt: "chef plating", arch: true },
  { id: 5, category: "Culinary Craft", title: "Signature Phở", src: IMAGES.gallery5, alt: "signature pho", arch: false },
  { id: 6, category: "The Space", title: "Shared Moments", src: IMAGES.gallery6, alt: "shared table plates", arch: true },
  { id: 7, category: "Culinary Craft", title: "Heritage Ingredients", src: IMAGES.gallery7, alt: "Asian ingredients detail", arch: false },
  { id: 8, category: "The Space", title: "Rattan Glow", src: IMAGES.gallery8, alt: "interior lighting", arch: true },
  { id: 9, category: "Our People", title: "Kitchen Hands", src: IMAGES.gallery9, alt: "chef in action", arch: false },
  { id: 10, category: "Culinary Craft", title: "Artisan Dumplings", src: IMAGES.hero1, alt: "dumplings close up", arch: true },
  { id: 11, category: "The Space", title: "Evening Ambiance", src: IMAGES.hero2, alt: "dining area wide", arch: false },
  { id: 12, category: "Culinary Craft", title: "Noodle Ritual", src: IMAGES.hero3, alt: "pho bowl perspective", arch: true },
];

export const GALLERY_CATEGORIES = ["All", "Culinary Craft", "The Space", "Our People"] as const;

// ─── Testimonials (Story page carousel) ──────────────────────────────────────
export const testimonials = [
  {
    id: "t-1",
    origin: "From Australia",
    quote: "Lou and Ben once avoided fish sauce, but after trying our papaya salad, it became their favorite. Now they return often, bringing warmth and feeling like part of our story.",
    author: "Lou & Ben",
    bgClass: "bg-surface",
    imageUrl: IMAGES.benLouis,
  },
  {
    id: "t-2",
    origin: "Seoul, Korea",
    quote: "\"다낭에서 진짜 맛있는 로컬 맛집—깔끔하고 가격도 좋고, 먹으면 행복해지는 한 끼.\"",
    subQuote: "\"A truly delicious local spot in Da Nang—clean, affordable, and a meal that makes you happy.\"",
    author: "@out.life",
    bgClass: "bg-[#F9D67B]",
    imageUrl: IMAGES.koreanGuest,
  },
  {
    id: "t-3",
    origin: "London, UK",
    quote: "One of our guests shared that even while living with Crohn's disease, they were able to enjoy traveling and dining in Vietnam without fear.",
    author: "Eloise Turner",
    bgClass: "bg-surface",
    imageUrl: IMAGES.anotherFeedback,
  },
];

// ─── Home page hero gallery images ───────────────────────────────────────────
export const heroGalleryImages = [
  { src: IMAGES.gallery1, alt: "Food Gallery" },
  { src: IMAGES.gallery2, alt: "Food Gallery" },
  { src: IMAGES.gallery3, alt: "Food Gallery" },
  { src: IMAGES.gallery4, alt: "Food Gallery" },
  { src: IMAGES.gallery5, alt: "Food Gallery" },
  { src: IMAGES.gallery6, alt: "Food Gallery" },
];

// ─── Home page reviews marquee ────────────────────────────────────────────────
export const reviews = [
  { quote: "An oasis of calm in Da Nang. The Bao buns are transformative. We came twice during our Hyatt stay.", author: "Sarah M., Traveler" },
  { quote: "Best Indonesian food outside of Bali. The stir-fried Pho is a unique take I haven't found anywhere else.", author: "David Chen, Foodie" },
  { quote: "Everything was perfect. The flavour combinations were unlike anything I've had before. Pure soul in every bite.", author: "Marie J., Paris" },
  { quote: "A hidden gem near the Marble Mountains. The Nasi Goreng Royale alone is worth the trip.", author: "Tom K., Sydney" },
];

// ─── "As Seen By" social handles ─────────────────────────────────────────────
export const socialMentions = ["@ou.life", "@ou.bubu", "VietnamEats"];

// ─── Find Us — digital portal links ──────────────────────────────────────────
export const digitalPortalLinks = [
  { name: "Grab", icon: "restaurant", link: "#" },
  { name: "Maps", icon: "map", link: "#" },
  { name: "Gmail", icon: "mail", link: "mailto:info@asianmarket.com" },
  { name: "IG", icon: "photo_camera", link: "#" },
  { name: "FB", icon: "public", link: "#" },
] as const;

// ─── Menu tabs ────────────────────────────────────────────────────────────────
export const MENU_TABS = [
  { id: "starters", label: "Starters" },
  { id: "deep-fried", label: "Deep-Fried" },
  { id: "bao-buns", label: "Bao Buns" },
  { id: "rice", label: "Rice" },
  { id: "noodles", label: "Noodles" },
  { id: "drinks", label: "Sides & Drinks" },
] as const;

// ─── Booking ──────────────────────────────────────────────────────────────────
export const BOOKING_DATES = [
  { day: "Thu", date: 24, month: "Oct" },
  { day: "Fri", date: 25, month: "Oct" },
  { day: "Sat", date: 26, month: "Oct" },
  { day: "Sun", date: 27, month: "Oct" },
] as const;

export const BOOKING_TIMES = ["17:30", "18:00", "19:30", "20:00", "21:00"] as const;

export const BOOKING_INFO = [
  { icon: "calendar_month", label: "Service Days", value: "Monday — Saturday" },
  { icon: "schedule", label: "Hours", value: "11:00 — 21:00" },
] as const;
