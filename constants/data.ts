// ─── Featured Dishes (Home page + Menu) ──────────────────────────────────────
export const featuredDishes = [
  {
    id: "dish-1",
    title: "Artisan Bao Buns",
    description: "Steamed Bao buns with choice of grilled chicken, crispy prawn, Mexican chicken, pulled pork or marinated beef",
    imageUrl: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&auto=format&fit=crop",
    isNew: true,
    category: "Curated Selection",
  },
  {
    id: "dish-2",
    title: "Stir-fried Phở",
    description: "Our stir-fried version takes everything you love about Phở and turns up the heat",
    imageUrl: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb431?w=800&auto=format&fit=crop",
    isSignature: true,
    category: "Curated Selection",
  },
  {
    id: "dish-3",
    title: "Thai green papaya",
    description: "Thai green papaya with or without shrimp, a refreshing kick of balanced flavors.",
    imageUrl: "https://images.unsplash.com/photo-1509697452888-7cd82c60e4eb?w=800&auto=format&fit=crop",
    category: "Regional Heritage",
  },
  {
    id: "dish-4",
    title: "Pad Kra Pao",
    description: "Authentic Thai basil stir-fry, perfectly seasoned with garlic, chilies, and soy sauce, served over fragrant jasmine rice.",
    imageUrl: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop",
    category: "Bangkok Classic",
  },
];

// ─── Gallery Items (Gallery page) ────────────────────────────────────────────
export const galleryItems = [
  { id: 1, category: "Culinary Craft", title: "Summer Greens", src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop", alt: "close-up of a vibrant asian salad bowl", arch: true },
  { id: 2, category: "The Space", title: "Golden Hour Seating", src: "https://images.unsplash.com/photo-1626804475297-41609ea084eb?w=800&auto=format&fit=crop", alt: "restaurant interior", arch: false },
  { id: 3, category: "Culinary Craft", title: "Morning Steam", src: "https://images.unsplash.com/photo-1548869206-9ab540fb5be1?w=800&auto=format&fit=crop", alt: "steamed dumplings", arch: false },
  { id: 4, category: "Our People", title: "The Art of Plating", src: "https://images.unsplash.com/photo-1632778149955-f2d1fc68cd67?w=800&auto=format&fit=crop", alt: "chef plating", arch: true },
  { id: 5, category: "Culinary Craft", title: "Signature Phở", src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop", alt: "signature pho", arch: false },
  { id: 6, category: "The Space", title: "Shared Moments", src: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&auto=format&fit=crop", alt: "shared table plates", arch: true },
  { id: 7, category: "Culinary Craft", title: "Heritage Ingredients", src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cb431?w=800&auto=format&fit=crop", alt: "Asian ingredients detail", arch: false },
  { id: 8, category: "The Space", title: "Rattan Glow", src: "https://images.unsplash.com/photo-1509697452888-7cd82c60e4eb?w=800&auto=format&fit=crop", alt: "interior lighting", arch: true },
  { id: 9, category: "Our People", title: "Kitchen Hands", src: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&auto=format&fit=crop", alt: "chef in action", arch: false },
  { id: 10, category: "Culinary Craft", title: "Artisan Dumplings", src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop", alt: "dumplings close up", arch: true },
  { id: 11, category: "The Space", title: "Evening Ambiance", src: "https://images.unsplash.com/photo-1626804475297-41609ea084eb?w=800&auto=format&fit=crop", alt: "dining area wide", arch: false },
  { id: 12, category: "Culinary Craft", title: "Noodle Ritual", src: "https://images.unsplash.com/photo-1548869206-9ab540fb5be1?w=800&auto=format&fit=crop", alt: "pho bowl perspective", arch: true },
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
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
  },
  {
    id: "t-2",
    origin: "Seoul, Korea",
    quote: "\"다낭에서 진짜 맛있는 로컬 맛집—깔끔하고 가격도 좋고, 먹으면 행복해지는 한 끼.\"",
    subQuote: "\"A truly delicious local spot in Da Nang—clean, affordable, and a meal that makes you happy.\"",
    author: "@out.life",
    bgClass: "bg-[#F9D67B]",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
  },
  {
    id: "t-3",
    origin: "London, UK",
    quote: "One of our guests shared that even while living with Crohn's disease, they were able to enjoy traveling and dining in Vietnam without fear.",
    author: "Eloise Turner",
    bgClass: "bg-surface",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
  },
];

// ─── Home page hero gallery images ───────────────────────────────────────────
export const heroGalleryImages = [
  { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/648973326_122183387210779385_2155513783579633886_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&oh=00_Af2fhKr8rfq1YWFE8LmFPv0cIKChMCSfWImd_FJ6I6nZoA&oe=69D9D7A8", alt: "Food Gallery" },
  { src: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/594093541_122170673672779385_6905287506443387834_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&oh=00_Af0Nmb3OzCfV7jgFytZjeCv1AInc3Bz6nCxnS2SqwvHLaQ&oe=69D9BE99", alt: "Food Gallery" },
  { src: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/528170925_122152430996779385_5160444559585995045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&oh=00_Af2DwYzMn507BeYqCJtm-XnZIIcmU07mqJjRuD4JxeW4uw&oe=69D9E93B", alt: "Food Gallery" },
  { src: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/524661789_122151539126779385_7279994933948737816_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&oh=00_Af1vivBXrPhDljEOrB4iYgwbEX-CmkFHlVUTBfV6RcUj-w&oe=69DB0C30", alt: "Food Gallery" },
  { src: "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/619071973_122177530976779385_7428006373555607565_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7b2446&oh=00_Af2IGbsVnNYsOozftE5W9xOTVL5EZNEqTq2lt4K2JhzZwA&oe=69D9DDFB", alt: "Food Gallery" },
  { src: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/619654512_122178451388779385_6869231628473838582_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&oh=00_Af1BnsHFBzydFo9e0U2_nUaxkZPMmVJ58D0pNgJKiawEqQ&oe=69DAFA68", alt: "Food Gallery" },
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
