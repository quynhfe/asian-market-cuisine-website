// ─────────────────────────────────────────────────────────────────────────────
// Home Page — assembles all sections; no business logic here
// ─────────────────────────────────────────────────────────────────────────────
import HeroSection from "@/components/sections/home/HeroSection";
import FeaturedDishesSection from "@/components/sections/home/FeaturedDishesSection";
import ChefTeaserSection from "@/components/sections/home/ChefTeaserSection";
import ReviewsSection from "@/components/sections/home/ReviewsSection";
import VisitUsSection from "@/components/sections/home/VisitUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDishesSection />
      <ChefTeaserSection />
      <ReviewsSection />
      <VisitUsSection />
    </>
  );
}
